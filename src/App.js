import './App.css';
import Home from './Components/Home/Home';
import Navs from './Components/Navs/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navs />
      <Home />
    </div>
  );
}

export default App;
