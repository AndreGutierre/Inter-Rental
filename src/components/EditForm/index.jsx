import styled from "styled-components"
import TextInput from "../TextInput/index"
import OptionList from "../OptionList/index"
import FormButton from "../../components/FormButton/index"
import iconClose from "../../../public/icons/Close.png"
import { useShowForm } from "../../context/EditFormContext";
import { useRef, useState, useEffect } from "react"
import { useImage } from "../../context/ImgContext";


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
    margin: 3% 10%;
    background-color: #2271D1;
    border-radius: 25px;
    height: auto;
    width: 90%;
    max-width: 800px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
    overflow: auto; // Permitir desplazamiento interno
`;

const StyledVideoForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    align-items: center;
    min-height: 700px;

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
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    
`

const EditForm = () => {
    const { showForm, toggleForm, selectedVideoId } = useShowForm();
    const { image, setImage } = useImage();

 const id = (selectedVideoId);
 
  
  
    if (!showForm || !id) return null; // Si showForm es false o no hay id, no renderiza nada.

    const selectedImage = image.find(video => video.id === id);

    const [titulo, setTitulo] = useState(selectedImage?.titulo || "");
    const [categoria, setCategoria] = useState(selectedImage?.categoria || "");
    const [portada, setPortada] = useState(selectedImage?.portada || "");
    const [link, setLink] = useState(selectedImage?.video || "");
    const [descripcion, setDescripcion] = useState(selectedImage?.descripcion || "");

    const formRef = useRef(null);

    useEffect(() => {
        // Actualizar los estados cuando cambie el selectedImage
        setTitulo(selectedImage?.titulo || "");
        setCategoria(selectedImage?.categoria || "");
        setPortada(selectedImage?.portada || "");
        setLink(selectedImage?.link || "");
        setDescripcion(selectedImage?.descripcion || "");
      }, [selectedImage]);


      const SendForm = (e) => {
        e.preventDefault();
        let datosAEnviar = { 
            id: selectedVideoId,
            titulo,
            portada,
            link,
            descripcion,
            categoria
        };
        setImage(selectedVideoId, datosAEnviar);
        toggleForm(); 
    }

    const clearForm = (e) => {
        e.preventDefault();
        setTitulo("");
        setCategoria("");
        setPortada("");
        setLink("");
        setDescripcion("");
    };


    return (
        <Overlay>
            <Container>
                <StyledVideoForm onSubmit={SendForm} ref={formRef}>
                    <img src={iconClose} alt="Icono Cerrar" onClick={toggleForm} />
                    <h1>Editar la tarjeta</h1>
                    <h2>Actualiza el contenido de tu video</h2>
                    <TextInput
                        name="Título"
                        placeholder="¿Cual es el nombre del video?"
                        required
                        valor={titulo}
                        actualizarValor={setTitulo}
                    />
                    <OptionList
                        name="Categoría"
                        valor={categoria}
                        actualizarValor={setCategoria}
                    />

                    <TextInput
                        name="Portada"
                        placeholder="Pega la Url de la imagen de portada"
                        required
                        valor={portada}
                        actualizarValor={setPortada}
                    />
                    <TextInput
                        name="Video"
                        placeholder="Pega la Url del video"
                        required
                        valor={link}
                        actualizarValor={setLink}
                    />
                    <TextInput
                        name="Descripción"
                        placeholder="¿De qué se trata este video?"
                        required
                        valor={descripcion}
                        actualizarValor={setDescripcion}
                    />
                    <ButtonContainer>
                        <FormButton type="submit" onClick={SendForm}>Editar</FormButton>
                        <FormButton type="button" onClick={clearForm}>Limpiar</FormButton>
                    </ButtonContainer>
                </StyledVideoForm>
            </Container>
        </Overlay>
    )
}

export default EditForm