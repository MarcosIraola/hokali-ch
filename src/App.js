import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Start from './views/Start/Start';
import Landing from './views/Landing/Landing';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Landing/>} />
                <Route exact path='/start' element={<Start/>} />
            </Routes>
        </div>
    );
}

export default App;
