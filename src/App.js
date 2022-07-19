import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Itemcount/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const onAdd = () => {}
    return (
    <BrowserRouter>
          <Navbar/>
      <Routes>
          <Route path='/'element={<ItemListContainer Saludo="Bienvenido a nuetra Tienda"/>}/>
        <Route path='/categorias/:categoria'element={<ItemListContainer Saludo="Bienvenido a nuetra Tienda"/>}/>
        <Route path='/item/:id'element={<ItemCount stock={5} initial={1} onAdd={onAdd}/>}/>
      </Routes> 
    </BrowserRouter>
  );
};
export default App