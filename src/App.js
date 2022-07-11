import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  const onAdd = () => (console.log('click'));
  
  return (
    <div className="App"> 
      <Navbar/>
      <ItemListContainer Saludo="Bienvenido a nuetra Tienda"/>
      <ItemCount stock={5} initial={0} onAdd={onAdd}/>
    </div>
  );
}

export default App;