import styled from "styled-components"




const StyledTextSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    
    box-sizing: border-box;
    padding: 6em 12em;
    gap: 15em;

    /* Estilos responsivos */
    @media (max-width: 1024px) { /* Tablet */
        padding: 4em 8em;
        gap: 8em;
    }

    @media (max-width: 768px) { /* Móviles grandes */
        flex-direction: column;
        padding: 3em 4em;
        gap: 2em;
        align-items: flex-start;
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        padding: 2em;
        gap: 1em;
        align-items: flex-start;
    }
`
const StyledTitle = styled.div`
    
    color: #010165;
    font-size: 1.1em;
    font-weight: 700;
    
     /* Estilos responsivos */
     @media (max-width: 768px) { /* Móviles grandes */
        font-size: 1em;
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        font-size: 0.9em;
    }

`

const StyledParagraf = styled.div`
    color: #010165;
    font-size: 1em;
    font-weight: 400;
    min-width: 300px;

    /* Estilos responsivos */
    @media (max-width: 768px) { /* Móviles grandes */
        font-size: 0.95em;
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        font-size: 0.9em;
        min-width: 100%; /* Asegura que el párrafo ocupe todo el ancho disponible en pantallas pequeñas */
    }
`


const TextSection = ({ titulo, parrafo }) => {

    return (
        <StyledTextSection>

            <StyledTitle>{titulo}</StyledTitle>
            <StyledParagraf>{parrafo}</StyledParagraf>


        </StyledTextSection>
    )
}

export default TextSection