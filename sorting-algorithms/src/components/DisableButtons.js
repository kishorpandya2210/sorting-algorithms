import React from 'react'

function DisableButtons({text}) {
    document.getElementById("generate").setAttribute("disabled","true");
    document.getElementById("bubble").setAttribute("disabled","true");
    document.getElementById("selection").setAttribute("disabled","true");
    document.getElementById("insertion").setAttribute("disabled","true");
    document.getElementById("merge").setAttribute("disabled","true");
    document.getElementById("quick").setAttribute("disabled","true");
    document.getElementById("heap").setAttribute("disabled","true");


    return;
}

export default DisableButtons
