import { useParams } from "react-router-dom";
import { useImage } from "../../context/ImgContext";
import styled from "styled-components";
import NotFound from "../NotFound/index";
import Header from "../../components/Header/index";
import iconExpand from "../../../src/assets/img/expandir50B.png";
import { useShowForm } from "../../context/ShowFormContext";
import ImageModal from "../../components/ImageModal";

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em;

    box-sizing: border-box;
    max-width: 100%;

    @media (max-width: 768px) {
        padding: 1.5em; /* Ajustar padding para pantallas medianas */
    }

    @media (max-width: 480px) {
        padding: 1.5em; /* Reducir padding en pantallas pequeñas */
    }
`;

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin-top: 3em;
    gap: 3em;
    box-sizing: border-box;
    border-radius: 32px;
    background-color: #f6f6f6;
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.25);
    z-index: 50;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        margin-top: 2em;
        gap: 2em;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin-top: 1em;
        gap: 1.5em;
    }
`;

const StyledImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    padding-top: 2em;

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (max-width: 480px) {
        width: 70%;
        height: auto;
    }
`;

const StyledText = styled.div`
    color: #010165;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 80%;
    height: 100%;
    text-align: left;
    line-height: 1.1em;
    font-size: 1.1em;
    font-weight: 350;

    h1 {
        margin: 0;
        font-size: 1.5em;
        line-height: 1.4em;

        @media (max-width: 480px) {
            font-size: 1.3em;
        }
    }

    h2 {
        margin: 0;
        font-size: 1em;
        font-weight: 450;

        @media (max-width: 480px) {
            font-size: 0.9em;
        }
    }

    p {
        margin-top: 1em;

        @media (max-width: 480px) {
            font-size: 0.9em;
        }
    }
`;

const StyledLogo = styled.img`
    padding: 1.5em 0em 3em 0em;
    height: 3em;
    object-fit: contain;
    z-index: 100;

    @media (max-width: 480px) {
        height: 2.5em;
    }
`;

function Player({ id }) {
    const { image } = useImage();
    const parameters = useParams();
    const imagen = image.find(imagen => imagen.id === Number(parameters.id));
    const { showForm, toggleForm } = useShowForm();  // Asegúrate de que estás usando useShowForm

    if (!imagen) return <NotFound />;

    const handleShowClick = (id) => {
        toggleForm('carrusel', id);  // Usa toggleForm para abrir el carrusel con el ID de la imagen
    };

    return (
        <>
            <Header />
            <Section>
                <Container >
                    <StyledImage src={imagen.portada} />
                    <StyledText>
                        <h1>{imagen.titulo}</h1>
                        <h2>{imagen.categoria} / {imagen.superficie}</h2>
                        <p>{imagen.descripcion}</p>
                        <StyledLogo src={iconExpand} alt="Icono Mas" onClick={() => handleShowClick(imagen.id)} />  {/* Asegúrate de que el click pasa el ID correcto */}
                    </StyledText>
                </Container>
            </Section>
            
            {showForm.isVisible && showForm.formId === 'carrusel' && (
                <ImageModal selectedImageId={showForm.selectedImageId} />
            )}
        </>
    );
}

export default Player;
