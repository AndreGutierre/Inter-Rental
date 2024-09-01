import styled from "styled-components";
import Header from "../../components/Header";
import treasure from "../../assets/img/treasure100.png";

const NotFoundStyled = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
   
    
    h2{
        font-size: 150px;
        color: #010165;
        margin: 0;
        line-height: 0.9em;
    }
    img{
        width: 100px;
        
    }
    p{
        margin: 0;
        font-size: 1.5em;    
        color: #010165;
        line-height: 1.8;
    }

`	

function NotFound() {
    return (
        <>
        <Header/>
        <NotFoundStyled>
        
            <h2>404 </h2>
            <img src={treasure}/>
            <p>No hay nada por acá</p>
            
        </NotFoundStyled>
        </>
    )

}     

export default NotFound;