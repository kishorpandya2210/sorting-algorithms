import React from 'react'
import Array from './Array'

function Button({text}) {
    const onClick = () =>{
        if(text==="Generate Array"){
            var size = document.getElementById("size").value;
            Array({size});
        }
    }

    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button
