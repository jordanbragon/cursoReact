'use strict'

import React from 'react'

const Button = ({children, handleClick}) => (
    <button className='main-button' onClick={handleClick}>
        {children}
    </button>
)

//Validação de propriedades
Button.propTypes = {
    //Obrigando a prop handleClick ser obrigatória e receber uma function
    
                                 //tipo que a prop vai esperar receber 
    handleClick: React.PropTypes.func.isRequired
                                      //Obrigatoriedade
}

export default Button