import React, { useState } from "react";
import { motion } from "framer-motion";


function Hola() {
    const [hola, setHola] = useState("Hola");
    const [boleano, setBoleano] = useState(true);
    const handleHola = () => {
        setHola(<motion.p
            animate={{
                x: 28,
                }}
        >Proyectos</motion.p>);
        setBoleano(false)
    };

    const handleHolaOut = () => {
        setHola(<motion.p
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                }}
        >Hola</motion.p>);
        setBoleano(true);
    };

    return(
        <div className="principal">
            <h1 className="hola" onMouseOut={handleHolaOut} onMouseOver={handleHola}
            style={{ overflow: "visible", width: "0px",           transition: "color 0.5s ease",
            color: boleano === true ? "#CBE4DE" : "#0E8388", }}
            
            >{hola}</h1>
        </div>
    );
}

export default Hola