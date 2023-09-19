// import Particles from "react-tsparticles";
// import particlesConfig from "../config/particles.config";
import CustomParticle from "../components/CustomParticle";
import ParticlesBackground from "./ParticlesBackground";
const IntelligentSignalEcosystem = () => {
  return (
    // <ParticlesBackground>
    <div
      className="min-h-screen bg-cover w-full flex justify-center "
      id="performance"
    >
      {/* <ParticlesBackground /> */}
      {/* <div className="-z-10"> */}
      {/* </div> */}
      <div className="-z-10">
        <CustomParticle />
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl lg:items-stretch items-center py-8">
        <div className="flex lg:w-1/2 w-4/5 p-2 flex-col items-center justify-center">
          <img className="w-auto h-auto" src="/img/com.png" alt="a" />
        </div>
        <div className="flex lg:w-1/2 w-4/5 p-5 mt-3 lg:-mt-0   flex-col rounded-xl bg-black bg-opacity-40 hover:bg-opacity-50  gap-8">
          <h2 className="custom-mini-heading mb-3">
            <span className="text-orange-400">Intelligent Signal </span>
            <span className="text-red-500">Ecosystem</span>{" "}
          </h2>

          <p className="custom-caption-text opacity-100">
            Community-Centric: Intelligent Signals believes the community is the
            key to success, especially in Web3. The happier and more successful
            a project community is, the more likely the members are to spread
            the word and help Intelligent Signals to scale new heights. With
            encouraging community engagement and loyalty uppermost in mind,
            Intelligent Signals’ dedicated Discord group is an open forum for
            token discussions and all aspects of trading.{" "}
          </p>
          <p className="custom-caption-text opacity-100">
            Transparency: At the heart of Web3 are community, collaboration, and
            transparency. One of the core differences between Crypto and
            traditional finance is the availability of real-time open-source
            information. Intelligent Signals highly values integrity and
            openness, and it is this that guides our transparent information
            sharing. Intelligent Signals will provide constant updates on social
            media, with all INSIG transactions available on the blockchain in
            real time.
          </p>
          <p className="custom-caption-text opacity-100">
            Risk-conscious: Every trade and market has risk-to-reward trade-offs
            related to risk profile, trading style, and psychology.
            Understanding and managing trading risk is essential to the
            Intelligent Signals platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntelligentSignalEcosystem;
