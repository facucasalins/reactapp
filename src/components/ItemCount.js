import React, { useState } from 'react';


export default function Contador(stock, inicial) {
    const [contador, setContador] = useState(0);



    return (
        <div>
        <div>{contador}</div>
            <button onClick={() => setContador(contador + 1)}>Agregar al carrito</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>

        </div>



        )
}