import React from 'react'
import { useState } from 'react'
import './Kanban.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData'
import Card from '../Card/Card'


const Kanban = () => {
    const [data, setData] = useState(mockData);

    const onDragEnd = (result)=>{
        if(!result.destination) return;

        const {source, destination} = result;

        if(source.droppableId !== destination.droppableId){
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId) // COLUMNA INDEX. para tomar el primer id que tome un id que pueda estar repetido y toma ese 1er id
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId) // COLUMNA DESTINO
            const sourceCol = data[sourceColIndex]  //Para saber el id de la columna donde estamos
            const destinationCol = data[destinationColIndex] //Para saber el id de la columna destino donde vamos a "soltar"
        
            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1) //Elimino la tarea de la columna de origen
            destinationTask.splice(destination.index, 0, removed) //Agregar a la columna destino mediante su index
        
            data[sourceColIndex].tasks = sourceTask //Actualizo los datos que se cambiaron
            data[destinationColIndex].tasks = destinationTask

            setData(data)
        }

    }

    return (
        <>
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                {data.map( (section)=>(
                    <Droppable key={section.id} droppableId={section.id}>
                        {
                            (provided)=>(
                                <div {...provided.droppableProps} className='kanban__section' ref={provided.innerRef}>
                                    <div className='knaban__section__title'>
                                        {section.title}
                                    </div>
                                    <div className='kanban__section__content'>
                                        {section.tasks.map((task, index)=>(
                                            <Draggable key={task.id} droppableId={task.id} index={index}>
                                                {
                                                    (provided, snapshot)=>(
                                                        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.dragHandleProps} style={ {...provided.draggableProps.style,opacity:snapshot.isDragging?'0.5':'1'} }>
                                                            <Card>{task.title}</Card>
                                                        </div>
                                                    )
                                                }
                                            </Draggable>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    </Droppable> //Area donde podemos "soltar"
                ))}
            </div>
        
        
        </DragDropContext>  
        </>
    )
}

export default Kanban