import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Address from '../Address';

const Especialidad = (props) => {

    const {especialidad} = useParams();

    const [datosEspecialidad, setDatosEspecialidad] = useState({})
    const [requisitos, setRequisitos] = useState([])

    useEffect(() => {
        axios.get(`${Address}/getEspecialidad/${especialidad}`).then((res) => {
            setDatosEspecialidad(res.data);
            setRequisitos(res.data.requisitos)
            console.log(res.data)
        })
        axios.get(`${Address}/getRequisitosByEsp/${especialidad}`).then((res) => {
            setRequisitos(res.data);
            //console.log(res.data)
        })
    }, [])
    


    return (
        <div className=''>
            <h1 className='text-2xl font-bold'>{datosEspecialidad.nombre}</h1>
            <div className='grid grid-cols-1 min-h-[8rem] sm:grid-cols-4 gap-1 sm:gap-2 text-white'>
                <div className='col-span-3 grid grid-cols-3 md:grid-cols-6 gap-1 sm:gap-2 min-h-[8rem]  '>
                    <div className='bg-purple-900 flex items-center justify-center font-bold'><h1>CS</h1></div>
                    <div className='bg-purple-700 col-span-2 md:col-span-5 px-2 flex items-center'>
                        <h1>{datosEspecialidad.nombre}</h1>
                    </div>
                    <div className='bg-purple-700 min-w-[1rem] text-white items-center flex justify-center font-bold'>
                        <h1>{String(datosEspecialidad.numero).padStart(3,"0")}</h1>
                    </div>
                    <div className='bg-purple-400 text-purple-900 items-center flex justify-center font-bold'>
                        <div className='text-center'>
                            <h1>Nivel</h1>
                            <h1>{datosEspecialidad.nivel}</h1>
                        </div>
                    </div>
                    <div className='bg-purple-400 text-purple-900 items-center flex justify-center font-bold'>
                        <div className='text-center'>
                            <h1>Año</h1>
                            <h1>{datosEspecialidad.anio}</h1>
                        </div>
                    </div>
                    <div className='bg-purple-700 col-span-3 px-2 flex items-center'>
                        <div>
                        <h1>Institucion de Origen</h1>
                        <h1 className='font-bold'>{datosEspecialidad.origen}</h1>
                        </div>
                    </div>

                </div>
                <div className='bg-purple-400'>

                </div>
            </div>
            <h1 className='font-bold mt-3'>REQUISITOS</h1>
            {
                requisitos.map((val) => {
                    return (
                        <div key={val._id} >
                            <span className='font-bold'>{val.numero}. </span>
                            <span>{val.instruccion}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Especialidad;