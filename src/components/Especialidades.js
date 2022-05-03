import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Areas from './Areas';
import ListaEspecialidades from './ListaEspecialidades';

const Especialidades = () => {

    const {nombre} = useParams();
    //const [especialidades, setEspecialidades] = useState([])

    useEffect(() => {
        
    }, [])

    
    return (
        <div className='overflow-y-auto'>
            <h1 className='text-2xl'>Especialidades</h1>
            {
                nombre ?
                <ListaEspecialidades area={nombre} />
                :
                <Areas/>
            }
            <span>{}</span>
        </div>
    )
}

export default Especialidades;