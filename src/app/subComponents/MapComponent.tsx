'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
    selectedShowroom?: number | null;
}

const MapComponent: React.FC<MapComponentProps> = ({ selectedShowroom }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markersRef = useRef<L.Marker[]>([]);

    const showroomLocations = [
        {
            name: 'Millboard Midlands Experience Centre',
            address: 'Erdington, 3 Tyburn Way, Birmingham, B24 0AZ',
            coordinates: [52.4862, -1.8904] as [number, number] // Birmingham coordinates
        },
        {
            name: 'Millboard Belfast',
            address: '62 Trench Rd, Mallusk, Millboard Belfast Showroom, Newtownabbey, BT36 4LB',
            coordinates: [54.6872, -5.9600] as [number, number] // Belfast coordinates
        },
        {
            name: 'Open Habitat',
            address: '6-8 Peterborough Mews, Open Habitat, London, SW6 3BL',
            coordinates: [51.4745, -0.1995] as [number, number] // London coordinates
        },
        {
            name: 'Outdoor Living Show Garden',
            address: '162 St Clair St, Show Garden - The Outdoor Living Co., Kirkcaldy, KY1 2BZ',
            coordinates: [56.1165, -3.1598] as [number, number] // Kirkcaldy coordinates
        }
    ];

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Initialize map
        const map = L.map(mapRef.current).setView([54.2361, -4.5481], 6); // Center of UK
        mapInstanceRef.current = map;

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add markers for each showroom
        const markers: L.Marker[] = [];
        showroomLocations.forEach((showroom, index) => {
            const marker = L.marker(showroom.coordinates).addTo(map);
            markers.push(marker);

            // Create popup content
            const popupContent = `
                <div style="padding: 10px; min-width: 200px;">
                    <h3 style="margin: 0 0 10px 0; color: #d3a069; font-size: 16px;">${showroom.name}</h3>
                    <p style="margin: 0; color: #333; font-size: 14px;">${showroom.address}</p>
                </div>
            `;

            marker.bindPopup(popupContent);
        });
        markersRef.current = markers;

        // Fit map to show all markers
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    // Effect to handle selected showroom changes
    useEffect(() => {
        if (!mapInstanceRef.current || selectedShowroom === null || selectedShowroom === undefined) return;

        const map = mapInstanceRef.current;
        const markers = markersRef.current;

        // Reset all markers to default appearance
        markers.forEach((marker, index) => {
            marker.setIcon(L.Icon.Default.prototype);
        });

        // Highlight selected marker
        if (markers[selectedShowroom]) {
            const selectedMarker = markers[selectedShowroom];

            // Create custom icon for selected marker
            const selectedIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #d3a069; width: 30px; height: 30px; display: block; left: -15px; top: -15px; position: relative; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            selectedMarker.setIcon(selectedIcon);

            // Pan to selected marker
            map.setView(selectedMarker.getLatLng(), 10);

            // Open popup for selected marker
            selectedMarker.openPopup();
        }
    }, [selectedShowroom]);

    return (
        <div
            ref={mapRef}
            style={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                // borderRadius: '8px',
                overflow: 'hidden'
            }}
        />
    );
};

export default MapComponent;