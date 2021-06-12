const Selection =({array=[],order}) => {
    for(let i=0;i<(array.length-1);i++) {
        const min=array[i],max=array[i];
        for(let j=i+1;j<array.length;j++) {
            if(order==="ascending") {
                if(array[j] < array [min]) 
                    min=j;
                swap(array[min],array[i])
            }
            else if(order==="descending") { 
                if(array[j] > array [max])
                    max=j;
                swap(array[max],array[i])        
            }
            else 
            console.log('Invalid Input')   
        }
    }

    function swap (number1,number2) {
        const temp= numner1;
        number1= number2;
        number2= temp;             
    }

}

export default Selection;
