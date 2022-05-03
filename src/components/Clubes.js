import React from 'react';
import {MapContainer, TileLayer,/*Marker,Popup,TileLayer*/} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

function Clubes() {
    return (
        <div className='bg-slate-700 rounded p-2'>
            <MapContainer className='rounded' center={[-17.385201602992616, -66.31648971311407]} zoom={15} style={{width: "100%",height:"90vh"}}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>

            </MapContainer>
        </div>
                
    )
}

export default Clubes;