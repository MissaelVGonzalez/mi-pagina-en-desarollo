import React, { useState } from "react";


function Experiencia() {
    const [experiencia, setExperiencia] = useState("Soy");

    const handleExperiencia = () => {
        setExperiencia("Experiencia");
    };

    const handleExperienciaOut = () => {
        setExperiencia("Soy");
    };

    return(
        <div className="principal">
            <h1 className="Soy" onMouseOut={handleExperienciaOut} onMouseOver={handleExperiencia}
            style={{ overflow: "visible", width: "0px",
            transition: "color 0.5s ease",
            color: experiencia === "Soy" ? "#CBE4DE" : "#0E8388",  }}
            >{experiencia}</h1>
        </div>
    );
}

export default Experiencia