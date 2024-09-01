
import TextFooter from "../../components/Footer/index"
import { Outlet } from "react-router-dom"
import FavoritesProvider from "../../context/Favorites"
import { ImageProvider } from "../../context/ImgContext"
import TopBar from "../../components/TopBar/index";



function BasePage() {
    return (
        <main>
            <TopBar/>
                <ImageProvider>
                    <FavoritesProvider>
                        <Outlet />
                    </FavoritesProvider>
                </ImageProvider>
            <TextFooter direccion = "Primera del Sur 272, Placilla, Valparaíso" telefono ="+56 9 1234 5678" horarioAm={"Lunes a Viernes de 9:00 a 17:00"} historia = "Intermodal, fundada en 1989, es líder en soluciones constructivas modulares en Chile. Se especializa en prefabricación para reducir tiempos y costos de construcción, mejorando la calidad final. Con más de 30 años de experiencia, se destaca por su innovación y compromiso con la sustentabilidad en proyectos residenciales, comerciales e industriales."/>
        </main>
    )
}

export default BasePage