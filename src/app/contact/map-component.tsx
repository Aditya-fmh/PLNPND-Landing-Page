'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet marker icon in Next.js
const customIcon = () => {
  return new L.Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon-2x.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

interface MapComponentProps {
  position: [number, number];
}

export default function MapComponent({ position }: MapComponentProps) {
  return (
    <div className="h-full min-h-[500px]">
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon()}>
          <Popup>
            <div className="text-center p-2">
              <strong className="text-lg">Pusat Laptop Nusantara Pangandaran</strong><br />
              <span className="text-sm text-gray-600">Toko Laptop Bekas Berkualitas</span><br />
              <hr className="my-2" />
              Jam Buka: 08:00 - 19:30 WIB<br />
              WhatsApp: <a href="https://wa.me/6288221957963" className="text-blue-600 hover:underline">088221957963</a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
