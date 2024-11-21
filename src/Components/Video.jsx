import React from 'react';

const Videos = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Videos de IA</h2>
            <div style={styles.videoGrid}>
                <iframe width="400" height="480" src="https://www.youtube.com/embed/_tA5cinv0U8" 
                title="¿Qué es y cómo funciona la INTELIGENCIA ARTIFICIAL?" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="400" height="480" src="https://www.youtube.com/embed/eoktt48A2-8" 
                title="Las 3 mejores herramientas para crear videos con AI" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        background: 'linear-gradient(90deg, #141e30, #243b55)',
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
    videoGrid: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    },
    video: {
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
    },
};

export default Videos;
