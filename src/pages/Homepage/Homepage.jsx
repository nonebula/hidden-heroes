import { useNavigate } from "react-router";
import Typewriter from "./Typewriter";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black border border-lime-500 px-16 mx-16 flex flex-col items-center font-roboto-mono">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/homepage.png"
          alt="Hidden Heroes Intro Image"
          className="w-1/2 h-1/2 rounded-lg pt-5"
        />
        <h1 className="text-6xl font-bold pt-10 pb-10 animate-pulse text-lime-500">
          Welcome to Hidden Heroes
        </h1>
        <h2 className="text-2xl italic pb-16 animate-pulse text-lime-700">
          Who will you discover lurking under the surface?
        </h2>
      </div>
      <p className="h-72 mb-10 text-lime-500">
        <Typewriter text="On 15th January 1924, the world's first original adult radio play was broadcast. Unbenownst to anyone at the time, this broadcast was cast far and wide across the solar system. In response, the Planetary Exploration Agency immediately allocated five agents to Earth, ordering them to observe and monitor Earth's progress. The agents, working within a utopian union of planets, were entirely unfamiliar with Earth's practices. Over time, they were seduced by the vices Earth's inhabitants spent their time consuming. Longing for home and their loved ones, they sought the company of Earthlings, causing the birth of more superpowered beings. On 1st May 2024, the oldest of those spies, who had taken on the name of George Thompson, came to the attention of international media when Israeli forces launched a wave of missiles at Palestinian territory. Shockingly, the missiles were recoiled by a defensive shield. Further attempts to penetrate the shield failed, and George revealed himself. Fed up of seeing Earthlings destroying themselves, George announced himself to the world, opening up the minds of everyone and causing rampant paranoia worldwide. You are an agent assigned to the global taskforce, formed by intelligence services worldwide, to investigate and detect specials around the world." />
      </p>
      <p className="text-xl mt-20 pt-20 animate-pulse text-lime-700">
        Who will you discover today?
      </p>
      <button
        className="bg-lime-500 h-16 w-32 rounded-lg text-3xl font-bold mt-20 mb-20 animate-pulse"
        onClick={() => navigate("/discover")}
      >
        Start
      </button>
    </div>
  );
};

export default Homepage;
