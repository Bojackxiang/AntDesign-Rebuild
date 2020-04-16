import React from 'react'

interface DogShowProps {
    url: string;
}

const DogShow:React.FC<DogShowProps> = (props) => {
    return (
        <div>
            <img src={props.url}/>
        </div>
    )
}

export default DogShow;
