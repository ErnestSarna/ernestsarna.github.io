import { useState, useEffect } from 'react';

function Project(props){
    const [activeImage, setActiveImage] = useState(1);
    const [source, setSource] = useState(props.info.path + "1.png");

    useEffect(() => {
        setSource(props.info.path + `${activeImage}.png`);
    }, [props.info.path, activeImage]);

    function handleBack(){
        if(activeImage > 1){
            setActiveImage(activeImage - 1);
        }
    }
    function handleForward(){
        if(activeImage < 5){
            setActiveImage(activeImage + 1);
        }
    }
    
    return (
        <div>
            <div style={props.reverse ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}} className='d-flex justify-content-flex-start mb-2'>
                <div>
                    <img src={source} alt='project display' width="600" height="300" style={{borderRadius: "0.3rem"}}></img>
                    <div className='d-flex justify-content-center mt-2'>
                        <button onClick={handleBack} className='image-button my-auto p-1 me-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                            </svg>
                        </button>
                        
                        <button onClick={handleForward} className='image-button my-auto p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={props.reverse ? "me-4 desc" : "ms-4 desc"}>
                    <h2>{props.info.name}</h2>
                    <div className="project-tech my-2 d-flex">
                        {props.info.languages.map((item) => (
                            <p className="badge rounded-pill">{item}</p>
                        ))}
                    </div>
                    <p className='lead'>{props.info.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;