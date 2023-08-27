import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { lat: 17.018383, lng: 81.781901, name: 'EXPLORENEX OVERSEAS' },
  // Add more locations with lat, lng, and name properties
];

const LeafletMap = () => {
  return (
    <MapContainer center={[17.018383, 81.781901]} zoom={5} style={{ height: '300px', width: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
