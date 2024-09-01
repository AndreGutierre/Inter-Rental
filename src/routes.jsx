import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/index';
import Favorites from '../src/pages/Favorites/index';
import Player from '../src/pages/Player/index';
import NotFound from '../src/pages/NotFound/index';
import BasePage from '../src/pages/BasePage/index';
import NewVideo from '../src/pages/NewVideo/index';



function AppRoutes() {
  return ( 
    <BrowserRouter>
        <Routes>
          <Route path='/Inter-Rental/' element={<BasePage />}> 
          <Route index element={<Inicio />} />
          <Route path="/Inter-Rental/favoritos" element={<Favorites />} />
          <Route path="/Inter-Rental/:id" element={<Player />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/Inter-Rental/agregarvideo' element={<NewVideo />} />
          </Route> 
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;



