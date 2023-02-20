import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import data from '../data/data.json'

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedTabs, setSelectedTabs] = useState(null);

    const destinations = data.destinations

   useEffect(()=>{
    const destination = destinations.find(d => d.name === "Moon");
    setSelectedDestination(destination)

   },[])


   useEffect(() => {
    if (selectedDestination) {
      const index = destinations.indexOf(selectedDestination);
      setSelectedTabs(index);
    }
  }, [selectedDestination]);

    const handleDestination = (e, index) =>{
        const name = e.target.innerHTML;
        const destination = destinations.find(d => d.name === name);
        setSelectedTabs(index)
        setSelectedDestination(destination)

    }   

    return ( 
<>
<div className='grid-container grid-container--destination flow'>
<h1 className='numbered-titles'><span aria-hidden="true">01</span> Pick your destination</h1>


<Image src={selectedDestination ? selectedDestination.images.png :""} alt=""
width={0}
height={0}
sizes={"100vw"}
style={{ width: '100%', height: 'auto' }}
/>

<div className='tab-list underline-indicators flex'>
{
    destinations.map((destination,index)=>(
    <button aria-selected={index === selectedTabs ? "true" : "false"} 
    className='uppercase text-accent ff-sans-cond letter-spacing-2'
    key={index} onClick={(e)=>handleDestination(e,index)}>{destination.name}</button>
    ))
}
</div>


<article className='destination-info flow'>
<h2 className='fs-800 ff-serif uppercase'>{selectedDestination ? selectedDestination.name :""}</h2>

<p>{selectedDestination ? selectedDestination.description :""}</p>

<div className='destination-meta flex'>
    <div>
    <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
    <p className='fs-500 ff-serif uppercase'>{selectedDestination ? selectedDestination.distance :""}</p>
    </div>

    <div>
    <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
    <p className='fs-500 ff-serif uppercase'>{selectedDestination ? selectedDestination.travel :""}</p>
    </div>
</div>

</article>

</div>
</>
     );
}
 
export default Destination;