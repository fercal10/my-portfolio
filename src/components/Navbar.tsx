
"use client"
import { Switch, Space } from 'antd';
import { Dispatch, SetStateAction, useContext } from 'react';
import { ThemaContext } from './hook/usexContext';

export function Navbar() {
  const { theme, setTheme } = useContext(ThemaContext) as { theme: string[], setTheme: Dispatch<SetStateAction<string[]>> };

  function changeColor(e: boolean) {

    !e ? setTheme([theme[0], "dark"]) : setTheme([theme[0], "light"]);
    console.log(theme);
  }

  function changeLanguage(input: boolean): void {
    const lag = input ? "es" : "en";
    setTheme([lag, theme[1]]);
  }

  return (
    <main className=" flex justify-center sticky top-0  z-50 items-center w-full  backdrop-blur-md  text-black  text-lg h-[10vh] ">
      <ul className=" gap-5  hidden md:flex">
        <li>{theme[0] == "en" ? "About" : "Sobre me"} </li>
        <li>{theme[0] == "en" ? "Skills" : "Habilidades"} </li>
        <li>{theme[0] == "en" ? "Projects" : "Proyectos"} </li>
        {/* <li>{theme[0] == "en" ? "Contact" : "Contacto"} </li> */}

      </ul>

      <div className=' flex gap-3 mx-5 items-center justify-center absolute right-16 '>

        <Switch
          onChange={(e) => changeLanguage(e)}
          checked={theme[0] === "es"}
          className='bg-transparent border-b-2 '
          unCheckedChildren={"En"}
          checkedChildren={"ES"}
        />
        <Switch
          onChange={(e) => changeColor(e)}
          checked={theme[1] === "light"}
          className='bg-sky-300   '
          unCheckedChildren={"🌙"}
          checkedChildren={"☀️"}
        />
      </div>






    </main>
  )
}
