import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <div className="array_size">
          <p>Size of array</p>
          <input id="size" type="range" min="20" max="250" step="1" value="80"></input>
          <br></br>
          <button id="generate">Generate array</button>
        </div>
        <div className="title">
          <h1>Sorting Visualizer</h1>
          <button id="bubble">Bubble Sort</button>
          <button id="selection">Selection Sort</button>
          <button id="insertion">Insertion Sort</button>
          <button id="merge">Merge Sort</button>
          <button id="quick">Quick Sort</button>
          <button id="heap">Heap Sort</button>
        </div>
        </nav>
        <section>
          <div id="array_container">

          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
