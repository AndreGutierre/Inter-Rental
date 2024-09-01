import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const ImageContext = createContext();

// Proveedor del contexto
export const ImageProvider = ({ children }) => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        fetch("src/data/db.json")
            .then(response => response.json())
            .then(data => setImage(data));
    }, []);

    const deleteImage = async (imagenID) => {
        try {
            // Hacer una solicitud DELETE al servidor
            await fetch(`src/data/db.json/${imagenID}`, {
                method: 'DELETE'
            });

            // Actualizar el estado local
            const updateImage = image.filter(imagen => imagen.id !== imagenID);
            setImage(updateImage);
        } catch (error) {
            console.error('Error al eliminar la imagen:', error);
        }
    };

    const addImage = async (newImage) => {
        try {
            // Hacer una solicitud POST al servidor para agregar un nuevo imagen
            const response = await fetch('src/data/db.json/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newImage)
            });
    
            if (!response.ok) {
                throw new Error('Error al agregar el imagen');
            }
    
            // Obtener el nuevo imagen agregado desde la respuesta del servidor (si es necesario)
            const imageAdded = await response.json();
    
            // Actualizar el estado local con el nuevo imagen
            setImage(prevImage => [...prevImage, imageAdded]);
    
            // Opcional: realizar alguna acción adicional después de agregar el imagen
            console.log('imagen agregado exitosamente:', imageAdded);
        } catch (error) {
            console.error('Error al agregar el imagen:', error);
        }
    };
    
    const editImage = async (id, datosActualizados) => {
        try {
            const response = await fetch(`/Inter-Rental/src/data/db.json/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosActualizados)
            });
    
            if (!response.ok) {
                throw new Error('Error al editar el imagen');
            }
    
            // Manejar la respuesta del servidor si es necesario
            const imageUpdated = await response.json();
            console.log('Imagen editadoa exitosamente:', imageUpdated);
    
            // Actualizar el estado local con el imagen actualizado
            setImage(prevImage => prevImage.map(imagen => imagen.id === id ? imageUpdated : imagen));
            
        } catch (error) {
            console.error('Error al editar el imagen:', error);
        }
    };
    

    return (
        <ImageContext.Provider value={{ image, setImage, deleteImage, editImage, addImage }}>
            {children}
        </ImageContext.Provider>
    );
};

// Hook personalizado para usar el contexto de imagens
export const useImage = () => useContext(ImageContext);
