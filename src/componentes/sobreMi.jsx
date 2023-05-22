import React from "react";
import { motion } from "framer-motion";
import "../estilos/sobreMi.css";

function SobreMi() {
    return (
        <div className="container">
            <div className="contenedor-sobreMi">
                <motion.div className="decoracionDerecha"></motion.div>
                <motion.div className="decoracionIzquierda"></motion.div>
                <h2 className="sobreMi">Bienvenido</h2>
                <div className="texto-sobreMi">
                    <p className="info-sobreMi">Aquí encontrarás una variedad de proyectos y trabajos en los que he estado involucrado como frontend developer. ¡Es un placer recibirte en este espacio donde comparto mi pasión por el diseño y la creación de experiencias digitales!</p>
                    <p className="info-sobreMi2">Dentro de mi portafolio, podrás explorar proyectos innovadores y creativos que reflejan mi enfoque en el desarrollo web. Desde aplicaciones interactivas hasta sitios web receptivos y elegantes, cada proyecto ha sido cuidadosamente diseñado para brindar una experiencia excepcional al usuario.</p>
                </div>
            </div>
        </div>
    );
}

export default SobreMi