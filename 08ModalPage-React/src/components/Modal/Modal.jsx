import React from 'react'
import './Modal.scss'
import logo from '../../img/paypal_logo.png'

const Modal = ({open, onClose}) => {
    if(!open) return;

    return (
        <>
        <section className='contenedor' onClick={onClose} >
            <div className='sub-contenedor' onClick={(e)=>{e.stopPropagation()}} >  {/* //stopPropagation hace que el evento (onClick en este caso) no tenga efecto en este contenedor */}
                <div className='contenido'>
                    <div className='icon'>
                        <img src={logo} alt="PayPal" width='48px'/>
                    </div>
                    <div className='mensaje'>
                        <div className='title'>
                            <h3>
                                Pago realizado con exito
                            </h3>
                            <div className='text'>
                                Gracias por su compra
                            </div>
                        </div>
                    </div>
                </div>
                <div className='actions'>
                    <button className='btn-descargar'>Descargar</button>
                    <button className='btn-volver' onClick={onClose} >Volver</button>
                </div>
            </div> 

        </section>
        </>
    )
}

export default Modal