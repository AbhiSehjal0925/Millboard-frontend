const Header = () => {
  const bannerStyle = {
    width: '100%',
    minHeight: '588px',
    backgroundImage: "url('/imagesForBlogPage/Rectangle 6.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    overflow: 'hidden',
    padding: '2rem 1rem',
  };

  const contentStyle = {
    zIndex: 1,
    textAlign: 'center' as const,
    maxWidth: '1200px',
    width: '100%',
  };

  const headingStyle = {
    fontSize: 'clamp(1rem, 5vw, 2.5rem)', // Responsive
    marginBottom: '0.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
  };

  const paragraphStyle = {
    fontSize: 'clamp(0.8rem, 3vw, 1.2rem)', // Responsive
    fontWeight: 400,
  };

  return (
    <header style={bannerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Introducing Modello by Millboard</h1>
        <p style={paragraphStyle}>A Revolution in Composite Decking</p>
      </div>
      {/* <div className="wave"></div> */}
    </header>
  );
};

export default Header;
