import React, { useState } from "react";
import styled from "styled-components";
import sinfoto from "../assets/sinfoto_.png";
import BtnOperaciones from "../components/BtnOperaciones";
import { FcPicture } from "react-icons/fc";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../components/Spinner";

import { InsertarProductos, EditarUrlImg, SubirImgStorage, ValidarDatosRepetidos } from '../api/Aproductos';

import swal from 'sweetalert';

const ProductosConfig = () => {
    const [loading, setLoading] = useState(false);
    const [fileurl, setFileurl] = useState(sinfoto);
    const [file, setFile] = useState([]);
    const [estadoImg, setEstadoImg] = useState(false);

    const ref = useRef(null);

    function subirimgStorage(e){
        //carga local
        let fileLocal = e.target.files;
        let fileReaderLocal = new FileReader();

        fileReaderLocal.readAsDataURL(fileLocal[0]);
        const tipoimg = e.target.files[0];

        // validaciones
        if(tipoimg.type.includes('image/png')){
            if(fileReaderLocal && fileLocal && fileLocal.length){
                fileReaderLocal.onload = function load(){
                    setFileurl(fileReaderLocal.result)
                }
                //preparar img para storage
                let fileList = e.target.files;
                let fileReader = new FileReader();

                fileReader.readAsArrayBuffer(fileList[0]);
                fileReader.onload = function(){
                    let imagenData = fileReader.result;
                    setFile(imagenData);
                }
            }
        }
    }

    function abrirImagenes() {
        ref.current.click();
    }

    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    async function insertar(data){

        const img = file.length;

        if(img != 0){
            setLoading(true);
            setEstadoImg(false);
            const p = {
                descripcion: data.descripcion,
                precio: data.precio,
                icono:  '-',
            };
            const rptRepetido = await ValidarDatosRepetidos(p);

            if(rptRepetido == 0){
                const id = await InsertarProductos(p);

                const resptUrl = await SubirImgStorage(id, file);
    
                await EditarUrlImg(id, resptUrl);
    
                setLoading(false);
                reset({descripcion: '', precio: ''});
                setFileurl(sinfoto);
                
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                });
            }
            else{
                setLoading(false);
                swal({
                    title: "Datos Repetidos!",
                    text: "Ya tienes un registro con esa descripción!",
                    icon: "warning",
                });
            }
        }
        else{
            setEstadoImg(true);
        }
    }

    return (
        <Container>
            <div className="sub-contenedor">
                {
                    loading? <Spinner/> : '' // ternario para ver o no el spinner de carga
                }
                <div className="header">
                    <h1>📤Registro de Productos</h1>
                </div>

                <div className="pictureContainer">
                    <img src={fileurl} alt="" />
                    <BtnOperaciones
                        titulo="Cargar Imagen"
                        icono={<FcPicture />}
                        funcion={abrirImagenes}
                    />
                    <input
                        ref={ref} onChange={subirimgStorage}
                        type="file"
                        accept="image/png"
                        hidden={true}
                    />{" "}
                    {/* con useRef le "robamos" las propiedades para que las tenga nuestro boton, y lo ocutamos con hidden o en css de styledComponents */}

                    {
                        estadoImg && <p>Seleccione una imagen</p>
                    }
                </div>

                <form action="" className="entradas" onSubmit={handleSubmit(insertar)} >
                    <ContainerInputs>
                        <div className="subcontainer">
                            <h4>Descripción</h4>
                            <Inputs type="text" placeholder="Ingrese una Descripción" {...register('descripcion', {required:true, maxLength:20})} />
                        </div>
                        {
                            errors.descripcion?.type === 'required' && (
                                <p>Ingrese una descripción</p>
                            )
                        }
                        {
                            errors.descripcion?.type === 'maxLength' && (
                                <p>Maximo 10 caracteres</p>
                            )
                        }
                    </ContainerInputs>

                    <ContainerInputs>
                        <div className="subcontainer">
                            <h4>Precio</h4>
                            <Inputs step={'0.01'} type="number" placeholder="Ingrese un Precio" {...register ('precio', {required:true, valueAsNumber:true})} />
                        </div>
                        {
                            errors.precio?.type === 'required' && (
                                <p>Ingrese un precio</p>
                            )
                        }
                        {
                            errors.precio?.type === 'valueAsNumber' && (
                                <p>El valor debe ser un numero</p>
                            )
                        }
                    </ContainerInputs>

                    <div className="footercontent">
                        <BtnOperaciones
                            titulo="Enviar"
                            icono={<FcPicture />}
                        />
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default ProductosConfig;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .sub-contenedor {
        width: 80%;
        background-color: #e7ebf0;
        border-radius: 10px;
        padding: 10px 20px;
        margin: 0 20px;

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
        }

        .pictureContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;

            img {
                width: 100px;
                object-fit: cover;
            }

            /* input{
                display: none;
            } */
        }

        .entradas {
            .footercontent {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                gap: 20px;
                margin-top: 20px;
            }
        }
    }
`;

const ContainerInputs = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .subcontainer {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
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

    &:focus {
        outline-color: white;
        background-color: #212121;
        color: #e8e8e8;
        box-shadow: 5px 5px #888888;
    }
`;
