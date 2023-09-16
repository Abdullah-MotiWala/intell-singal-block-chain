import { api_url } from "../contants";

export const api = async (route, method, body, token) => {
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) headers.token = token;
  const response = await fetch(`${api_url}/api/${route}`, {
    method,
    body: JSON.stringify(body),
    headers
  });
  const data = await response.json();
  return data;
};