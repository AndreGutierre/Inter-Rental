import styled from "styled-components";
import iconExpand from "../../../src/assets/img/expandir50B.png"
import { Link } from "react-router-dom";


const ContainerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  
  width: 280px;
  height: 580px;
  border-radius: 32px;
  background-color: #f6f6f6;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.25);
  z-index: 50;

`;
const StyledTitle = styled.div`
   display: flex;
   
   font-size: 1.2em;
   font-weight: 700;
   color: #010165;
   justify-content: center;
  margin-bottom: 90px;
   
   
`
const StyledImage = styled.img`

display: flex;
position: absolute;
justify-content: center;
align-items: center;
width: 220px;
left: 10px;
top: 20px;

object-fit: contain; /* Mantiene la proporción de la imagen */
  
  //background-size: cover;
  //background-position: center;
//background-image: url(${props => props.$backgroundImage});

`
const StyledLogo = styled.img`
  position: absolute;

  height: 3em; 
  object-fit: contain;
  bottom: 2em
  
`;

const Card = ({ id, titulo, portada, onShowClick }) => {
  //const [nombreVariable,funcionActualiza] = useState(valorInicial)


  const handleIconClick = (event) => {
    event.preventDefault();
  };

  const handleShowClick = () => {

    onShowClick(id);

  };



  return (
    <>

      <ContainerCard onClick={handleIconClick}>
        <Link to={`/Inter-Rental/${id}`}>
          <StyledImage src={portada}></StyledImage>
        </Link>
        <StyledTitle>{titulo}</StyledTitle>


        <StyledLogo src={iconExpand} alt="Icono Mas" onClick={handleShowClick} />



      </ContainerCard>


    </>
  )
}

export default Card