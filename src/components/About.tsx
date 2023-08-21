"use client"

import { useContext } from "react";
import { ThemaContext } from "./hook/usexContext";
import Image from "next/image";

export function About() {
    const { theme } = useContext(ThemaContext) as { theme: string[] };
    return (
        <div className=" md grid grid-cols-1   text-center  justify-items-center relative z-10">
            <div className="lg:px-32 z-10">

                <h3 className='text-5xl py-5 '>
                    {theme[0] == "en" ? "About" : "Sobre me"}
                </h3>
                <div className=" bg-slate-700/20  h-min max-w-xl py-8 px-1  backdrop-blur-3xl rounded-md  ">

                    <p className=" font-mono ">
                        {theme[0] == "en" ? "  Full Stack developer with one year of experience. I have Flutter, .NET, Angular, and React experience, as well as knowledge of technologies like Git, Docker, SQL Server, and MongoDB. I am able to work independently and as part of a team, and have a strong work ethic. Currently finishing my degree in Computer Engineering " 
                        : " Desarrollador Full Stack con un año de experiencia. Tengo experiencia Flutter, .NET, Spring, Angular y React, así como conocimientos de las tecnologías como Git, Docker, SQL Server y MongoDB. Soy capaz de trabajar de forma independiente y como parte de un equipo, y tengo una sólida ética de trabajo., Actualmente acabando la carrera de ingeniería en computación "}
                    </p>
                </div>

            </div>
            <Image loading="lazy" className="absolute w-full " src="/assets/waves/hero-wave1.svg" alt="" />
            <Image loading="lazy" className="absolute w-full top-6" src="/assets/waves/hero-wave2.svg" alt="" />

        </div>
    );
}