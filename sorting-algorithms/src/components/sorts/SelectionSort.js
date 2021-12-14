function SelectionSort({divs}) {

    var delay_time=10000/(Math.floor(divs.length/10)*100);        //Decrease numerator to increase speed.
    var c_delay=0;//This is updated ov every div change so that visualization is visible.

    function div_update(cont,height,color){
        window.setTimeout(function(){
            cont.style=" margin:0% 0.1%; width:" + (100/divs.length-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
        },c_delay+=delay_time);
    }

    for(var i=0;i<divs.length-1;i++)
    {
        div_update(divs[i],parseInt(divs[i].getAttribute("id")),"red");//Color update

        var index_min=i;

        for(var j=i+1;j<divs.length;j++)
        {
            div_update(divs[j],parseInt(divs[j].getAttribute("id")),"yellow");//Color update

            if(parseInt(divs[j].getAttribute("id"))<parseInt(divs[index_min].getAttribute("id")))
            {
                if(index_min!=+i)
                {
                    div_update(divs[index_min],parseInt(divs[index_min].getAttribute("id")),"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],parseInt(divs[index_min].getAttribute("id")),"red");//Color update
            }
            else
            {
                div_update(divs[j],parseInt(divs[j].getAttribute("id")),"blue");//Color update
            }
        }
        
        if(index_min!=+i)
        {
            var temp=divs[index_min].getAttribute("id");
            divs[index_min].setAttribute("id", divs[i].getAttribute("id"));
            divs[i].setAttribute("id", temp);

            div_update(divs[index_min],parseInt(divs[index_min].getAttribute("id")),"red");//Height update
            div_update(divs[i],parseInt(divs[i].getAttribute("id")),"red");//Height update
            div_update(divs[index_min],parseInt(divs[index_min].getAttribute("id")),"blue");//Color update
        }
        div_update(divs[i],parseInt(divs[i].getAttribute("id")),"green");//Color update
    }
    div_update(divs[i],parseInt(divs[i].getAttribute("id")),"green");//Color update

    return;
}

export default SelectionSort
