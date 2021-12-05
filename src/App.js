import Navigation from './Navigation.js';
import Home from './Home.js';

// The root component that gets injected into the DOM
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Content">
        <h1>Welcome to the homepage!</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
