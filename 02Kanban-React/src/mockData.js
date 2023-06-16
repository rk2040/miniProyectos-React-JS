import { v4 as uuidv4 } from 'uuid'    // libreria para generar Ids 

const mockData = [
    {
        id: uuidv4(),
        title: '📋 Por hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar HTML5 y CSS3'
            },
            {
                id: uuidv4(),
                title: 'Estudiar JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Estudiar React JS'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Node JS'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✏️ En progreso',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Curso React JS'
            },
            {
                id: uuidv4(),
                title: 'Curso Node JS'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✔️ Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso HTML5 y CSS3'
            },
        ]
    }
];

export default mockData