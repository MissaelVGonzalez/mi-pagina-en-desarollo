import React, { useState } from "react";


function Hola() {
    const [hola, setHola] = useState("Hola");

    const handleHola = () => {
        setHola("Proyectos");
    };

    const handleHolaOut = () => {
        setHola("Hola");
    };

    return(
        <div className="principal">
            <h1 className="hola" onMouseOut={handleHolaOut} onMouseOver={handleHola}
            style={{ overflow: "visible", width: "0px",           transition: "color 0.5s ease",
            color: hola === "Hola" ? "#CBE4DE" : "#0E8388", }}
            
            >{hola}</h1>
        </div>
    );
}

export default Hola