import React from 'react';

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p style={styles.text}>&copy; {currentYear} EventsHub &#8482;</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
 
    padding: '10px 0',
    marginTop: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#888',
    fontSize: '14px',
  },
};

export default MainFooter;
