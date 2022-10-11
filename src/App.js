import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Start from './pages/Start/Start';
import { HOME, START, EXAM } from './routes/routes';
import Home from './pages/Home/Home';
import ExamView from './pages/ExamView/ExamView';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path={HOME} element={<Home/>} />
                <Route exact path={START} element={<Start/>} />
                <Route exact path={EXAM} element={<ExamView/>} />
            </Routes>
        </div>
    );
}

export default App;
