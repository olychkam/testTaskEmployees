import React from 'react';
import './App.css';
import {Header} from "./components/03-Header/Header";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./components/01-Home/Home";
import {EmployeesContainer} from "./components/02-Employees/EmployeesContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/employees" element={<EmployeesContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
