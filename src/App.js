import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Provider from './context/cartContext';

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer saludo="Bienvenidos a mi tienda" />
                        }
                    />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                {/* <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} /> */}
            </BrowserRouter>
            {/*             <p>Hijo parrafo</p>
            <h2>Un h2</h2> */}
        </Provider>
    );
}

export default App;