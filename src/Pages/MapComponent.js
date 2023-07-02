
import { Icon } from 'leaflet';
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const MapComponent = ({data}) => {

  
  const customIcon = new Icon({
    iconUrl:require("../images/placeholder.png")
  }); 
  console.log(data);
  return (
    <div>
        <MapContainer center={[data[0].lat,data[0].long]} zoom={12}>
          <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          ></TileLayer>
          


          {
            data.map((marker,i) =>{
             return(
              <Marker position={[marker.lat,marker.long]} icon={customIcon} key={i}>
                <Popup>{marker.name}</Popup>
              </Marker>
             )
            })
          }
        </MapContainer>
    </div>
  )
}

export default MapComponent