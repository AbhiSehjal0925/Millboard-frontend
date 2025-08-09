'use client';

import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// Import leaflet CSS and compatibility fixes
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const MapComponent: React.FC = () => {
    const position: LatLngExpression = [51.505, -0.09];

    useEffect(() => {
        // Fix for leaflet icons in Next.js
        if (typeof window !== 'undefined') {
            // This ensures leaflet icons work properly
            delete (window as any).L;
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapContainer
                center={position}
                zoom={10}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution={
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }
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

export default MapComponent;
