const Bubble =({array=[],order}) => {
    for(let i=0;i<(array.length-1);i++) {
        for(let j=0;j<(array.length-i-1);j++) {
            if(order==="ascending") {
                if(array[j] > array [j+1])
                    swap(array[j+1],array[j]);
            }
            else if(order==="decending") { 
                if(array[j] < array [j+1])
                    swap(array[j+1],array[j]); 
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

export default Bubble;
