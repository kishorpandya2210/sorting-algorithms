function Array({size}) {
    var a = [];
    var divs=[];
    for(var i=0;i<size;i++){
        a.push(Math.round(Math.random()*100 + 1));
    }
    
    var div_sizes=[];
    var margin_size = 0.1;
    var cont = document.getElementById("array_container");
    cont.style="flex-direction:row";

    cont.innerHTML="";

    for(var i=0;i<size;i++)
    {
        div_sizes[i]=a[i];
        divs[i]=document.createElement("div");
        divs[i].style=" margin:0% " + margin_size + "%; background-color:red; width:" + (100/size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        divs[i].setAttribute("id",a[i].toString());
        cont.appendChild(divs[i]);
    }
    return divs;
}


export default Array
