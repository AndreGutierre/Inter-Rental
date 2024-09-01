import styled from 'styled-components';

const Section = styled.section`
    background-size: cover;
    background-attachment: scroll;
    background-position: center;
    height: 600px;
    width: 100%; /* Mantener el ancho al 100% del contenedor */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #010165;
    padding: 2em;
    box-sizing: border-box;
    position: relative;
    overflow: hidden; /* Prevenir desbordamiento visible */

    h1, h2, h3 {
        margin: 0;
        z-index: 50;
        line-height: 1em;
        box-sizing: border-box;
        max-width: 100%;
    }

    h1 {
        font-size: 3.5em;
        font-weight: 850;
    }

    h2 {
        font-size: 1.5em;
        font-weight: 500;
    }

    h3 {
        font-size: 3.5em;
        font-weight: 850;
        color: #fff;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(243, 238, 238, 0.2);
        z-index: 10;
    }

    /* Estilos responsivos */
    @media (max-width: 1024px) {
        padding: 3em 2em;
        height: 500px;

        h1 {
            font-size: 3em;
        }

        h2 {
            font-size: 1.2em;
        }

        h3 {
            font-size: 3em;
        }
    }

    @media (max-width: 768px) {
        padding: 2em 1.5em;
        height: 400px;

        h1 {
            font-size: 2.5em;
        }

        h2 {
            font-size: 1em;
        }

        h3 {
            font-size: 2.5em;
        }
    }

    @media (max-width: 480px) {
        padding: 1em;
        height: 400px;

        h1 {
            font-size: 2em;
        }

        h2 {
            font-size: 1em;
        }

        h3 {
            font-size: 1.5em;
        }
    }
`;



const ScrollBackground = ({ backgroundImage, titulo, texto, mensaje, id }) => {
    return (
        <Section id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>{titulo}</h1>
            <h2>{texto}</h2>
            <h3>{mensaje}</h3>
        </Section>
    );
};

export default ScrollBackground;