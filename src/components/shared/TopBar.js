import React, { useEffect, useState } from "react";
import TopCard from "./TopCard";
import { useSelector } from "react-redux";
import { packageData } from "./PlanCollections";

const TopBar = () => {
  // Add CountDown Logic
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [expired, setExpired] = useState(false);
  const { user } = useSelector((state) => state.user);
  function calculateExpiry(purchasedAt, expirationDays) {
    if (!purchasedAt || !expirationDays) return;
    const purchasedDate = new Date(purchasedAt);
    const expiryDate = new Date(purchasedDate);
    expiryDate.setDate(purchasedDate.getDate() + expirationDays);
    return expiryDate.toISOString();
  }

  console.log(user?.purchased_at, user, packageData[user?.purchased_plan]);
  // Set the expiryDate with a valid date string
  const expiryDate = calculateExpiry(
    user?.purchased_at,
    packageData[user?.purchased_plan]?.expiredAt
  );

  let countdownInterval; // Declare countdownInterval outside of useEffect

  useEffect(() => {
    const updateCountdown = () => {
      if (!expiryDate) return;
      const currentTime = new Date();
      const remainingTimeMillis = new Date(expiryDate) - currentTime;

      if (remainingTimeMillis <= 0) {
        setExpired(true);
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(remainingTimeMillis / (1000 * 3600 * 24));
      const hours = Math.floor(
        (remainingTimeMillis % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      const minutes = Math.floor(
        (remainingTimeMillis % (1000 * 3600)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTimeMillis % (1000 * 60)) / 1000);

      setRemainingDays(days);
      setRemainingHours(hours);
      setRemainingMinutes(minutes);
      setRemainingSeconds(seconds);
    };

    // Initial call to update countdown
    updateCountdown();

    // Update the countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);

    // Cleanup the interval on unmount
    return () => {
      clearInterval(countdownInterval);
    };
  }, [expiryDate]);

  let activePAckage = "N/A";
  if (user?.purchased_plan == 0) activePAckage = "Free";
  if (user?.purchased_plan == 1) activePAckage = "Premium";
  if (user?.purchased_plan == 3) activePAckage = "VIP";
  if (user?.purchased_plan == 2) activePAckage = "Premium";
  if (user?.purchased_plan == 4) activePAckage = "VIP";
  return (
    <div className="flex gap-4 flex-col md:flex-row justify-between">
      <TopCard title={"Active Package"} caption={activePAckage} />
      <TopCard title={"User Name"} caption={user?.name} />
      <TopCard
        title={"Expires In"}
        caption={
          ((user?.purchased_plan === null ||
            user?.purchased_plan === undefined) &&
            "00:00:00:00") ||
          (expired
            ? "The token has expired."
            : `${remainingDays}:${remainingHours}:${remainingMinutes}:${remainingSeconds}`)
        }
      />
    </div>
  );
};

export default TopBar;
