import styled from "styled-components"
import TextInput from "../TextInput/index"
import OptionList from "../OptionList/index"
import FormButton from "../../components/FormButton/index"
import { useState, useRef } from "react"
import { useImage } from  "../../context/ImgContext"


const Page = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 2em;
    background-color: #2271D1;
    border-radius: 25px;
    height: auto;
    
    max-width: 800px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
    overflow: auto; // Permitir desplazamiento interno
    
`
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
    
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1em;
`
const AddVideoForm = () => {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [portada, setPortada] = useState("")
    const [link, setLink] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const formRef = useRef(null);
    const { addImage } = useImage();

    const SendForm = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            titulo,
            portada,
            link,
            descripcion,
            categoria
        };
        addImage(datosAEnviar); 
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
        <Page>
            <Container>
                <StyledVideoForm onSubmit={SendForm} ref={formRef}>
                    <h1>Nuevo Video</h1>
                    <h2>Complete el formulario para crear una nueva tarjeta de video</h2>
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
                        <FormButton type="submit" onClick={SendForm}>Crear</FormButton>
                        <FormButton type="button" onClick={clearForm}>Limpiar</FormButton>
                    </ButtonContainer>
                </StyledVideoForm>
            </Container>
        </Page>
    )
}

export default AddVideoForm