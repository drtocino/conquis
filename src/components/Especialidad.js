import axios from 'axios';
import { collection, collectionGroup, getDocs, query, where } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Address from '../Address';
import { db } from '../database/firebase';

const Especialidad = (props) => {

    const {especialidad,nombre} = useParams();

    const [datosEspecialidad, setDatosEspecialidad] = useState({})
    const [requisitos, setRequisitos] = useState([])
    const [area, setArea] = useState({})

    useEffect(() => {
        getCategoria(db)
    }, [])

    const getCategoria = async (firestore) => {
        const queryCategorias = query(collection(firestore, "honorCategories"), where("code", "==", nombre));
        const categoriasSnapshot = await getDocs(queryCategorias);
        const categoriasList = categoriasSnapshot.docs.map(doc => doc.data());
        if(categoriasList.length > 0){
            setArea(categoriasList[0])
            getRequirements(firestore,categoriasList[0].id,especialidad)
        }
        console.log(categoriasList);

    }

    const getRequirements = async (firestore, cat, honor) => {
        // const queryEspecialidades = query(collection(firestore, "honorCategorieshonors"), where("code", "==", props.area));
        const especialidadesSnapshot = await getDocs(collection(firestore,"honorCategories/"+cat+"/honors/"+honor+"/requirements"));
        const especialidadesList = especialidadesSnapshot.docs.map(doc => {
            return {...doc.data(),id: doc.id}
        });
        console.log(especialidadesList)
        setRequisitos(especialidadesList);
    }
    
    // const getRequirements = async () => {
    //     query(collectionGroup(firestore,"honors"),)
    //     const requirementsSnapshot = await getDocs(collection(firestore,"honorCategories/"+id+"/honors"));
    // }

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
                        <div key={val.id} >
                            <span className='font-bold'>{val.number}. </span>
                            <span>{val.instruction}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Especialidad;