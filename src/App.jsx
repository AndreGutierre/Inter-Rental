
import AppRoutes from "./routes";
import GlobalStyles from './components/GlobalStyles'
import { EditFormProvider } from "../src/context/EditFormContext";


function App() {
  
  return (
  
    <>
      <div>
     
        <GlobalStyles/>
        <AppRoutes />
      
      </div>
    </>
   
  )
}

export default App
