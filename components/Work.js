import { useState } from "react";
import { format, parseISO } from 'date-fns'

export const Work = (props) => {

    const [data, setData] = useState(props.data);
    const [active, setActive] = useState(data[0]);
    return(
        <>
        <p className="frost-text frost-web" style={{marginBottom: '2rem'}}>🚀 Where I've Worked</p>
        <div className="flex work-container"> 
            <div className="flex-col work-tabs">
                <ul className="works-web">
                    {
                        data?.map((work) => (
                            <li className={`${work.title == active.title ? 'active-work' : ''}`} 
                            onClick={() =>( setActive(work))}
                            ><p className="dark-text">{work.title}</p></li>
                        ))
                    }
                </ul>
                <details className="works-mobile">
                <summary>
                <p className="frost-text frost-mobile">🚀 Where I've Worked</p>

                </summary>
                <ul>
                    {
                        data?.map((work) => (
                            <li className={`${work.title == active.title ? 'active-work' : ''}`} 
                            onClick={() =>( setActive(work))}
                            ><p className="dark-text">{work.title}</p></li>
                        ))
                    }
                </ul>

            </details>
            </div>
            
            <div className="work-details">
                <h2>{active.title}</h2>
               <span className="flex">
                    <p className='dark-text' dateTime={active.startDate}>
                            {format(parseISO(active.startDate), 'LLLL  yyyy')} -
                    </p>
                            {
                                active.endDate ? 
                                <p className='dark-text' dateTime={active.endDate}>
                                {format(parseISO(active.endDate), 'LLLL  yyyy')}
                                </p>
                                : <p className="dark-text">Present</p>
                            }
               </span>
               <ul>
                    {active.works.map((item) => (
                        <li>{item}</li>
                    ))}
               </ul>
            </div>
        </div>
        </>
    )
}