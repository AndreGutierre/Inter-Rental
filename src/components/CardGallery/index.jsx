import styled from "styled-components";
import Card from "../Card/index";
import { useImage } from "../../context/ImgContext";
import { v4 as uuid } from "uuid";



const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    h1{
      color: #fff;
        font-size: 1.5;
        font-weight: 600;
        margin : 1em;
        min-width: 200px;
  
    }
   

`
const StyledCardGallery = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 80%;
    box-sizing: border-box;
    gap: 3em;
    
   
`
const CardGallery = ({ categoria, onShowClick}) => {
    const { image } = useImage();
  
    // Filtrar los videos por categoría
    //const filteredImages = image.filter(video => video.categoria === categoria);
  
    return ( 
      <Container>
        {/* <h1>{categoria}</h1> */}
        <StyledCardGallery>
        {image.map(imagen => (
            <Card {...imagen} key={imagen.id} id={imagen.id} onShowClick={onShowClick}/>
           
          ))}
        
        </StyledCardGallery>
      </Container>
    );
  };

export default CardGallery