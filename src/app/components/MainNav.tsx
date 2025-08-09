import React from 'react';
import Image from 'next/image';

interface MainNavProps {
  onNavigate: (route: string) => void;
  current: string;
}

const MainNav: React.FC<MainNavProps> = ({ onNavigate, current }) => {
  const handleRequestSample = () => {
    onNavigate('order');
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#efcfac',
    color: '#4B5563',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '43px',
    width: '100%',
    zIndex: 21121121221, // number, not string
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    flexWrap: 'wrap',
    gap: '12px',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    flex: '1 1 100%',
    justifyContent: 'center',
    order: 2,
    padding: 0,
    margin: 0,
  };

  const linkButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#4B5563',
    padding: '4px 8px',
  };

  const logoContainerStyle: React.CSSProperties = {
    flex: '1 1 100%',
    display: 'flex',
    justifyContent: 'center',
    order: 1,
  };

  const sampleButtonStyle: React.CSSProperties = {
    backgroundColor: '#D3A069',
    color: 'white',
    fontWeight: 600,
    padding: '10px 20px',
    borderRadius: '9999px',
    border: '2px solid white',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    order: 3,
    width: '100%',
    alignSelf: 'center',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={navLinksStyle}>
          {['home', 'product', 'decor', 'thankyou', 'basket', 'order', 'showrooms', 'blogs'].map((item) => (
            <li key={item} style={{ listStyle: 'none' }}>
              <button
                onClick={() => onNavigate(item)}
                style={{
                  ...linkButtonStyle,
                  fontWeight: current === item ? 'bold' : 'normal',
                  textDecoration: current === item ? 'underline' : 'none',
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </button>
            </li>
          ))}
        </ul>

        <div style={logoContainerStyle}>
          <Image
            src="/images/mainlogo.png"
            alt="Millboard Logo"
            width={160}
            height={40}
            style={{ display: 'block', margin: '0 auto' }}
            priority
          />
        </div>

        <button
          onClick={handleRequestSample}
          style={sampleButtonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D9C6A0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#D3A069')}
        >
          Request free sample
        </button>
      </nav>

      <style jsx>{`
        @media (min-width: 768px) {
          nav {
            flex-wrap: nowrap !important;
            gap: 16px !important;
          }

          nav > div,
          nav > ul,
          nav > button {
            order: unset !important;
            flex: unset !important;
            width: auto !important;
          }

          ul {
            justify-content: flex-start !important;
            flex-grow: 1 !important;
          }

          button {
            width: auto !important;
          }
        }
      `}</style>
    </header>
  );
};

export default MainNav;
