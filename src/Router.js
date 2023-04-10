import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Actividades from "./components/Actividades";
import Avances from "./components/Avances";
import Clubes from "./components/Clubes";
import Especialidades from "./components/Especialidades";
import Especialidad from "./components/Especialidad";
import Login from "./components/Login";

const Router = () => {

    return (
        <Routes >
            <Route path="/" element={<Dashboard/>} />
            <Route path="actividades" element={<Actividades/>} />
            <Route path="avances" element={<Avances />} />
            <Route path="clubes" element={<Clubes />} />
            <Route path="especialidades" element={<Especialidades />} />
            <Route path="especialidades/:nombre" element={<Especialidades />} />
            <Route path="especialidades/:nombre/:especialidad" element={<Especialidad />} />
            <Route path="login" element={<Login />} />
        </Routes>

    )
}

export default Router;