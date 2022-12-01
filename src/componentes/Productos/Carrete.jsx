import React, { useState } from "react";
import Imagen from "./Imagen";
import"./Carrete.css"

const Carrete =() => {
    
    let cantidadImagenes = 3;
    
    const pushLista = (cantidad) =>{ 
       /* lo trate con arreglos, el dia de mañana podria tratarlo con objetos
        para pasarle la informacion por el lado del backend */
        let lista =[]
        
        for(let i=0; i<cantidad; i++){
            lista.push(<Imagen id={i} />)
        }
        return lista;
    }


    const [listaImagenes, setListaImagenes] = useState(pushLista(cantidadImagenes));

    return(
        <div className="lanzamientos">

            {listaImagenes}

        </div>
    )
}

export default Carrete;