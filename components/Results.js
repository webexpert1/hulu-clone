import Thumbnail from "./Thumbnail"
import { React, Fragment } from 'react';


function Results({results}) {
    return (
        <div className='p-2 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map(result => {
                return <Thumbnail key={result.id} result={result} />
            })}
        </div>
    )
}

export default Results
