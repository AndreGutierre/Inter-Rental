
import { createContext, useContext, useState } from "react";

const ShowFormContext = createContext();
export const ShowFormProvider = ({ children }) => {
    const [showForm, setShowForm] = useState({ isVisible: false, formId: null, selectedImageId: null });

    const toggleForm = (formId = null, selectedImageId = null) => {
      setShowForm(prevShowForm => ({
        isVisible: !prevShowForm.isVisible,
        formId: formId ? formId : prevShowForm.formId,
        selectedImageId: selectedImageId ? selectedImageId : prevShowForm.selectedImageId
      }));
    };

    return (
        <ShowFormContext.Provider value={{ showForm, toggleForm }}>
            {children}
        </ShowFormContext.Provider>
    );
};

export const useShowForm = () => {
    const context = useContext(ShowFormContext);
    if (!context) {
        throw new Error("useShowForm debe ser usado dentro de un ShowFormProvider");
    }
    return context;
};

