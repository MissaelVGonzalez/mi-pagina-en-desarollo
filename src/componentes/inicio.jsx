import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SobreMi from "./sobreMi";
import Hola from "./controlador-inicio/hola";
import Contacto from "./controlador-inicio/contacto";
import Experiencia from "./controlador-inicio/Experiencia";
import Imagen from './pruebas'
import Circulo from "../decoracion/decoracion";
import CirculoPequeno from "../decoracion/circuloPequeno";
import "../estilos/inicioEstilo.css";
import { motion } from "framer-motion"


function Inicio() {
    return (
        <Router>
            <div className="contenedor-pricipal">
                <Circulo/>
                <div className="circulo2"><Circulo /></div>
                <div className="circulo5"><Circulo /></div>
                <div className="circulo3"><CirculoPequeno /></div>
                <div className="circulo4"><CirculoPequeno /></div>
                <div className="fondoContenedor">
                    <Imagen></Imagen>
                </div>
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
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            src="./yo.png" alt="missaelImagen" className="imagen-mia" />
                    </Link>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<p className="ruta"> <SobreMi/> </p>} />
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
