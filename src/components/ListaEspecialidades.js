import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaEspecialidades = (props) => {

    const [especialidades, setEspecialidades] = useState([])
    const [area, setArea] = useState({})

    useEffect(() => {
        //console.log(props)
        axios.get(`http://192.168.1.7:3001/getEspecialidades/${props.area}`).then((res) => {
            setEspecialidades(res.data)
        })
        axios.get(`http://192.168.1.7:3001/getAreaByAcronim/${props.area}`).then((res) => {
            //console.log(res.data)
            setArea(res.data)
        })
    }, [])
    

    return (
        <div>
            <div>{area.nombre} <span className={`rounded px-1 text-white text-sm font-bold ${area.color_clase}`}>{area.abreviacion}</span></div>
            <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    especialidades.map((val) => {
                        return (
                            <Link to={val._id} className='bg-slate-200 dark:bg-slate-800 p-2 rounded' key={val._id}>
                                <div className='font-bold'>{val.nombre}</div>
                                <div className='text-sm'>{val.descripcion}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListaEspecialidades