import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../../data/data';

const JobDetails = () => {
    const {position} =useParams();
    const job = jobs.find( (item)=> item.position === position);

    return (
        <>
        <div className='container'>
            <div className='details__top'>
                <div>
                    <h1> {job.company} </h1>
                    <h6>
                        {job.postedAt} - {job.contract}
                    </h6>
                </div>
            </div>
            <div className='requirements'>
                <h1>Descripcion del puesto</h1>
                <p> {job.desc} </p>
            </div>
            <div className='requirements'>
                <h1>Requerimientos</h1>
                <p>
                    {job.requirements.reqTitle}
                </p>
                <ul className='requirements__item'>
                    {job.requirements.reqItem.map( (item, index)=>(
                        <li key={index}> {item} </li>
                    ))}
                </ul>
            </div>
            <div className='responsibility'>
                <h1>Responsabilidades</h1>
                <p>
                    {job.responsibility.resTitle}
                </p>
                <ul className='responsibility__item'>
                    {job.responsibility.resItem.map( (item, index)=>(
                        <li key={index}> {item} </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default JobDetails