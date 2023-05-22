import React, { useState } from "react";
import { motion } from "framer-motion";

function Experiencia() {
    const [experiencia, setExperiencia] = useState("Soy");
    const [boleano, setBoleano] = useState(true);

    const handleExperiencia = () => {
        setExperiencia(<motion.p
            animate={{
                x: 28,
                }}
        >Experiencia</motion.p>);
        setBoleano(false);
    };

    const handleExperienciaOut = () => {
        setExperiencia(<motion.p
            animate={{
                x: 0,
                }}
        >Soy</motion.p>);
        setBoleano(true);
    };

    return(
        <div className="principal">
            <h1 className="Soy" onMouseOut={handleExperienciaOut} onMouseOver={handleExperiencia}
            style={{ overflow: "visible", width: "0px",
            transition: "color 0.5s ease",
            color: boleano === true ? "#CBE4DE" : "#0E8388",  }}
            >{experiencia}</h1>
        </div>
    );
}

export default Experiencia