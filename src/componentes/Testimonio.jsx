import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) { 
    return (
        <div className="contenedor-testimonios">
            <img className="img-testimonio" 
                src={require(`../imagenes/testimonio-${props.imagen}.png`)}
                alt="Foto de Aleja"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}
export default Testimonio;