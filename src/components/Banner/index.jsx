import styled from "styled-components";
import imgUrl from "../Banner/ImgBanner.png";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
`;

const Container = styled.div`
  position: relative;
  margin-top: 1.5em;
  width: 90vw;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
  border-radius: 50px 50px 0 0 ;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Ajustar la opacidad según sea necesario */
    z-index: 1;
    border-radius: 50px 50px 0 0 ;
  }

   /* Estilos responsivos */
   @media (max-width: 768px) { /* Tablet */
    height: 300px;
    border-radius: 30px 30px 0 0;
  }

  @media (max-width: 480px) { /* Móviles */
    height: 250px;
    border-radius: 20px 20px 0 0;
  }
`;

const Button = styled.button`
  position: absolute;
  left: 50px;
  top: 50px;
  width: 100px;
  height:100px;
  z-index: 2; /* Asegura que el botón esté sobre el overlay */
  padding: 10px 20px;
  background-color: transparent;
  color: #000000;
  border: 1px #ffffff solid;
  
  color: #ffffff;
  font-size: 20px;
  font-weight: lighter;
  cursor: pointer;

  /* Estilos responsivos */
  @media (max-width: 768px) { /* Tablet */
    left: 30px;
    top: 30px;
    width: 80px;
    height: 80px;
    font-size: 18px;
  }

  @media (max-width: 480px) { /* Móviles */
    left: 20px;
    top: 20px;
    width: 60px;
    height: 60px;
    font-size: 16px;
  }
`;

const Text = styled.h1`
    position: absolute;
    left: 50px;
    top: 150px;
    width: 40%;
    color: #ffffff;
    z-index: 2; 
    font-size: 26px;
    font-weight: 600;

    /* Estilos responsivos */
  @media (max-width: 768px) { /* Tablet */
    left: 30px;
    top: 120px;
    font-size: 22px;
    width: 50%;
  }

  @media (max-width: 480px) { /* Móviles */
    left: 20px;
    top: 100px;
    font-size: 18px;
    width: 70%;
  }

`

const Paragraph = styled.h3`
    position: absolute;
    left: 50px;
    top: 230px;
    width: 60%;
    color: #ffffff;
    z-index: 2; 
    font-size: 14px;
    font-weight: 300;

    /* Estilos responsivos */
  @media (max-width: 768px) { /* Tablet */
    left: 30px;
    top: 180px;
    font-size: 12px;
    width: 70%;
  }

  @media (max-width: 480px) { /* Móviles */
    left: 20px;
    top: 160px;
    font-size: 10px;
    width: 80%;
  }

`

const Banner = ({ boton, titulo, descripcion }) => {
    return (
        <PageWrapper>
            <Container $backgroundImage={imgUrl}>
                <Button>{boton}</Button>
                <Text>{titulo}</Text>
                <Paragraph>{descripcion}</Paragraph>
            </Container>
        </PageWrapper>
    );
};

export default Banner;
