import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import MainRoutes from './Components/AllRoutes/MainRoutes';
import { useSelector } from 'react-redux';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const state = useSelector(store => store)
  // console.log(state)
  return (
    <div className="App">
      <Navbar />
      <MainRoutes></MainRoutes>
      <Footer />
    </div>
  );
}

export default App;
