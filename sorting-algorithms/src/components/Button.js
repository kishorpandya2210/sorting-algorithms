import React from 'react'
import Array from './Array'
import DisableButtons from './DisableButtons'
import InsertionSort from './sorts/InsertionSort'
import BubbleSort from './sorts/BubbleSort'
import SelectionSort from './sorts/SelectionSort'
var divs=[]
function Button({text}) {
    
    const onClick = () =>{
        if(text==="Generate Array"){
            var size = document.getElementById("size").value;
            divs = Array({size});
        }
        else{
            switch(text){
                case "Bubble Sort":
                   BubbleSort({divs});
                    break;
                case "Selection Sort":
                    SelectionSort({divs});
                    break;
                case "Insertion Sort":
                    InsertionSort({divs});
                    break;
                case "Merge Sort":
                    // MergeSort();
                    break;
                case "Quick Sort":
                    // QuickSort();
                    break;
                case "Heap Sort":
                    // HeapSort();
                    break;
                default:
                    break;     
            }
            // DisableButtons({text});
        }
    }

    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button
