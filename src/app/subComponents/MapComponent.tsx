'use client';

import React from 'react';

const MapComponent: React.FC = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            minHeight: '400px',
            border: '1px solid #ddd',
        }}>
            <div style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '16px'
            }}>
                <div style={{ marginBottom: '10px' }}>📍</div>
                <div>Interactive Map</div>
                <div style={{ fontSize: '12px', marginTop: '5px' }}>
                    Map functionality will be available soon
                </div>
            </div>
        </div>
    );
};

export default MapComponent;