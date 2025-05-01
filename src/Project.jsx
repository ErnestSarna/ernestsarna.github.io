import { useState } from 'react';

function Project(props){
    const [activeImage, setActiveImage] = useState(1);
    const source = props.imgSrc + "1.png";
    return (
        <div className='d-flex justify-content-center mt-3'>
            <img src={props.imgSrc} alt='project display'></img>
            <ul>
                {props.desc.map((item) => 
                    <li>{item}</li>
                )}
            </ul>
        </div>
    );
}

export default Project;