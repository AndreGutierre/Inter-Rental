import styled from "styled-components";
import CardGallery from "../CardGallery/index";
import { useImage } from "../../context/ImgContext";
import { v4 as uuid } from "uuid";  

const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    h1{
            font-size: 2.5em;
            font-weight: 800;
            margin: 0;
            z-index: 100;
            line-height: 1em;
            margin-bottom: 1.5em;
            color: #010165;
        }
    /* Estilos responsivos */
    @media (max-width: 768px) { /* Tablet y móviles grandes */
        h1 {
            font-size: 2em;
            margin-bottom: 1em;
        }
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        h1 {
            font-size: 1.5em;
            margin-bottom: 0.75em;
        }
    }    

`
const StyledGallery = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1em;
    padding-bottom: 3em;
    box-sizing: border-box;
    gap: 1.5em;
    background: #fff;
    //box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);

    h2{
      color: #010165;
      font-weight: 200;
      font-size: 24px;
      margin: 2em;
    }

    /* Estilos responsivos */
    @media (max-width: 768px) { /* Tablet y móviles grandes */
        gap: 1em;

        h2 {
            font-size: 20px;
            margin: 1.5em;
        }
    }

    @media (max-width: 480px) { /* Móviles pequeños */
        gap: 0.5em;
        padding: 0.5em;

        h2 {
            font-size: 18px;
            margin: 1em;
        }
    }
`
const Gallery = ({ busqueda, onShowClick }) => {
  const { image } = useImage();

  // Filtrar image según la búsqueda si hay una búsqueda
  const filteredImage = busqueda
    ? image.filter(video => video.titulo.toLowerCase().includes(busqueda.toLowerCase()))
    : image;

  
  return (
    <Container id="modulos" >
      <h1 >Tipologías de módulos</h1>
      <StyledGallery >
        {filteredImage.length === 0 ? (
          <h2>No se encontraron imagenes para la búsqueda `{busqueda}`</h2>
        ) : (
            <CardGallery  key={uuid()} busqueda={busqueda} onShowClick={onShowClick} />
          )
        }
        
      </StyledGallery>
    </Container>
  );
};

export default Gallery;

  
