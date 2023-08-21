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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quidem quos molestiae officiis nisi placeat aspernatur culpa, reprehenderit voluptates temporibus hic, libero numquam. Officiis corrupti officia, voluptatibus perferendis quaerat doloremque!
                </p>
            </div>

            </div>
            <Image loading="lazy" className="absolute w-full " src="/assets/waves/hero-wave1.svg" alt=""/>
            <Image loading="lazy" className="absolute w-full top-6" src="/assets/waves/hero-wave2.svg" alt="" />

        </div>
    );
}