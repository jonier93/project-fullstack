import React from "react";
import img_home from "../images/photo_home.jpg"

class Home extends React.Component {
    render(){
        return(
            <div className="block-home">
                <p> React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y eficientes. Se centra en la creación de interfaces de usuario declarativas, lo que significa que se describe cómo debería lucir la interfaz en un estado determinado y React se encarga de actualizar automáticamente la interfaz cuando los datos cambian.
                    React se ha vuelto muy popular en el desarrollo web debido a su enfoque en la construcción de interfaces de usuario eficientes y su flexibilidad para trabajar con otras tecnologías y bibliotecas 
                </p>
                <div className="block-img-home"> <img className="img-home" src={img_home} /> </div>                
            </div>
        )
    }
}

export {Home}