import styled from "styled-components";
import TextInput from "../TextInput/index";
import OptionList from "../OptionList/index";
import FormButton from "../FormButton/index";
import iconClose from "../../../public/icons/Close.png";
import { useShowForm } from "../../context/ShowFormContext";
import { useRef, useState, useEffect } from "react";
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

    @media (max-width: 768px) {
        margin: 5%; /* Aumentar margen en pantallas pequeñas */
        max-width: 90%; /* Reducir el tamaño máximo */
    }

    @media (max-width: 480px) {
        margin: 5%;
        max-width: 95%; /* Aún más reducción en pantallas muy pequeñas */
        padding: 2em;
    }
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
        @media (max-width: 480px) {
            font-size: 1.5em; /* Reducir tamaño en pantallas pequeñas */
        }
    }
    h2 {
        margin: 0;
        font-size: 1em;
        font-weight: 400;
        color: #ffffff;

        @media (max-width: 480px) {
            font-size: 0.9em; /* Ajuste para pantallas pequeñas */
        }
    }
    img {
        align-self: flex-end;
        cursor: pointer;

        @media (max-width: 480px) {
            width: 20px; /* Ajuste de tamaño de imagen para pantallas pequeñas */
            height: 20px;
        }
    }
    @media (max-width: 768px) {
        width: 90%; /* Ajuste del ancho del formulario en pantallas medianas */
        min-height: 600px; /* Reducir altura mínima */
    }

    @media (max-width: 480px) {
        width: 95%; /* Ancho del formulario para pantallas pequeñas */
        min-height: 500px; /* Altura mínima ajustada */
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;

    @media (max-width: 480px) {
        flex-direction: column; /* Cambia la dirección de los botones a columna en pantallas pequeñas */
        align-items: center;
        gap: 1em; /* Añadir espacio entre botones */
    }
`;

const QuoteForm = () => {
    const { showForm, toggleForm } = useShowForm();
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        modulo1: { tipo: '', cantidad: '' },
        modulo2: { tipo: '', cantidad: '' },
        modulo3: { tipo: '', cantidad: '' }
    });

    const formRef = useRef(null);
    if (!showForm) return null; // Si showForm es false o no hay id, no renderiza nada.

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleModuleChange = (index, field, value) => {
        const moduleKey = `modulo${index}`;
        setFormData({
            ...formData,
            [moduleKey]: {
                ...formData[moduleKey],
                [field]: value
            }
        });
    };
    const sendForm = async (e) => {
        e.preventDefault();
    
        const emailContent = `
            Nombre: ${formData.nombre}\n
            Correo Electrónico: ${formData.email}\n
            Módulo 1: ${formData.modulo1.tipo}, Cantidad: ${formData.modulo1.cantidad}\n
            Módulo 2: ${formData.modulo2.tipo}, Cantidad: ${formData.modulo2.cantidad}\n
            Módulo 3: ${formData.modulo3.tipo}, Cantidad: ${formData.modulo3.cantidad}
        `;
    
        const response = await fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: emailContent })
        });
    
        if (response.ok) {
            // Manejar éxito
            alert('Correo enviado con éxito');
        } else {
            // Manejar error
            alert('Hubo un error al enviar el correo');
        }
    
        toggleForm();
    };
    

    return (
        <Overlay>
            <Container>
                <StyledVideoForm onSubmit={sendForm} ref={formRef}>
                    <img src={iconClose} alt="Icono Cerrar" onClick={toggleForm} />
                    <h1>Cotiza en 24 horas</h1>
                    <h2>o si prefieres llama al + 56 9 1234 5678</h2>
                    <TextInput
                        name="nombre"
                        placeholder="Escribe tu nombre"
                        required
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <TextInput
                        name="email"
                        placeholder="Escribe tu correo"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <OptionList
                        name="Tipo Módulo 1"
                        valor={formData.modulo1.tipo}
                        actualizarValor={(valor) => handleModuleChange(1, 'tipo', valor)}
                        cantidad={formData.modulo1.cantidad}
                        actualizarCantidad={(cantidad) => handleModuleChange(1, 'cantidad', cantidad)}
                    />
                    <OptionList
                        name="Tipo Módulo 2"
                        valor={formData.modulo2.tipo}
                        actualizarValor={(valor) => handleModuleChange(2, 'tipo', valor)}
                        cantidad={formData.modulo2.cantidad}
                        actualizarCantidad={(cantidad) => handleModuleChange(2, 'cantidad', cantidad)}
                    />
                    <OptionList
                        name="Tipo Módulo 3"
                        valor={formData.modulo3.tipo}
                        actualizarValor={(valor) => handleModuleChange(3, 'tipo', valor)}
                        cantidad={formData.modulo3.cantidad}
                        actualizarCantidad={(cantidad) => handleModuleChange(3, 'cantidad', cantidad)}
                    />
                    <ButtonContainer>
                        <FormButton type="submit">Cotizar</FormButton>
                    </ButtonContainer>
                </StyledVideoForm>
            </Container>
        </Overlay>
    );
};

export default QuoteForm;
