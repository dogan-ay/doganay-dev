import { useState } from "react";
import { format, parseISO } from 'date-fns'
import Link from "next/link";


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
                            <li className={`${work.company == active.company ? 'active-work' : ''}`} 
                            onClick={() =>( setActive(work))}
                            ><p className="dark-text">{work.company}</p></li>
                        ))
                    }
                </ul>
                
            </div>
            
            <div className="work-details">
                <h2>{active.title} <Link href="/">@ {active.company}</Link></h2>
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