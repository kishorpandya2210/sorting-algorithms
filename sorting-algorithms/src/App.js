import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <div className="array_size">
          <p>Size of array</p>
          <input id="size" type="range" min="20" max="250" step="1" value="80"></input>
          <button id="generate">Generate array</button>
        </div>
        <div className="title">
          <h1>Sorting Visualizer</h1>
          <button>Bubble Sort</button>
          <button>Selection Sort</button>
          <button>Insertion Sort</button>
          <button>Merge Sort</button>
          <button>Quick Sort</button>
          <button>Heap Sort</button>
        </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
