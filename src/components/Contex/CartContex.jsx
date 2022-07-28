// 1. creamos nuestro contexto
import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();
//console.log(CartContext);
//2. creamos nuestro componente como capa de abstracción y llamamos a los children para poder visualizar en pantalla nuevamente los componentes
const Provider = (props) => {
    //console.log(props.children);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya está en el carrito');
            //sumo la cantidad
        } else {
            setCart([...cart, { ...item, cantidad }]);
            //lo agrego al carrito
        }
        //console.log({ ...item, cantidad });
        // ... spread
        //console.log('agregando al carrito');
    };
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    //función para ir sumando la cantidad de un mismo producto

    //función para calcular el total de unidades

    //función para calcular el total de precio (unidades * precio)

    //funcion que elimine a un producto en particular
    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
        //setCart(cart.filter((prod) => prod.id !== id));
    };

    //funcion que borre todos los productos del carrito
    const deleteAll = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne }}>
                {props.children}
            </CartContext.Provider>
            );
};

export default Provider;