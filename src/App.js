import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
function App() {
  return (
    <div className="h-screen w-screen">
      <header>
        <Navbar />
      </header>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
