const Quick=({array,left,right}) =>{

    var index;
    if (left < right) {
        index = partition(array, left, right);
        if (left < index - 1) {
            Quick(array, left, index - 1, order);
        }
        if (index < right) {
            Quick(array, index, right, order);
        }
    }

    function partition(array, left, right) {
        const pivot   = array[Math.floor((right + left) / 2)]
        i= left,
        j= right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array[i], array[j]);
                i++;
                j--;
            }
        }
        return i;
    }
    
    function swap (number1,number2) {
        const temp= numner1;
        number1= number2;
        number2= temp;             
    }

}

export default Quick;