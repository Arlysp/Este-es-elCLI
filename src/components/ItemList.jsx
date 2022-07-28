import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemList from './ItemList';


const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    useEffect(() => {
        setLoading(true);
        const traerProductos = new Promise((res, rej) => {
            const prodFiltrados = products.filter(
                (prod) => prod.category === categoryId
            );
            setTimeout(() => {
                categoryId ? res(prodFiltrados) : res(products);
            }, 3000);
        });
        traerProductos
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <h2
            {/* <h2
                className={loading ? 'grande' : 'chico'}
                style={{ color: loading ? 'red' : 'blue' }}
            >
                {saludo}
            </h2>
            </h2> */}
            {loading ? (
                <h1>Cargando productos...</h1>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};
export default ItemListContainer;
















































/*import React from 'react'
import Item from './Item'
const ItemList = ({items}) => {
  return (
    <div>
    {items.map (item => <Item key={item.id} product={item.tipo} talles={item.talles} image={item.image} precio={item.precio} />)}
    {items.map (item => <Item key={item.id} tipo={item.tipo} talles={item.talles} image={item.image} precio={item.precio} />)}
    </div>

  )
}
 
export default ItemList;*/