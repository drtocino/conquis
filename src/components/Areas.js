import React from 'react';
import { Link } from 'react-router-dom';

const Areas = () => {
    return (
        <div className=''>
                <h1>Areas</h1>
                <div className='grid grid-cols-1 min-w-[14rem] md:grid-cols-2 lg:grid-cols-3 gap-2 text-white text-xs md:text-base text-center'>
                    <Link className='' to={'adra'}>
                    <div className='bg-indigo-400 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-indigo-700 p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>ADRA</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-indigo-700 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-emerald-500'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'adra'}>
                    <div className='bg-sky-300 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-sky-500 p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>Artes y habilidades manuales</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-sky-500 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-slate-300'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'agricolas'}>
                    <div className='bg-[#c9a48f] md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-[#331504] p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>Actividades agricolas</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-[#331504] p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-yellow-500'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'misioneras'}>
                    <div className='bg-blue-400 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-blue-700 p-2 flex items-center overflow-auto rounded-l h-full'>
                                <span className='m-auto overflow-x-auto overflow-y-auto'>Actividades misioneras y comunitarias</span>
                            </div>
                            <div className='col-span-2 p-2 h-full'>
                                <div className='rounded-full mx-auto h-full bg-blue-700 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-slate-300'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'profesionales'}>
                    <div className='bg-red-400 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-red-700 p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>Actividades profesionales</span>
                            </div>
                            <div className='col-span-2 p-2 h-full'>
                                <div className='rounded-full mx-auto h-full bg-red-700 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-blue-600/70'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'AR'}>
                    <div className='bg-green-300 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-green-600 p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>Actividades recreativas</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-green-600 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-slate-300'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Link>
                    <Link to={'CS'}>
                    <div className='bg-purple-400 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-purple-700 p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>Ciencia y salud</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-purple-700 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-fuchsia-600/80'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'naturaleza'}>
                    <div className='bg-gray-300 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-gray-800 p-2 flex items-center rounded-l-sm h-full'>
                                <span className='m-auto overflow-x-auto'>Estudio de la naturaleza</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-gray-400/40 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-amber-600/50'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'domesticas'}>
                    <div className='bg-yellow-500 md:h-full md:min-h-[5rem] h-24 max-h-24 rounded'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-amber-700 p-2 flex items-center rounded-l-sm h-full'>
                                <span className='m-auto overflow-x-auto'>Habilidades domesticas</span>
                            </div>
                            <div className='col-span-2 p-2'>
                                <div className='rounded-full mx-auto h-full bg-yellow-600 p-1 max-w-[150px]'>
                                    <div className='rounded-full h-full border-4 border-red-700'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to={'maestrias'}>
                    <div className='bg-white md:h-full md:min-h-[5rem] h-24 max-h-24 rounded-md'>
                        <div className='grid grid-cols-3 h-full'>
                            <div className='bg-black p-2 flex items-center rounded-l h-full'>
                                <span className='m-auto overflow-x-auto'>Maestrias</span>
                            </div>
                            <div className='col-span-2'></div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
    )
}

export default Areas