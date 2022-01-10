import './App.scss';
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
