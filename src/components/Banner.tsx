"use client"
import Image from "next/image";
import { useContext } from 'react'
import { motion } from "framer-motion";
import { CodeSvg } from "./CodeSvg";
import { ThemaContext } from "./hook/usexContext";

export function Banner() {
    const { theme } = useContext(ThemaContext) as { theme: string[] };

    return (
        <div className=" h-[90vh]  text-center flex justify-center flex-wrap items-center relative gap-5 p-14 ">
            <div className=" min-w-[300px] z-50">
                <h1 className='text-5xl font-black '>Fernando Calderon </h1>
                <h2 className="font-bold mt-4 text-[#1B8C11]" >{theme[0] == "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</h2>

            </div>
            <div className="px-24   min-w-[300px]">
                <Image className="border-[#1B8C11]  border-4 rounded-full" width={300} height={300} src={"/assets/perfil.jpg"} alt="perfil" />
            </div>


            <div className=" absolute w-[40%] left-[40%] lg:w-[20%] top-[0px] md:top-[-50px] opacity-95   blur-sm  ">
                <CodeSvg initialY={1.70} progressY={0.50} />
            </div>

            <div className=" absolute w-[40%] right-[50px] lg:w-[20%] top-[60%] opacity-95  lg:top-[70%]  blur-sm  ">
                <CodeSvg initialY={1.70} progressY={0.50} />
            </div>

            <div className=" absolute  w-[40%] left-[10%] lg:w-[20%] bottom-0 top-[80%] opacity-95 md:left-[5%]  blur-sm rotate-180 ">
                <CodeSvg initialY={0} progressY={0.10} />
            </div>
        </div>
    );


}