import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'

const Formulario = ({guardarCategoria}) => {


    const OPCIONES = [
        {value: 'general' , label: 'General'},
        {value: 'business' , label: 'Negocios'},
        {value: 'entertainment' , label: 'entretenimiento'},
        {value: 'health' , label: 'Salud'},
        {value: 'science' , label: 'Ciencia'},
        {value: 'sport' , label: 'Deportes'},
        {value: 'technology' , label: 'Tecnología'},
    ]


    // utilizar custom hook

    const [categoria, SelectNoticias ] = useSelect('general', OPCIONES);
    
    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row` }>
            <div className="col s12 offset-2">
                <form 
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>encuentra Noticas por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s4 offset-s4">
                        <input  
                            type="submit"
                            className={`${styles.btn_block} btn-large light-blue darken-3`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;