import styled from "styled-components";
import { useImage } from "../../context/ImgContext";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  color: #ffffff;
  padding: 5px 0 0 0;
  
  label {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    padding: 5px 0;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  
  gap: 1em;

`;

const StyledOptionList = styled.select`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  color: #2271D1;
  height: 45px;
  width: 80%;
  font-size: 14px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  color: #2271D1;
  height: 45px;
  width: 20%;
  
  font-size: 14px;
  
  box-sizing: border-box;
`;

const OptionList = ({ name, valor, actualizarValor, cantidad, actualizarCantidad }) => {
  const { image } = useImage();
  const [tiposModulos, setTiposModulos] = useState([]);

  useEffect(() => {
    if (image.length > 0) {
      const titulos = [...new Set(image.map(img => img.titulo))]; // Extraer y desduplicar categorías
      setTiposModulos(titulos);
    }
  }, [image]);

  return (
    <>
      <Container>
        <label>{name}</label>
        <StyledBox>
        <StyledInput 
          value={cantidad} 
          onChange={(e) => actualizarCantidad(e.target.value)} 
          placeholder="Cantidad"
          type="number"
        />
        
        <StyledOptionList value={valor} onChange={(e) => actualizarValor(e.target.value)}>
        <option defaultValue="" disabled hidden>Seleccionar tipo de módulo</option>
          {tiposModulos.map((titulo, index) => (
            <option key={index} value={titulo}>{titulo}</option>
          ))}
        </StyledOptionList>
        </StyledBox>
        
      </Container>
    </>
  );
}

export default OptionList;
