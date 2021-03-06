import React from 'react';
import './Greetings.css';


const Greetings = props => {
    const selectLang = (lang) => {
        switch (lang) {
            case 'de':
                return 'Hallo'
            case 'es':
                return 'Hola'
            case 'fr':
                return 'Bonjour'
            default:
                return 'Hello'       
        }
    }
    return (
        <div >
        <p className='greets'>{selectLang(props.lang)} {props.children}</p></div>
    )
}
export default Greetings