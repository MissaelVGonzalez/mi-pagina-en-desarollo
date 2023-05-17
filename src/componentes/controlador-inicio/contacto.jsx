import React, { useState } from "react";


function Contacto() {
    const [contacto, setContacto] = useState("Missael");

    const handleContacto = () => {
        setContacto("Contacto");
    };

    const handleContactoOut = () => {
        setContacto("Missael");
    };

    return(
        <div className="principal">
            <h1 className="Missael" onMouseOut={handleContactoOut} onMouseOver={handleContacto}
                style={{ overflow: "visible", width: "0px",
                transition: "color 0.5s ease",
                color: contacto === "Missael" ? "#CBE4DE" : "#0E8388",  }}
            >{contacto}</h1>
        </div>
    );
}

export default Contacto