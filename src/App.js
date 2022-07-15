import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div className="h-screen w-screen">
      <header>
        <Navbar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
