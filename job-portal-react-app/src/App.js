import './css/App.css';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import JobDescription from "./pages/JobDescription";
import HomePage from "./pages/HomePage";
import JobApplicationForm from "./pages/JobApplicationForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/job/:id" element={<JobDescription/>} />
                <Route path="/job/apply" element={<JobApplicationForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
