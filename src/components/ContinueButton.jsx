import React from "react";

const BotonContinuar = () => {
  return (
    <div className="btn">
      <button
        onClick={() => console.log("Ha hecho clic en el botón Continuar")}
      >
        Continuar
      </button>
    </div>
  );
};

export default BotonContinuar;
