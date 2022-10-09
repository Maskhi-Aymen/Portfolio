import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[36.814416, 10.062085]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[36.814416, 10.062085]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Contact</h3>
        <span>Maskhi Aymen</span>
        <br />
        <span>Location : Manouba , Tunisia</span>
        <br />
        <span>Email: aymen.maskhi@ensi-uma.tn</span>
      </div>
    </MapContainer>
  )
}

export default Map
