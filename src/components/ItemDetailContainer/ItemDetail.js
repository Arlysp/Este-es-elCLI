import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import lista from "../../mock/asyncmock"


const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const traerItemPorId = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(lista.find(obj => obj.id === "4"))
      }, 1000)
    })
  }
  useEffect(()=>{
    traerItemPorId().then(respuesta=>{
      setItem(respuesta)
    }      
    )
    })
  }


  return (
    <ItemDetail item={item}/>
  )
export default ItemDetailContainer