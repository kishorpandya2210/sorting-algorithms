function InsertionSort({divs}) {

    var delay_time=10000/(Math.floor(divs.length/10)*100);        //Decrease numerator to increase speed.
    var c_delay=0;//This is updated ov every div change so that visualization is visible.

    function div_update(cont,height,color){
        window.setTimeout(function(){
            cont.style=" margin:0% 0.1%; width:" + (100/divs.length-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
        },c_delay+=delay_time);
    }   

    for(var j=0;j<divs.length;j++)
    {
        div_update(divs[j],parseInt(divs[j].getAttribute("id")),"yellow");//Color update

        var key= parseInt(divs[j].getAttribute("id"));
        var i=j-1;
        while(i>=0 && parseInt(divs[i].getAttribute("id"))>key)
        {
            div_update(divs[i],parseInt(divs[i].getAttribute("id")),"red");//Color update
            div_update(divs[i+1],parseInt(divs[i+1].getAttribute("id")),"red");//Color update

            divs[i+1].setAttribute("id",divs[i].getAttribute("id"));
            // div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],parseInt(divs[i].getAttribute("id")),"red");//Height update
            div_update(divs[i+1],parseInt(divs[i+1].getAttribute("id")),"red");//Height update
    
            div_update(divs[i],parseInt(divs[i].getAttribute("id")),"blue");//Color update
            if(i===(j-1))
            {
                div_update(divs[i+1],parseInt(divs[i+1].getAttribute("id")),"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],parseInt(divs[i+1].getAttribute("id")),"blue");//Color update
            }
            i-=1;
        }
        divs[i+1].setAttribute("id",key.toString());
        // parseInt(divs[i+1].getAttribute("id"))=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],parseInt(divs[t].getAttribute("id")),"green");//Color update
        }
    }
    div_update(divs[j-1],parseInt(divs[j-1].getAttribute("id")),"green");//Color update

    return ;
}

export default InsertionSort
