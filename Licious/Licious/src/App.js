import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import MainRoutes from './Components/AllRoutes/MainRoutes';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(store => store)
  console.log(state)
  return (
    <div className="App">
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
