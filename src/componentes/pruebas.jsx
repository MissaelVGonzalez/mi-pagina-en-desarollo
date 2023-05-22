import { motion, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";
import "../estilos/inicioEstilo.css";

function MyComponent() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sensitivity = -0.02;

    const handleMouseMove = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const offsetX = (mouseX - window.innerWidth / 2) * sensitivity;
        const offsetY = (mouseY - window.innerHeight / 2) * sensitivity;

        x.set(offsetX);
        y.set(offsetY);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    },);

    return (
        <motion.img src="./fondo.png" alt="fondo" className="fondo" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
            style={{
                x,
                y,
            }}
            
        />
    );
}

export default MyComponent;
