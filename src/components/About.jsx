import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Angazhimi ne projekte individuale permes "self-learning" dhe zhvillimi
         i projekteve te kerkuara nga planprogramet e Universitetit "UBT, Shkenca Kompjuterike dhe inxhinieri"
         dhe Cacttus Education jane shtyllat kryesore te krijimit te aftesive baze  per programim.
         Pergjate ketyre 3 viteve kam kontribuar ne zhvillimin e projekteve individuale dhe ne grup.
         Gjate kesaj kohe modulet apo teknologjite e perdorura fillojne 
         prej bazave si HTML,CSS databazave(mysql,mongodb) e deri tek React,Vue,.NET MVC e shume te tjera
         .Por ne baze te Njohurive te fituara dhe deshires,interesimi im qendron ne React dhe ne Vuejs.
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};

export default About;
