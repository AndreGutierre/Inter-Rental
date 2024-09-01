import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useShowForm } from "../../context/ShowFormContext";


const StyledLink = styled(Link)`
    text-decoration: none;
    color: #010165;
    font-size: 1.2em;
    font-weight: 400;
   
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    min-width: 100px; /* Asegura un ancho mínimo para evitar desplazamiento */

    &:hover{
        text-decoration: none;
        font-weight: 600;
        transition: all 0.1s ease;
        box-sizing: border-box;
    }

    

`;

const HeaderLink = ({ url, children, targetId, onQuoteClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(url, { replace: true });

    // Usa `requestAnimationFrame` para esperar el renderizado de la navegación
    requestAnimationFrame(() => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }

      // Verifica si `targetId` es 'cotizar' y llama a `onQuoteClick`
      if (targetId === 'cotizar' && onQuoteClick) {
        onQuoteClick();
      }
    });
  };

  return (
    <StyledLink href={url} onClick={handleClick}>
      {children}
    </StyledLink>
  );
};

export default HeaderLink;