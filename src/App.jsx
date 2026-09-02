import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Movies from "./components/Movies";
import Comics from "./components/Comics";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <Characters />

        <Movies />

        <Comics />

      </main>

    </div>
  );
}

export default App;