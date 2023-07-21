import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
    space: 'grk1735tpeot',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY
  })
  
export const useFetchProject = () => {
    const [loading, isLoading] = useState(true)
    const [project, setProjects] = useState([])

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'convertor' })
            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {title, url, img, id}
            })
            isLoading(false)
            setProjects(projects)
        } catch (error) {
            isLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

 return {loading, project}
} 
export default useFetchProject

