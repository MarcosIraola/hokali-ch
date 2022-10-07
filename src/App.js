import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Start from './pages/Start/Start';
import { HOME, START } from './routes/routes';
import Home from './pages/Home/Home';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path={HOME} element={<Home/>} />
                <Route exact path={START} element={<Start/>} />
            </Routes>
        </div>
    );
}

export default App;
