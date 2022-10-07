import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Start from './pages/Start/Start';
import Landing from './pages/Landing/Landing';
import { HOME, START } from './routes/routes';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path={HOME} element={<Landing/>} />
                <Route exact path={START} element={<Start/>} />
            </Routes>
        </div>
    );
}

export default App;
