import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    
    label{
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        padding : 5px 0;

        @media (max-width: 480px) {
            font-size: 14px; /* Reduce el tamaño del texto en pantallas pequeñas */
        }
    }
   

   
`
const StyledTextInput = styled.input`
    background-color: #ffffff;
    border-radius: 5px;
    border: none;
    color: #2271D1;
    height: 45px;
    padding: 10px;
    font-size: 14px;
  
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 8px; /* Reduce el padding en pantallas pequeñas */
        font-size: 12px; /* Ajusta el tamaño de la fuente en pantallas pequeñas */
        height: 40px; /* Ajusta la altura del input en pantallas pequeñas */
    }
`
const TextInput = ({ name, placeholder, required, valor, actualizarValor }) => {

    return (
        <Container>
            <label>{name}</label>
            <StyledTextInput
                type="text"
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={(e) => actualizarValor(e.target.value)} />
        </Container>
    );
};

export default TextInput