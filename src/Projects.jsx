import React from 'react'
import './projects.css'
import SingleProject from './SingleProject'
import useFetchProject from './FetchData'
import { toast } from 'react-toastify'
const Projects = () => {
    const { loading, project } = useFetchProject()
    return (
        <div className="container">
            <h1>Projects</h1>
        <ul>
        {project.map(ele => {return <SingleProject {...ele} loading={loading} />})}
        </ul>
    </div>
  )
}

export default Projects