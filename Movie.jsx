
import { useState } from 'react'
import React from 'react'


 
export const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


     fetch(`https://swapi.dev/api/films`)
            .then((response) => {
                if (!response.ok) {
                    // alert(`This is an HTTP Error: The status is ${response.status}`)
                   throw new Error(`This is an HTTP Error: The status is ${response.status}`)
                }
                return response.json()
             })
             .then((actualData) => {
                setData(actualData.results)
                 setError(null)
            })
            .catch((error) => {
                console.log(error)
                 setError(error)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })

    return (
        <div>
            {loading && <div className='di'>Data is loading. Please wait...</div>}
            {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
            <ul className='List'>
                {data && data.map((item) => {
                    return (
                        <>
                        <li className='each' key={item.episode_id}>
                            <h2 className='title'>{item.title}</h2>
                            <p className='date'>{item.release_date}</p>
                            <p className='crawl'>{item.opening_crawl}</p>
                            <hr/>
                            <a className='link'>More Info</a>
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}
 
 
  export default Movie;