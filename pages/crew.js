import Image from 'next/image'
import { useState,useEffect } from 'react'
import data from '../data/data.json'

const Crew = () => {
    const [selectedCrew, setSelectedCrew] = useState(null);
    const [selectedDot, setSelectedDot] = useState(null);
    
    const crewMembers = data.crew

    useEffect(()=>{
        const crewMember = crewMembers.find(d => d.role === "Commander");
        setSelectedCrew(crewMember)
       },[])
    

       useEffect(() => {
        if (selectedCrew) {
          const index = crewMembers.indexOf(selectedCrew);
          setSelectedDot(index);
        }
      }, [selectedCrew]);

        const handleCrewMember= (e,index) =>{
        const role = e.target.innerText;
        const crewMember = crewMembers.find(d => d.role === role);
        setSelectedCrew(crewMember)
        setSelectedDot(index)
     }   

    return (   
    
<div className="grid-container grid-container--crew flow">
<h1 className='numbered-titles'><span aria-hidden="true">01</span> Pick your destination</h1> 


<article className='crew-info flow'>
  <header className='flow flow--space-small'>
  <h2 className='fs-500 ff-serif uppercase'>{selectedCrew? selectedCrew.role :"" }</h2>
  <p className='fs-700 ff-serif uppercase'>{selectedCrew? selectedCrew.name :"" }</p>
  </header>
<p>{selectedCrew? selectedCrew.bio :"" }</p>
</article>

<div className="dot-indicators flex">
{
    crewMembers.map((crewMember,index)=>(
    <button aria-selected={index===selectedDot ? "true" : "false"}  key={index}  
     onClick={(e) => handleCrewMember(e,index)}>
    <span className="sr-only">{crewMember.role}</span>
    </button> 
    ))
}
</div>

   
<Image src={selectedCrew ? selectedCrew.images.png :""} alt=""
width={0}
height={0}
sizes={"100vw"}
style={{ width: '100%', height: 'auto' }}
/>
</div>

);
}
 
export default Crew;