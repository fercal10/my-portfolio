"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { name: "Angular", svg: "/assets/Icons/angular.svg" },
    { name: "Java", svg: "/assets/Icons/java.svg" },
    { name: "Exprex", svg: "/assets/Icons/exprex.svg" },
    { name: "Figma", svg: "/assets/Icons/figma.svg" },
    { name: "Flutter", svg: "/assets/Icons/flutter.svg" },
    { name: "Javascript", svg: "/assets/Icons/javascript.svg" },
    { name: ".Net", svg: "/assets/Icons/net.svg" },
    { name: "Next", svg: "/assets/Icons/next.svg" },
    { name: "React", svg: "/assets/Icons/react.svg" },
    { name: "Tailwind", svg: "/assets/Icons/tailwind.svg" },
    { name: "TypeScript", svg: "/assets/Icons/typescript.svg" },
    { name: "Unity", svg: "/assets/Icons/unity.svg" },
];
export default function Skills() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                // delayChildren: 0.3,
                // staggerChildren: 0.2
            }

        }
    };

    const item = {
        initial: { y: 20, opacity: 0 },
        animate: (idx: number) => {
            return {
                y: 0,
                opacity: 1,
                transition: { delay: 0.1 * idx, }
            };
        },

    };

    return <div className="relative">
        <div className=" flex justify-center text-center flex-col mx-auto w-[80vw] relative z-20">

            <h3 className="text-5xl pb-6 pt-12 ">Skills</h3>
            <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 self-center gap-x-6   gap-y-5 "
            >
                {skills.map(({ name, svg }, idx) =>

                    <motion.li
                        key={idx}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={idx}
                        variants={item}
                        className=" flex flex-col items-center  aspect-square h-20 rounded-lg  text-black  ">
                        <Image loading="lazy" className="" width={40} height={50} key={name} src={svg} alt={name} />
                        <span className="pt-2 ">{name}</span>
                    </motion.li >

                )}

            </motion.ul>

        </div>
        {/* <img className="absolute w-full top-[48px] rotate-180 " src="/assets/waves/testimonial-wave1.svg" alt="" /> */}
        <Image loading="lazy" className="absolute w-full top-10 rotate-180   " src="/assets/waves/testimonial-wave6.svg" alt="" />
        {/* <img className="absolute w-full top-[48px] rotate-180 " src="/assets/waves/testimonial-wave3.svg" alt="" /> */}

    </div>
}