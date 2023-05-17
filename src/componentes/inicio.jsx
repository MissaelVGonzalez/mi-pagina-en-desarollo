import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hola from "./controlador-inicio/hola";
import Contacto from "./controlador-inicio/contacto";
import Experiencia from "./controlador-inicio/Experiencia";
import "../estilos/inicioEstilo.css";


function Inicio() {
    return (
        <Router>
            <div className="contenedor-pricipal">
            <div className="yo">
                    <Link to="/proyectos" className="link">
                        <h1 className="link-texto">
                            <Hola />
                        </h1>
                    </Link>
                    <Link to="/experiencia" className="link">
                        <h1 className="link-texto">
                            <Experiencia />
                        </h1>
                    </Link>
                    <Link to="/contacto" className="link">
                        <h1 className="link-texto">
                            <Contacto />
                        </h1>
                    </Link>
                </div>
                <div className="imagen-abajo">
                    <Link to="/">
                        <img src="./logo192.png" alt="missaelImagen" className="imagen-mia" />
                    </Link>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<p className="ruta"> contenido principal y de presentacion </p>} />
                <Route path="/proyectos" element={<p className="ruta">Contenido de la página de Proyectos</p>} />
                <Route
                    path="/experiencia"
                    element={<p className="ruta">Contenido de la página de Experiencia</p>}
                />
                <Route
                    path="/contacto"
                    element={<p className="ruta">Contenido de la página de Contacto</p>}
                />
            </Routes>
        </Router>
    );
}

export default Inicio;
