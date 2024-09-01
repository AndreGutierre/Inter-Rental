import styled from "styled-components";
import ray from "../../assets/img/ray.png"

const TopBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    max-width: 100%;

    height: 40px;
    background-color: rgba(1, 1, 101, 0.9);
    padding: 0 6em;   
    
    
    h2{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #ffffff;
        font-weight: 500;
    }

    img{
        width: 25px;
        height: 25px;
    }
    
/* Estilos responsivos */
    @media (max-width: 768px) { /* Tablet y dispositivos medianos */
        padding: 0 2em;
        h2 {
            font-size: 12px;
        }
    }

    @media (max-width: 480px) { /* Móviles */
        flex-direction: row; /* Coloca los elementos en una columna */
        padding: 0 1em;
        height: 3em; /* Ajusta la altura para acomodar el contenido */

        h2 {
            margin: 0.5em 0;
            font-size: 12px;
            text-align: center;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }

   `
   
const TopBar = () => {
    return (   
        <TopBarStyled>
            
            <h2> <img src={ray}/> Cotizaciones en 24 horas</h2>
            <h2>+ 56 9 1234 5678</h2>
        </TopBarStyled>     
    )
}

export default TopBar;