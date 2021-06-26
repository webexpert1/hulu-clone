import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { forwardRef } from 'react';

const myLoader = ({ src, width, quality }) => {
    return `https://links.papareact.com/ua6/${src}?w=${width}&q=${quality || 75}`
}

function Thumbnail = ({result}, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original';
    console.log(result);

    return (
        <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image
                layout='responsive'
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                width={1920} height={1000}
                key={result.id}  />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className=''>{ result.title || result.original_title }</h2>
                {/* {result.media_type && `${result.media_type} * {" "} */}
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {`${result.release_date || result.first_air_date}`}
                    <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
