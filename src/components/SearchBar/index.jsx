import { styled } from "styled-components"
import search from "../../../public/icons/search.png"
//import { useContext, useRef } from "react";
//import { GlobalContext } from "../../context/GlobalContext";

const StyledContainer = styled.div`
    display: flex;
    width: 60%;
    color: #010165;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2em;
     
`;


const StyledSearchBar = styled.input`
    display: flex;
    position: relative;
    
    height: 45px;
    padding: 12px 16px;
    
    
    border: 1px solid;
    color: #010165;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    outline: none;
    
`

const SearchIcon = styled.img`
    position: absolute;
    display: flex;
    
    margin-right: 1em;
    width: 25px !important;
    height: 25px;
    color: #010165;
`;

const SearchBar = ({setBusqueda}) => {

    
    /* const cajaConsulta = useRef(null);
    const { dispatch } = useContext(GlobalContext); */

    return (
        <StyledContainer>
            <StyledSearchBar type="text" placeholder="¿Qué estás buscando?" onChange={(e)=>setBusqueda(e.target.value)} />
            
            <SearchIcon src={search} alt="ícono de lupa" />
            {/* <StyledSearchBar ref={cajaConsulta} type="text" placeholder="¿Qué estás buscando?" />
            <SearchIcon src={search} alt="ícono de lupa" onClick={() => {
                dispatch({ type: 'SET_CONSULTA', payload: cajaConsulta.current.value })
            }} /> */}

        </StyledContainer>
    )
}

export default SearchBar;