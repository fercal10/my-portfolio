"use client"

import {  GithubOutlined, } from '@ant-design/icons';
import { Card } from 'antd';
import {  motion, } from 'framer-motion';
import {  useRouter } from 'next/navigation';
import { useContext,  } from 'react';
import { Tags } from './Tag';
import Image from 'next/image';
import { ThemaContext } from './hook/usexContext';
const { Meta } = Card;



const a = [
    {
        title: "Pokedex-app",
        subtitle: "Pokedex-app",
        img: "/assets/pokedex.webp",
        page: "https://pokedex-app-sage.vercel.app/",
        url: "https://github.com/fercal10/Pokedex-app",
        skills: ["Next", "TypeScript", "Tailwind"],
    },
    {
        title: "KanbarBoard",
        subtitle: "KanbarBoard",
        img: "/assets/kanbar.webp",
        page: "https://kanba-board.vercel.app/",
        url: "https://github.com/fercal10//KanbaBoard",
        skills: ["Angular", "TypeScript"],
    },
    {
        title: "Markdown-editor",
        subtitle: "Markdown-editor",
        img: "/assets/markdown.webp",
        page: "https://markdown-editor-ecru-eight.vercel.app/",
        url: "https://github.com/fercal10/markdown-edit",
        skills: ["React", "JavaScript", "Tailwind"],
    },
    {
        title: "YoutubeDownload",
        subtitle: "YoutubeDownload",
        img: "/assets/Youtube.webp",
        page: "https://youtube-download-sigma.vercel.app/",
        url: "https://github.com/fercal10/YoutubeDownload",
        skills: ["JavaScript", "Next", "Tailwind"],
    },
];

export default function Projects() {
    const { theme } = useContext(ThemaContext) as { theme: string[] };
    const router = useRouter();
    // const router = useRouter()

    // const [selectedId, setSelectedId] = useState<number | null>(null)

    // useEffect(() => {
    //     if (selectedId === null) {
    //         window.removeEventListener('wheel', preventScroll);
    //     } else {
    //         window.addEventListener('wheel', preventScroll, { passive: false });
    //     }
    //     // Limpiar el evento al desmontar el componente
    //     return () => {
    //         window.removeEventListener('wheel', preventScroll);
    //     }
    // }, [selectedId]);

    // function preventScroll(e: Event) {
    //     e.preventDefault();
    // }


    return (<div className='w-full flex-col pb-20  text-center z-20 relative' >


        <h3 className="text-5xl pb-6 pt-12 " >{theme[0] == "en" ? "Projects" : "Proyectos"}  </h3>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-16  justify-center mx-5 my-8  md:mx-16 md:my-20'>

            {a.map((item, idx) => (
                <a href={item.url} target="_blank" key={idx}>

                    <motion.div className=''>
                        <Card
                            hoverable
                            onClick={()=>router.push(item.page)}
                            className=' hover:scale-105  duration-300 ease-in'
                            cover={
                                <Image
                                loading='lazy'
                                    width={300}
                                    height={200}
                                    alt={item.title}
                                    src={item.img} />
                            }

                            actions={[
                                <GithubOutlined href={item.url} target='_blank' className='hover:scale-150' key="GitHub" />,
                                // <EditOutlined key="edit" />,
                                // <SendOutlined key="Share" />
                            ]}
                        >
                            <Meta
                                title={item.title}
                                description={item.subtitle}
                            />
                            <Tags data={item.skills} />
                        </Card>
                    </motion.div>
                </a>
            ))}




            {/* <AnimatePresence>
                {selectedId && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed top-0 left-0 h-[100vh] w-[100vw]  overflow-y-hidden  overscroll-none flex justify-center items-center  transition duration-300 ease-in-out bg-blue-50/10 backdrop-blur-sm   text-black'
                        onClick={() => setSelectedId(null)}  >
                        <div className=' h-[60vh] w-[80vw] md:w-[60vw] md:h-[40vh]  rounded-lg  border-red-950/60 border-x-[24px] border-y-[16px] relative'>
                            <div className=' bg-black text-white font-semibold p-4   h-full w-full'>

                                <motion.h2 className='text-lg font-bold'>{a[selectedId - 1].title}</motion.h2>
                                <motion.h5 className=' text-xs md:text-base mt-3'> Subtitle</motion.h5>

                                <Button type='primary' className=' absolute bottom-2 right-2  bg-blue-950' onClick={() => setSelectedId(null)} >Cerrar</Button >
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div>




    </div>);
}