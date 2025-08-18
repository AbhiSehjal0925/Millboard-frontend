import React from 'react';

const Section3: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    // fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '100px 20px',
    gap: '30px',
    background: '#fff',
  };

  const headingStyle: React.CSSProperties = {
    // fontFamily: 'Mansfield',
    fontWeight: 500,
    fontSize: '45px',
    lineHeight: '34px',
    color: '#000',
    textAlign: 'center',
  };

  const chartContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1000px',
    color: '#000',
    // fontFamily: 'Mansfield',
    fontWeight: 500,
    fontStyle: 'Semi Bold',
    fontSize: '16px',
    lineHeight: '24px',
  };

  return (
    <>
      <section style={sectionStyle} className="section3">
        <div style={headingStyle} className="section3-heading">Specifications</div>
        <div style={chartContainerStyle} className="section3-chart">
          <div style={{
            maxWidth: 700,
            margin: '0 auto',
            background: '#fff',
            padding: '2rem 1rem',
            borderRadius: 8,
          }}>
            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="header">Weight per m2 (kg)</td>
                  <td>17.5</td>
                  <td className="header">Dimensions (mm)</td>
                  <td><em>126 x 32 x 3600mm</em></td>
                </tr>
                <tr>
                  <td className="header">Fixings per board</td>
                  <td>17.5</td>
                  <td className="header">SKU</td>
                  <td><em>MDE126A</em></td>
                </tr>
                <tr>
                  <td className="header">Boards per m2</td>
                  <td><em>2.14</em></td>
                  <td className="header">SKU</td>
                  <td><em>MDE126A</em></td>
                </tr>
              </tbody>
            </table>
            <style jsx>{`
              .spec-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 1.1rem;
                margin: 0 auto;
                background: #fff;
              }
              .spec-table td {
                padding: 1.1rem 0.5rem;
                border-bottom: 1px solid #22222286;
                border-right: 1px solid #22222286;
                text-align: left;
                font-family: 'Mansfield', Arial, sans-serif;
                font-size: 1.05rem;
                vertical-align: middle;
              }
              .spec-table tr:last-child td {
                border-bottom: none;
              }
              .spec-table td:last-child {
                border-right: none;
              }
              .spec-table .header {
                font-weight: 500;
                color: #111;
              }
              .spec-table em {
                font-style: italic;
                color: #222;
              }
              @media (max-width: 600px) {
                .spec-table td {
                  padding: 0.6rem 0.25rem;
                  font-size: 0.98rem;
                }
              }
            `}</style>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
