import React from "react";
import { Link } from "react-router-dom";
 
function NavBar2() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg 
                bg-body-tertiary">
                <div className="container-fluid ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active"
                                    aria-current="page" to={`/`}>
                                    Начало
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Entertainment`}>
                                    Забавления
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Technology`}>
                                    Технологии
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Sports`}>
                                    Спорт
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Business`}>
                                    Бизнес
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Health`}>
                                    Здраве
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Science`}>
                                    Наука
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default NavBar2;