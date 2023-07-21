import React from 'react'

const SingleProject = ({url, id, img, title, loading}) => {
    
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <li>
        <a
            href={url}
            key={id}
            target={'_blank'}
        >
                <div className="image">
                    <img src={img} />
                    <span>Live Demo</span>
                </div>
                <h3>{ title.toUpperCase() }</h3>
            </a>
        </li>
  )
}

export default SingleProject