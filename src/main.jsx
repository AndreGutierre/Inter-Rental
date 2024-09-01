import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShowFormProvider } from "../src/context/ShowFormContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ShowFormProvider>
    <App />,
    </ShowFormProvider>
)
