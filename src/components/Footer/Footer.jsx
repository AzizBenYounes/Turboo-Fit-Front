import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Turbo-Fit Sports Store. All rights reserved.</p>
      <p>
        Conatct us on{' '}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>,{' '}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>,{' '}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>,{' '}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>,{' '}   
        <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank" rel="noopener noreferrer" style={linkStyle}>Gmail</a>{' '}
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  marginTop: 'auto',
};

const linkStyle = {
  color: '#f0c14b',
  textDecoration: 'none',
};

export default Footer;
