import React from 'react'
import styled from 'styled-components'
import sinfoto from '../assets/sinfoto_.png'
import BtnOperaciones from '../components/BtnOperaciones'
import {FcPicture} from 'react-icons/fc'
import { useRef } from 'react'

const ProductosConfig = () => {
    const ref = useRef(null);

    function abrirImagenes(){
        ref.current.click();
    }

    return (
        <Container>
            <div className='sub-contenedor'>
                <div className='header'>
                    <h1>📤Registro de Productos</h1>
                </div>

                <div className="pictureContainer">
                    <img src={sinfoto} alt="" />

                    <BtnOperaciones titulo='Cargar Imagen' icono={<FcPicture/>} funcion={abrirImagenes} />

                    <input ref={ref} type="file" accept='image/png' hidden={true} /> {/* con useRef le "robamos" las propiedades para que las tenga nuestro boton, y lo ocutamos con hidden o en css de styledComponents */}
                </div>

                <form action="" className='entradas'>
                    <ContainerInputs>
                        <div className='subcontainer'>
                            <h4>Descripción</h4>
                            <Inputs placeholder='Ingrese una Descripción' />
                        </div>
                    </ContainerInputs>

                    <ContainerInputs>
                        <div className='subcontainer'>
                            <h4>Precio</h4>
                            <Inputs placeholder='Ingrese un Precio' />
                        </div>
                    </ContainerInputs>

                    <div className='footercontent'>
                        <BtnOperaciones titulo='Cargar Imagen' icono={<FcPicture/>} funcion={abrirImagenes} />
                    </div>
                </form>
                
            </div>
        </Container>
    )
}

export default ProductosConfig


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .sub-contenedor{
        width: 80%;
        background-color: #e7ebf0;
        border-radius: 10px;
        padding: 10px 20px;
        margin: 0 20px;

        .header{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
        }

        .pictureContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;

            img{
                width:100px;
                object-fit: cover;
            }
            
            /* input{
                display: none;
            } */
        }

        .entradas{
            .footercontent{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                gap: 20px;
                margin-top: 20px;
            }
        }
    }
`

const ContainerInputs = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .subcontainer{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`
const Inputs = styled.input`
    border: 2px solid #e8e8e8;
    padding: 15px;
    border-radius: 10px;
    background-color: #212121;
    font-size: small;
    font-weight: bold;
    text-align: center;
    color: white;
    text-align: start;
    width: 70%;
    
    &:focus{
        outline-color: white;
        background-color: #212121;
        color: #e8e8e8;
        box-shadow: 5px 5px #888888;
    }
`
