const Merge=({array,order}) =>{
    const half = array.length / 2  
    const left = array.splice(0, half)

    if(order==="ascending"){
        while (left.length && right.length) {
        
            if (left[0] < right[0]) {
                array.push(left.shift())  
            }     
            else {
                array.push(right.shift()) 
            }
    
        }
    }
    else if(order==="descending"){

    }
}

export default Merge;


