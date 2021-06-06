import React from 'react'

function EnableButtons() {
    document.getElementById("generate").setAttribute("disabled","false");
    document.getElementById("bubble").setAttribute("disabled","false");
    document.getElementById("selection").setAttribute("disabled","false");
    document.getElementById("insertion").setAttribute("disabled","false");
    document.getElementById("merge").setAttribute("disabled","false");
    document.getElementById("quick").setAttribute("disabled","false");
    document.getElementById("heap").setAttribute("disabled","false");
    return ;
}

export default EnableButtons
