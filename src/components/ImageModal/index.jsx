import styled from "styled-components";
import iconClose from "../../../public/icons/Close.png";
import { useShowForm } from "../../context/ShowFormContext";
import { useRef } from "react";
import { useImage } from "../../context/ImgContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(39, 39, 59, 0.7);
    z-index: 200;
    overflow-y: auto; // Permitir desplazamiento vertical

    
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    background-color: #2271D1;
    border-radius: 25px;
    height: auto;
    width: 100%;
    
    max-width: 800px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
    overflow: hidden; // Permitir desplazamiento interno

     /* Estilos responsivos */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2em;
  }

  @media (max-width: 480px) {
    max-width: 80%;
    padding: 1em;
    border-radius: 15px;
  }
`;

const StyledVideoForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    padding: 3em;
    box-sizing: border-box;
    max-width: 600px;
    min-height: 600px;

    h1 {
        margin: 0;
        font-size: 2em;
        color: #ffffff;
    }
    h2 {
        margin: 0;
        font-size: 1em;
        font-weight: 400;
        color: #ffffff;
    }
    img {
        align-self: flex-end;
        cursor: pointer;
    }

    /* Estilos responsivos */
  @media (max-width: 768px) {
    padding: 2em;
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 0.9em;
    }
  }

  @media (max-width: 480px) {
    padding: 1em;
    min-height: 500px;
    h1 {
      font-size: 1.2em;
    }
    h2 {
      font-size: 0.8em;
    }
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;

  .slick-list {
    padding: 3em;
    border-radius: 15px;
    
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .slick-slide img {
    width: 82%;
    height: auto;
    border-radius: 15px;
  }

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: white;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    .slick-list {
      padding: 1em;
    }
    .slick-slide img {
      width: 90%;
    }}
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;


const ImageModal = ({ selectedImageId }) => {
    const { toggleForm } = useShowForm();
    const { image } = useImage();
    const formRef = useRef(null);
  
    console.log("image from context:", image);
    console.log("Selected Image ID:", selectedImageId);
  
    const selectedImage = image.find(img => img.id === selectedImageId);
    const imageList = selectedImage ? selectedImage.imagenes : [];
  
    console.log("Selected Image:", selectedImage);
    console.log("Image List for Slider:", imageList);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      swipe: true,
    };
  
    return (
      <Overlay>
        <Container>
          <StyledVideoForm ref={formRef}>
            <img
              src={iconClose}
              alt="Icono Cerrar"
              onClick={() => toggleForm(null)}
            />
            <h1>{selectedImage?.titulo}</h1>
            <h2>Galería de imágenes de módulo en arriendo</h2>
            <StyledSlider {...settings}>
              {imageList.slice(0, 5).map((img, index) => (
                <ImageWrapper key={index}>
                  <img src={img.url} alt={`Imagen ${index + 1}`} />
                </ImageWrapper>
              ))}
            </StyledSlider>
          </StyledVideoForm>
        </Container>
      </Overlay>
    );
  };
  
  export default ImageModal;