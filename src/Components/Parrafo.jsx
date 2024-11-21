import React from 'react';

const Parrafo = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Bienvenido al futuro de la inteligencia artificial. Este es un ejemplo de cómo los sistemas de IA están transformando nuestras vidas, desde el aprendizaje automático hasta la visión por computadora.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.5)',
    margin: '20px',
  },
  text: {
    color: '#ffffff',
    fontSize: '18px',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
};

export default Parrafo;
