import React from "react";

const Homepage = () => {
  return (
    <div className="bg-red-500 px-16 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <img
          src="src/assets/images/homepage.png"
          alt="Hidden Heroes Intro Image"
          className="w-1/2 h-1/2 rounded-lg pt-5"
        />
        <h1 className="text-6xl font-bold pt-10 pb-10">
          Welcome to Hidden Heroes
        </h1>
        <h2 className="text-2xl italic pb-16">
          Who will you discover lurking under the surface?
        </h2>
      </div>
      <p className="text-left">
        On 15th January 1924, the world&apos;s first original adult radio play
        was broadcast. Unbenownst to anyone at the time, this broadcast was cast
        far and wide into the wider solar system. In response, the Planetary
        Exploration Agency immediately allocated five agents to Earth, ordering
        them to observe and monitor Earth&apos;s progress. The agents, working
        within a utopianary union of planets, were entirely unfamiliar with
        Earth&apos;s practices. They were quickly seduced by the vices
        Earth&apos;s inhabitants spent their time consuming. Longing for home
        and their loved ones, they sought the company of Earthlings, causing the
        birth of more superpowered beings. On 1st May 2024, the oldest of those
        spies, who had taken on the name of George Thompason, came to the
        attention of international media when Israeli forces launched a wave of
        missiles at Palestinian territory. Shockingly, the missiles were
        recoiled by a defensive shield. Further attempts to penetrate the shield
        failed, and Tyler revealed himself. Fed up of seeing Earthlings
        destroying themselves, Tyler announced himself to the world, opening up
        the minds of everyone and causing rampant paranoia worldwide. You are an
        agent assigned to the global taskforce, formed by intelligence services
        worldwide, to investigate and detect specials around the world.
      </p>
      <p className="text-xl pt-10">Who will you discover today?</p>
      <button className="bg-cyan-500 h-16 w-32 rounded-lg text-3xl font-bold mt-20 mb-20">
        Start
      </button>
    </div>
  );
};

export default Homepage;
