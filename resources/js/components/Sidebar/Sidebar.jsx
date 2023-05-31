import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img
                    src="https://alan.co.id/wp-content/uploads/2022/09/Logo-Alan-Creative-1536x360-1.png"
                    alt=""
                />
            </div>

            {/* Menu */}
            <ul className="navbar-list">
                <button>
                    <Link to="/">Soal 1</Link>
                </button>
                <button>
                    <Link to="/soal-2">Soal 2 - Dashboard</Link>
                </button>
            </ul>
        </div>
    );
}

export default Sidebar;
