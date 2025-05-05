import Project from "./Project";

function Projects(){
    const quotingToolInfo = {
        name: 'Quoting Tool',
        languages: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'XrmToolBox'],
        path: '/quoting_tool/',
        numOfImgs: 5,
        desc: (
            <>
            Custom Microsoft Dynamics web application designed to streamline the creation of roofing quotes for sales teams. 
            The project focused on enhancing efficiency, accuracy, and user experience through a responsive interface built with Bootstrap and interactive JavaScript features. 
            A key functionality included the ability to generate professional-grade <a href="/Software_Resume.pdf" download="Quoting Tool Example PDF" title="Example PDF">PDFs</a> of quotes using html2canvas and jsPDF, ensuring consistent formatting and simplifying document management.
            </>
        ),
    };

    const fedoraInfo = {
        name: <a href="http://project.fedora.mom/" target="_blank" rel="noreferrer" title="Fedora Learning">Fedora Learning</a>,
        languages: ['React', 'CSS', 'Node.js', 'Postgres SQL'],
        path: '/fedora/',
        numOfImgs: 6,
        desc: 'Proof of concept online learning application aimed at a seamless user experience for both professors and students. Highly responsive on any device so that users can access it on the go or from home. Developed using a React front-end and a Node.js back-end to interface with a PostrgresSQL database that stores course and user information.',
    };

    return(
        <div style={{backgroundColor: '#4B0012'}}>
            <h1>Projects</h1>
        
            <div className="left py-5">
                <Project info={quotingToolInfo} reverse={false} />
            </div>
            
            <div className="right py-5">
                <Project info={fedoraInfo} reverse={true} />
            </div>
        </div>
    );
}

export default Projects;