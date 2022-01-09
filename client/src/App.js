import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { Home } from './pages/home/home.component';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
