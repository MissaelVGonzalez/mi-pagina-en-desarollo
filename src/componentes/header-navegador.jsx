import React from "react";
import Inicio from "./inicio.jsx";
import "../estilos/header-estilos.css";
import { motion } from "framer-motion";

function Encabezado() {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="principal">
      <Inicio></Inicio>
    </motion.div>
  );
}

export default Encabezado;
