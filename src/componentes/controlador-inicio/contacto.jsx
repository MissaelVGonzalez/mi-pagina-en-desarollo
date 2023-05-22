import React, { useState } from "react";
import { motion } from "framer-motion";

function Contacto() {
    const [contacto, setContacto] = useState("Missael");
    const [boleano, setBoleano] = useState(true);

    const handleContacto = () => {
        setContacto( <motion.p
            animate={{
                x: 28,
                }}
        >Contacto</motion.p>);
        setBoleano(false)
    };

    const handleContactoOut = () => {
        setContacto( <motion.p
            animate={{
                x: 0,
                }}
        >Missael</motion.p>);
        setBoleano(true)
    };

    return(
        <div className="principal">
            <h1 className="Missael" onMouseOut={handleContactoOut} onMouseOver={handleContacto}
                style={{ overflow: "visible", width: "0px",
                transition: "color 0.5s ease",
                color: boleano === true ? "#CBE4DE" : "#0E8388",  }}
            >{contacto}</h1>
        </div>
    );
}

export default Contacto