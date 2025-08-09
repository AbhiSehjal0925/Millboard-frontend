'use client';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MapForShowroomPage = () => {
    const position: [number, number] = [51.505, -0.09];

    return (
        <div
            style={{
                width: '100%',
                height: '100%', // Matches the parent height
            }}
        >
            <MapContainer
                center={position}
                zoom={10}
                style={{
                    width: '100%',
                    height: '100%', // Ensures the map fills the container
                }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={position}>
                    <Popup>
                        A sample marker <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

// ⬇ Export using dynamic import to disable SSR
import dynamic from 'next/dynamic';
export default dynamic(() => Promise.resolve(MapForShowroomPage), { ssr: false });