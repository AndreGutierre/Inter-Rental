import styled from "styled-components";
import Card from "../Card/index";
import { useFavoritesContext } from "../../context/Favorites";

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 10%;
    

`
const StyledCardGallery = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    align-items: center;

    padding: 2em; 
    gap: 1.5em;

`

const CardGalleryFav = ( ) => {
    const { favorite } = useFavoritesContext();

    //console.log("Favorite items:", favorite);
    return (
        <Container>
            <StyledCardGallery>
                
                {favorite.map(fav => {

                    return <Card {...fav} key={fav.id} />

                })}

            </StyledCardGallery>
        </Container>
    )
}


export default CardGalleryFav