import React from 'react'
import Array from './Array'
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
                    // InsertionSort();
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

        }
    }

    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button
