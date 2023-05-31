import React from "react";
import { Route, Routes } from "react-router-dom";
import Bill from "./bill/Bill";
import Sidebar from "./Sidebar/Sidebar";
import Soal1 from "./soal1/Soal1";
import Soal2 from "./soal2/Soal2";
import Create from "./Create/Create";

const App = () => {
    return (
        <div className="wrapper">
            <div className="wrapper-container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Soal1 />} />
                    <Route path="/soal-2" element={<Soal2 />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
