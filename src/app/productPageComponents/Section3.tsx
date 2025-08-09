import React from 'react';

const Section3: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px 20px',
    gap: '30px',
    background: '#fff',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: 'Mansfield',
    fontWeight: 700,
    fontStyle: 'Bold',
    fontSize: '32px',
    lineHeight: '34px',
    color: '#000',
    textAlign: 'center',
  };

  const chartContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '400px',
    color: '#000',
    fontFamily: 'Mansfield',
    fontWeight: 500,
    fontStyle: 'Semi Bold',
    fontSize: '16px',
    lineHeight: '24px',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
  };

  const tdStyle: React.CSSProperties = {
    border: '1px solid #000',
    padding: '8px',
  };

  const responsiveStyle = `
    @media (max-width: 768px) {
      .section3 {
        padding: 30px 15px !important;
        gap: 20px !important;
      }
      .section3-heading {
        font-size: 28px !important;
        line-height: 30px !important;
      }
      .section3-chart {
        font-size: 14px !important;
        line-height: 22px !important;
        max-width: 350px !important;
      }
      .section3-chart td {
        padding: 6px !important;
      }
    }

    @media (max-width: 480px) {
      .section3 {
        padding: 20px 10px !important;
        gap: 15px !important;
      }
      .section3-heading {
        font-size: 24px !important;
        line-height: 26px !important;
      }
      .section3-chart {
        font-size: 12px !important;
        line-height: 18px !important;
        max-width: 300px !important;
      }
      .section3-chart td {
        padding: 4px !important;
      }
    }

    .section3-chart td:first-child {
      border-left: none !important;
    }
    .section3-chart td:last-child {
      border-right: none !important;
    }
    .section3-chart tr:first-child td {
      border-top: none !important;
    }
    .section3-chart tr:last-child td {
      border-bottom: none !important;
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section style={sectionStyle} className="section3">
        <div style={headingStyle} className="section3-heading">Specifications</div>
        <div style={chartContainerStyle} className="section3-chart">
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={tdStyle}>Weight per m2 (kg)</td>
                <td style={tdStyle}>17.5</td>
                <td style={tdStyle}>Dimensions (mm)</td>
                <td style={tdStyle}>126 x 32 x 3600mm</td>
              </tr>
              <tr>
                <td style={tdStyle}>Fixings per board</td>
                <td style={tdStyle}>17.5</td>
                <td style={tdStyle}>SKU</td>
                <td style={tdStyle}>MDEI26A</td>
              </tr>
              <tr>
                <td style={tdStyle}>Boards per m2</td>
                <td style={tdStyle}>2.14</td>
                <td style={tdStyle}>SKU</td>
                <td style={tdStyle}>MDEI26A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Section3;
