import React from 'react';

const Imagenes = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Imágenes Profesionales de IA</h2>
      <div style={styles.imageGrid}>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg 1x, https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
          alt="Inteligencia Artificial"
          style={styles.image}
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg 1x, https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
          alt="Machine Learning"
          style={styles.image}
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg 1x, https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
          alt="Futuro Tecnológico"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(90deg, #1d2671, #c33764)',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.5)',
    margin: '20px',
  },
  title: {
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginBottom: '10px',
  },
  imageGrid: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  image: {
    width: '300px',
    height: '200px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
  },
};

export default Imagenes;
