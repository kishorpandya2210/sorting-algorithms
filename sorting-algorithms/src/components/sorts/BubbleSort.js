import React from 'react'

function BubbleSort({divs}) {

    var delay_time=10000/(Math.floor(divs.length/10)*100);        //Decrease numerator to increase speed.
    var c_delay=0;//This is updated ov every div change so that visualization is visible.

    function div_update(cont,height,color){
        window.setTimeout(function(){
            cont.style=" margin:0% 0.1%; width:" + (100/divs.length-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
        },c_delay+=delay_time);
    }   

    for(var i=0;i<divs.length-1;i++)
    {
        for(var j=0;j<divs.length-i-1;j++)
        {
            div_update(divs[j],parseInt(divs[j].getAttribute("id")),"yellow");//Color update

            if(parseInt(divs[j].getAttribute("id"))>parseInt(divs[j+1].getAttribute("id")))
            {
                div_update(divs[j],parseInt(divs[j].getAttribute("id")), "red");//Color update
                div_update(divs[j+1],parseInt(divs[j+1].getAttribute("id")), "red");//Color update

                var temp=divs[j].getAttribute("id");
                divs[j].setAttribute("id", divs[j+1].getAttribute("id"));
                divs[j+1].setAttribute("id", temp);

                div_update(divs[j],parseInt(divs[j].getAttribute("id")), "red");//Height update
                div_update(divs[j+1],parseInt(divs[j+1].getAttribute("id")), "red");//Height update
            }
            div_update(divs[j],parseInt(divs[j].getAttribute("id")), "blue");//Color update
        }
        div_update(divs[j],parseInt(divs[j].getAttribute("id")), "green");//Color update
    }
    div_update(divs[0],parseInt(divs[j].getAttribute("id")), "green");//Color update

    return (
        <div>
            
        </div>
    )
}

export default BubbleSort

