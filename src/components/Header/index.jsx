
import HeaderLink from "../HeaderLink/index";
import styled from "styled-components";



const HeaderStyled = styled.section`
    
    background-color: rgba(255, 255, 255, 0.9);
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
   
    box-sizing: border-box;
    
    width: 100%;
    padding: 0em 5em;
    position: sticky;
    top: 0;
    z-index: 140;
    border-bottom: 0.1px solid  #0101652f;/* Línea inferior con borde sólido */

    div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }
    h3{
        text-decoration: none;
    color: #010165;
    font-size: 1em;
    font-weight: 650;
    }

     /* Estilos responsivos */
     @media (max-width: 1024px) { /* Tablet */
        padding: 0em 3em;
        
        h3 {
            font-size: 0.9em;
        }

        nav {
            gap: 1.5em;
        }
    }

    @media (max-width: 768px) { /* Móviles grandes */
        padding: 0em 2em;

        nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 1em;
        }

        div {
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5em;
        }

        h3 {
            font-size: 0.85em;
        }
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        padding: 0.5em 1em;
        flex-direction: column;
        align-items: flex-start;

        nav {
            width: 100%;
            gap: 1em;
        }

        div {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }

        h3 {
            display: none;
        }
    }

`

const Header = ({onQuoteClick}) => {
   
    return (
        <HeaderStyled >
            <nav>
                <HeaderLink url="/Inter-Rental/" targetId="home">Home</HeaderLink>
                <HeaderLink url="/Inter-Rental/" targetId="modulos">Módulos</HeaderLink>
                <HeaderLink url="/Inter-Rental/" targetId ="cotizar" onQuoteClick={onQuoteClick}  >Cotiza</HeaderLink>
            </nav>
            <div>
            <h3 type="email">contacto@interental.cl</h3>
            
            
            </div>
        </HeaderStyled>
    );
}

export default Header;