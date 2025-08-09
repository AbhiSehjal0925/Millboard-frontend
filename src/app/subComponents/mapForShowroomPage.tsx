'use client';

import dynamic from 'next/dynamic';

// Dynamically import the entire map component to avoid SSR issues
const Map = dynamic(
    () => import('./MapComponent'),
    {
        ssr: false,
        loading: () => (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                minHeight: '400px'
            }}>
                Loading Map...
            </div>
        )
    }
);

export default Map;
