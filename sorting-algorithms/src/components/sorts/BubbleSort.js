import React from 'react'

function BubbleSort({divs}) {
    
    for(var i=0;i<divs.length;i++){
        for(var j=0;j<divs.length-i-1;j++){
            divs[j].style.backgroundColor="blue";
            divs[j+1].style.backgroundColor="blue";
            var a1=parseInt(divs[j].getAttribute("id"));
            var a2=parseInt(divs[j+1].getAttribute("id"));
                if(a1>a2){
                    divs[j].style=" margin:0% 0.1%; background-color:red; width:" + (100/divs.length-(2*0.1)) + "%; height:" + (a2) + "%;";
                    divs[j+1].style=" margin:0% 0.1%; background-color:red; width:" + (100/divs.length-(2*0.1)) + "%; height:" + (a1) + "%;";
                    divs[j+1].setAttribute("id",a1.toString());
                    divs[j].setAttribute("id",a2.toString());
                }
            
            
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default BubbleSort

