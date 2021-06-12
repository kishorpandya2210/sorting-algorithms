const Heap =({array=[],order}) => {
    let array_length=array.length
    for(let i=Math.floor(array.length/2)-1;i>=0;i--){
        sort(array,array_length,i)
    }
    for(let i=array.length-1;i>0;i--){
        swap(array[0],array[1])
        array_length--
        sort(array,array_length,0)
    }

    function sort(array,array_length,index){
        const leftindex=(2*index)+1
        const rightindex=(2*index)+2
 
        if(order="ascending"){
            const largest=i
            if (leftindex < array_length && arr[leftindex] > arr[largest])
            largest = leftindex;
            if (rightindex < array_length && arr[rightindex] > arr[largest])
            largest = rightindex;
            if (largest != index) {
                swap(array[index], array[largest]);
                sort(array,array_length,largest)
            }
        }

        else if(order="descending"){
            const smallest=i
            if (leftindex < array_length && arr[leftindex] < arr[smallest])
            smallest = leftindex;
            if (rightindex < array_length && arr[rightindex] < arr[smallest])
            smallest = rightindex;
            if (smallest != index) {
                swap(array[index], array[smallest]);
                sort(array,array_length,smallest)
            }           
        }       
    }

    function swap (number1,number2) {
        const temp= numner1;
        number1= number2;
        number2= temp;             
    }

}

export default Heap;