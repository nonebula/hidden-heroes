import BackstoryLogic from "./BackstoryLogic";
import originals from "../../data/originals.json";

const Backstory = () => {
  return (
    <div className="container bg-black border border-lime-500 flex flex-col items-center font-roboto-mono">
      <p>
        <h1 className="text-lime-700 font-bold mt-16 mb-5 animate-pulse text-6xl">
          Backstory
        </h1>
        <p className="text-lime-500 pl-24 pr-24 mt-10 mb-10">
          On 15th January 1924, the world's first original adult radio play was
          broadcast. Unbenownst to anyone at the time, this broadcast was cast
          far and wide across the solar system. In response, the Planetary
          Exploration Agency immediately allocated five agents to Earth,
          ordering them to observe and monitor Earth's progress. The agents,
          working within a utopian union of planets, were entirely unfamiliar
          with Earth's practices. Over time, they were seduced by the vices
          Earth's inhabitants spent their time consuming. Longing for home and
          their loved ones, they sought the company of Earthlings, causing the
          birth of more superpowered beings. On 1st May 2024, the oldest of
          those spies, who had taken on the name of George Thompson, came to the
          attention of international media when Israeli forces launched a wave
          of missiles at Palestinian territory. Shockingly, the missiles were
          recoiled by a defensive shield. Further attempts to penetrate the
          shield failed, and George revealed himself. Fed up of seeing
          Earthlings destroying themselves, George announced himself to the
          world, opening up the minds of everyone and causing rampant paranoia
          worldwide. Determined to do good, the originals and their offspring
          are slowly beginning to reveal themselves, showing themselves as
          heroes in all kinds of ways.
        </p>
      </p>
      <h2 className="text-lime-700 font-bold mt-5 mb-5 animate-pulse text-4xl">
        Meet The Originals
      </h2>
      {originals.map((original) => (
        <BackstoryLogic key={original.id} original={original} />
      ))}
    </div>
  );
};

export default Backstory;
