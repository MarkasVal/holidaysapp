import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import Book from './Pages/book';
import Holidays from './Pages/holidays';
import ErrorPage from './Pages/errorpage';
import AboutUs from './Pages/aboutus';
import Privacypolicypage from './Components/privacypolicypage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path = "/home" element={<Home/>}/>
          <Route path = "/holidays" element ={<Holidays/>}/>
          <Route path = "/book" element ={<Book/>}/>
          <Route path = "/aboutus" element ={<AboutUs/>}/>
          <Route path ="/privacypolicypage" element={<Privacypolicypage/>}/>
          <Route path ="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
