import React from 'react'
import jobs from '../../data/data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const JobLists = () => {
    const [jobData, setJobData] = useState(jobs);   //BaseDatos (tipo json)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchByLocation, setSearchByLocation] = useState('');

    const searchTermValue = searchTerm.toLowerCase();

    const locationSearchHandler = ()=>{
        const filterData = jobs.filter( (job)=>(
            job.location.toLowerCase().includes(searchByLocation.toLowerCase()))
        )
        setJobData(filterData)
    };

    //filtro por tipo de contrato
    const filterJobData = (e)=>{
        const filterValue = e.target.value;
        if(filterValue === 'full-time'){
            const filterData = jobs.filter( (job)=> job.contract === 'Full Time')
            setJobData(filterData)
        }
        else if(filterValue === 'part-time'){
            const filterData = jobs.filter( (job)=> job.contract === 'Part Time')
            setJobData(filterData)
        }
        else if(filterValue === 'freelance'){
            const filterData = jobs.filter( (job)=> job.contract === 'Freelance')
            setJobData(filterData)
        }
    }

    return (
        <>
        <section className='job__list'>
            <div className='container'>
                <div className='job__list__wrapper'>
                    <div className='search__panel'>
                        <div className='search__panel-01'>
                            <input type="text" placeholder='Busqueda por Puesto, empresa' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                        </div>
                        <div className='search__panel-02'>
                            <input type="text" placeholder='Busqueda por Ubicación' value={searchByLocation} onChange={(e)=>setSearchByLocation(e.target.value)}/>
                            <button onClick={locationSearchHandler}>Buscar</button>
                        </div>
                        <div className='search__panel-03'>
                            <select name="" id="" onChange={filterJobData}>
                                <option>Filtrar trabajo por</option>
                                <option  value="full-time">Full time</option>
                                <option  value="part-time">Part time</option>
                                <option  value="freelance">Freelance</option>
                            </select>
                        </div>
                    </div>
                    <div className='jobs__wrapper'>
                        {jobData ?.filter( (job)=>{
                            if(searchTerm === '') return job;
                            if(job.position.toLocaleLowerCase().includes(searchTermValue) || job.company.toLocaleLowerCase().includes(searchTermValue))
                            return job;
                        })
                        .map( (item)=>(
                            <div className='job__item' key={item.id} >

                                <img src={item.logo} alt={item.company} />
                                
                                <div className='job__content'>
                                    <h6> {item.postedAt} - {item.contract} </h6>
                                    <h1> 
                                        <Link to={`/jobs/${item.position}`}>
                                            {item.position}
                                        </Link>
                                    </h1>
                                    <p> {item.company} </p>
                                    <div className='location'>
                                        <p>
                                            Location: <span>{item.location}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default JobLists