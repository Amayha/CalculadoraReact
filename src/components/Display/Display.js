import React from "react";
import "./Display.css";

function Display(props){
    return <section className="Display">
        <div className="Display__top">{props.formula}</div>
        <div className="Display__bottom">{props.current}</div>

    </section>;
}

export default Display;