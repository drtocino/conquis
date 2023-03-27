import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Address from '../Address'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../database/firebase';

const ListaEspecialidades = (props) => {

    const [especialidades, setEspecialidades] = useState([])
    const [area, setArea] = useState({})

    useEffect(() => {
        getCategoria(db)
    }, [])

    const getCategoria = async (firestore) => {
        const queryCategorias = query(collection(firestore, "honorCategories"), where("code", "==", props.area));
        const categoriasSnapshot = await getDocs(queryCategorias);
        const categoriasList = categoriasSnapshot.docs.map(doc => doc.data());
        if(categoriasList.length > 0){
            setArea(categoriasList[0])
            getEspecialidades(firestore,categoriasList[0].id)
        }
        console.log(categoriasList);

    }
    
    const getEspecialidades = async (firestore, id) => {
        // const queryEspecialidades = query(collection(firestore, "honorCategorieshonors"), where("code", "==", props.area));
        const especialidadesSnapshot = await getDocs(collection(firestore,"honorCategories/"+id+"/honors"));
        const especialidadesList = especialidadesSnapshot.docs.map(doc => {
            return {...doc.data(),id: doc.id}
        });
        console.log(especialidadesList)
        setEspecialidades(especialidadesList);
    }

    return (
        <div>
            <div>{area.name} <span className={`rounded px-1 text-sm font-bold bg-${area.color}-600`}>{area.code}</span></div>
            <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    especialidades.map((val,i) => {
                        return (
                            <Link to={val.id} className='bg-slate-200 dark:bg-slate-800 p-2 rounded' key={val.id}>
                                <div className='font-bold'>{val.name}</div>
                                <div className='text-sm'>{val.description}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListaEspecialidades