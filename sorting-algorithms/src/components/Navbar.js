import React from 'react'
import Button from './Button'

const Navbar = () => {

    return (
        <div>
            <nav>
                <div className="array_size">
                    <p>Size of array</p>
                    <input id="size" type="range" min="20" max="250" step="5"></input>
                    <br></br>
                    <Button id="generate" text="Generate Array"></Button>
                </div>
                <div className="title">
                    <h1>Sorting Visualizer</h1>
                    <Button id="bubble" text="Bubble Sort"></Button>
                    <Button id="selection" text="Selection Sort"></Button>
                    <Button id="insertion" text="Insertion Sort"></Button>
                    <Button id="merge" text="Merge Sort"></Button>
                    <Button id="quick" text="Quick Sort"></Button>
                    <Button id="heap" text="Heap Sort"></Button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
