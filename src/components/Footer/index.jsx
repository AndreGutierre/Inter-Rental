import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";


const StyledFooter = styled.section`
   
  
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    padding: 4em 6em;
   

    img{
        width: 60px;

    }

    h1{
        font-size: 1em;
        font-weight: 450;
        color: #010165;
        line-height: 0;
    }

    /* Estilos responsivos */
    @media (max-width: 768px) { /* Tablet y móviles grandes */
        flex-direction: column;
        padding: 2em 2em;
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        padding: 5em 2em;
    }
`


const StyledFindUs = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 37%;
    height: 100%;   

    /* Estilos responsivos */
    @media (max-width: 768px) { /* Tablet y móviles grandes */
        width: 100%;
        margin-bottom: 2em;
    }
`

const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;   

    /* Estilos responsivos */
    @media (max-width: 768px) { /* Tablet y móviles grandes */
        display: none;
    }
`
const StyledTitle = styled.div`
    
    color: #010165;
    font-size: 0.9em;
    font-weight: 650;
    margin-top: 1.2em;
    margin-bottom: 1em;
    
`

const StyledParagraf = styled.div`
    color: #010165;
    font-size: 0.8em;
    font-weight: 400;
    min-width: 300px;
   
    line-height: 1.2em;
    width: 60%;

     /* Estilos responsivos */
     @media (max-width: 768px) { /* Tablet y móviles grandes */
        width: 100%;
    }
`


const TextFooter = ({ direccion, telefono, horarioAm, horarioPm, historia }) => {
   

    return (
        <>
            <StyledFooter>
                <StyledFindUs>
                    <Link to="/">
                        <img src={logo} alt="Logo Intermodal" />
                    </Link>
                    <h1>Una empresa Intermodal</h1>
                    <StyledTitle>ENCUENTRANOS</StyledTitle>
                    <StyledParagraf>{direccion}</StyledParagraf>
                    <StyledParagraf>{telefono}</StyledParagraf>

                    <StyledTitle>HORARIOS</StyledTitle>
                    <StyledParagraf>{horarioAm}</StyledParagraf>
                    <StyledParagraf>{horarioPm}</StyledParagraf>
                </StyledFindUs>
                
           

                <StyledHistory>
                    <StyledTitle>ACERCA DE NOSOTROS</StyledTitle>
                    <StyledParagraf>{historia}</StyledParagraf>
                    
                </StyledHistory>

            </StyledFooter>
            <section>


            </section>
        </>
    )
}

export default TextFooter