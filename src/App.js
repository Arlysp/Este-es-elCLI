import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
// import ItemCount from './components/ItemCount';
// import ItemDetailCointainer from './components/ItemDetailCointainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemDetailContainer';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <NavBar />
  
          <ItemListContainer/>
          <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />}></Route>
                <Route path='/category/:id' element={<ItemListContainer />}></Route>
                <Route path='/item/:id' element={<ItemDetailContainer />}></Route>       
          {/* <ItemListContainer/> */}
          {/* <ItemDetailCointainer/> */}
  
          </Routes>
          {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
  
          </BrowserRouter>
        </header>
      </div>
  );
} 
export default App;