import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start" style={{position: "fixed", bottom: "0", width: "100%"}}>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/"> Abdullh Ashraf</a>
      </div>
    </footer>
  );
}

export default Footer;
