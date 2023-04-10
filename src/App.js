import React, { useEffect, useState } from "react";
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Actividades from "./components/Actividades";
import Dashboard from "./components/Dashboard";
import { MdDashboard, MdFactCheck, MdOutlineArrowBackIosNew, MdPerson, MdSettings } from 'react-icons/md'
import { RiBarChartHorizontalFill, RiCompassFill, RiFlagFill, RiQuestionMark, RiUser3Fill, RiUser4Fill } from 'react-icons/ri'
import Avances from "./components/Avances";
import {ReactComponent as ConquisLogo} from './assets/Conquis.svg'
import Clubes from "./components/Clubes";
import {useCookies} from 'react-cookie'
import Especialidades from "./components/Especialidades";
import Login from "./components/Login";
import Especialidad from "./components/Especialidad";
import Router from "./Router";

function App() {

  useEffect(() => {
    cookie.sidebar === undefined ? setCookie("sidebar",sideBarOpen,{sameSite: "strict",secure: true}) : setSideBarOpen(cookie.sidebar === "true" ? true : false );
    cookie.theme === undefined ? setCookie("theme", "light",{sameSite: "strict",secure:true}) : console.log("asd");
  }, [/* handleKeyPress */])

  const [cookie,setCookie] = useCookies(["sidebar","theme"]);
  const [sideBarOpen, setSideBarOpen] = useState(cookie.sidebar === undefined ? true : cookie.sidebar === "true" ? true : false );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [options, setOptions] = useState(false);
  

  const hideShow = () => {
    setCookie("sidebar", !sideBarOpen,{sameSite: "strict"})
    setSideBarOpen(!sideBarOpen);
    sideBarOpen ? setSettingsOpen(false) : "";
  }
  
  const changeTheme = () => {
    setCookie("theme",cookie.theme === undefined ? true : cookie.theme === "dark" ? "light" : "dark")
  }
  
  const openSettings = () => {
    setSettingsOpen(!settingsOpen);
    setSideBarOpen(true);
  }

  return (
    <div className={cookie.theme}>
      <div className="bg-gray-300 dark:bg-gray-900/95 dark:text-white flex flex-wrap justify-between" >
        <Link className="flex items-center w-64 pl-2" to={"/"}>
          <ConquisLogo className={`-scale-[0.4] -m-2`}/>
          <span className={`self-center text-xl font-semibold`}>Conquis</span>
        </Link>
        <div className="flex items-center">
          <div className="flex mx-3" >
            <RiQuestionMark className={`rounded-full bg-slate-200 dark:bg-slate-800 p-1 my-2`} size={30} />
            <span></span>
          </div>
          <button className="flex mx-3" onClick={() => setOptions(!options)} >
            <RiUser3Fill className={`rounded-full bg-slate-200 dark:bg-slate-800 p-1 my-2`} size={30} />
            <span></span>
          </button>
          <div className={`${options ? "absolute" : "hidden"} bg-slate-800 top-14 right-1 w-64 px-3 py-2 rounded flex flex-col gap-2`}>
            <span>Login</span>
            <span>Contacto</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 text-slate-900 dark:bg-gray-900 dark:text-white">
        <aside className={`${sideBarOpen ? "w-64" : "w-[4.5rem]"} h-full bg-gray-300 dark:bg-gray-800 fixed `} >
          
          <div className="overflow-y-auto py-4 px-3 bg-gray-300 dark:bg-gray-800">
            <ul className="space-y-2">
              <li className="h-10">
                <Link className="flex items-center p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" to={"/"}>
                  <MdDashboard className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Dashboard</span>
                </Link>
              </li>
              <button onClick={() => hideShow()} className="bg-slate-400/80 dark:bg-slate-700 absolute -right-4 rounded-full px-2 py-2"><MdOutlineArrowBackIosNew className={`${sideBarOpen ? "rotate-0" : "rotate-[540deg]"} arrow`} /></button>
              <li className="h-10">
                <Link className="flex items-center p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" to={"actividades"}>
                  <MdFactCheck className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Actividades</span>
                </Link>
              </li>
              <li className="h-10">
                <Link className="flex items-center p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" to={"avances"}>
                  <RiBarChartHorizontalFill className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Avances</span>
                </Link>
              </li>
              <li className="h-10">
                <Link className="flex items-center p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" to={"clubes"}>
                  <RiFlagFill className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Clubes</span>
                </Link>
              </li>
              <li className="h-10">
                <Link className="flex items-center p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" to={"especialidades"}>
                  <RiCompassFill className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Especialidades</span>
                </Link>
              </li>
              <li className="h-10">
                <Link className="flex items-center p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" to={"login"}>
                  <MdPerson className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Login</span>
                </Link>
              </li>
              <li className={`${settingsOpen ? "h-auto" : "h-10"} settings`}>
                <button className="flex items-center w-full p-2 text-base h-full rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700" onClick={() => openSettings()} >
                  <MdSettings className={`${sideBarOpen ? "" : "mx-auto"}`}/>
                  <span className={`${sideBarOpen ? "ml-3" : "ml-0 hidden"}`}>Configuracion</span>
                </button>
                <ul className={`${settingsOpen ? "" : "hidden"} settings-elements`}>
                  <li>
                  <div className={`${sideBarOpen ? "px-3 py-4" : "hidden"} overflow-y-auto`}>
                  <label htmlFor="checked-toggle" className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" onChange={() => changeTheme()} />
                    <div className="w-11 h-6 bg-slate-900 rounded-full peer peer-focus:ring-4 peer-focus:ring-yellow-600/50 dark:peer-focus:ring-yellow-600/50 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Modo oscuro</span>
                  </label>
                  </div>
                  </li>
                  <li>

                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className={`${sideBarOpen ? "ml-64" : "ml-[4.5rem]"} min-h-screen sidebar pl-6 p-3`}>
          <Router/>
        </div>
      </div>
    </div>
  );
}

export default App;
