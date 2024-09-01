

import Gallery from "../../components/Gallery/index";
import ImageModal from "../../components/ImageModal/index";
import { useShowForm } from "../../context/ShowFormContext";
import ScrollBackground from "../../components/ScrollBackground/index";
import backGround_1 from "../../assets/img/image11.jpg";
import backGround_2 from "../../assets/img/image7.jpg";
import backGround_3 from "../../assets/img/image5.jpg";
import Header from "../../components/Header"
import TextSection from "../../components/TextSection/index";
import QuoteForm from "../../components/QuoteForm/index";


//import GlobalContextProvider from "../../context/GlobalContext";



function Inicio() {
    const { showForm, toggleForm } = useShowForm();

   
    const handleShowClick = (id) => {
        toggleForm('carrusel', id);
    };

    const handleQuoteClick = () => {
        toggleForm('cotizar');
    };

    return (
        <>
            <ScrollBackground id="home" backgroundImage={backGround_1} titulo="INTER·RENTAL" texto="Arriendo de instalaciones de faena para tu obra" />
            <Header onQuoteClick={handleQuoteClick} />
            <TextSection
                titulo="SOLUCIONES MODULARES"
                parrafo="Descubre nuestras versátiles instalaciones de faena modulares. Ofrecemos una amplia gama de módulos adaptables a tus necesidades: oficinas modulares, dormitorios, comedores, baños y más. Cada módulo está diseñado con materiales de alta calidad y configuraciones personalizadas para garantizar confort y funcionalidad en cualquier entorno laboral. ¡Conoce más sobre nuestras opciones de arriendo de módulos modulares hoy mismo!"
            />
            <ScrollBackground backgroundImage={backGround_2} titulo="CALIDAD" />
            <TextSection
                titulo="CONDICIONES DE ARRIENDO FLEXIBLES"
                parrafo="Ofrecemos contratos flexibles con duraciones ajustables, tarifas competitivas y políticas claras de mantenimiento y devolución. Nuestra transparencia en costos y condiciones asegura que encuentres la solución perfecta para tu proyecto sin sorpresas. Explora nuestros planes de arriendo y descubre cómo podemos ayudarte a optimizar tu espacio de trabajo modular."
            />
            <ScrollBackground backgroundImage={backGround_3} titulo="SEGURIDAD" />
            <TextSection
                titulo="SIMPLIFICAMOS EL PROCESO DE ARRIENDO"
                parrafo="Simplificamos el proceso de instalación, mantenimiento y retiro de nuestras instalaciones de faena modulares. Desde la solicitud hasta la puesta en marcha, nuestro equipo se encarga de todo. Garantizamos tiempos rápidos de entrega, soporte técnico continuo y un proceso de retiro eficiente. Asegura la operatividad de tu proyecto con nuestras soluciones modulares integrales."
            />
            <Gallery onShowClick={handleShowClick} />
            
            {showForm.isVisible && showForm.formId === 'carrusel' && (
                <ImageModal selectedImageId={showForm.selectedImageId} />
            )}

            {showForm.isVisible && showForm.formId === 'cotizar' && (
                <QuoteForm />
            )}
        </>
    );
}

export default Inicio;
