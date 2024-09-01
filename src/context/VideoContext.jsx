import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const VideosContext = createContext();

// Proveedor del contexto
export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/AndreGutierre/aluraflix-api/videos")
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    const eliminarVideo = async (videoID) => {
        try {
            // Hacer una solicitud DELETE al servidor
            await fetch(`https://my-json-server.typicode.com/AndreGutierre/aluraflix-api/videos/${videoID}`, {
                method: 'DELETE'
            });

            // Actualizar el estado local
            const actualizarVideos = videos.filter(video => video.id !== videoID);
            setVideos(actualizarVideos);
        } catch (error) {
            console.error('Error al eliminar el video:', error);
        }
    };

    const agregarVideo = async (nuevoVideo) => {
        try {
            // Hacer una solicitud POST al servidor para agregar un nuevo video
            const response = await fetch('https://my-json-server.typicode.com/AndreGutierre/aluraflix-api/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoVideo)
            });
    
            if (!response.ok) {
                throw new Error('Error al agregar el video');
            }
    
            // Obtener el nuevo video agregado desde la respuesta del servidor (si es necesario)
            const videoAgregado = await response.json();
    
            // Actualizar el estado local con el nuevo video
            setVideos(prevVideos => [...prevVideos, videoAgregado]);
    
            // Opcional: realizar alguna acción adicional después de agregar el video
            console.log('Video agregado exitosamente:', videoAgregado);
        } catch (error) {
            console.error('Error al agregar el video:', error);
        }
    };
    
    const editarVideo = async (id, datosActualizados) => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/AndreGutierre/aluraflix-api/videos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosActualizados)
            });
    
            if (!response.ok) {
                throw new Error('Error al editar el video');
            }
    
            // Manejar la respuesta del servidor si es necesario
            const videoActualizado = await response.json();
            console.log('Video editado exitosamente:', videoActualizado);
    
            // Actualizar el estado local con el video actualizado
            setVideos(prevVideos => prevVideos.map(video => video.id === id ? videoActualizado : video));
            
        } catch (error) {
            console.error('Error al editar el video:', error);
        }
    };
    

    return (
        <VideosContext.Provider value={{ videos, setVideos, eliminarVideo, editarVideo, agregarVideo }}>
            {children}
        </VideosContext.Provider>
    );
};

// Hook personalizado para usar el contexto de videos
export const useVideos = () => useContext(VideosContext);
