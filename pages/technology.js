import Image from 'next/image'
import { useState,useEffect } from 'react'
import data from '../data/data.json'

const Technology = () => {
    const [selectedTechnology, setSelectedTechnology] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);
    
    const listTechnologies = data.technology

    useEffect(()=>{
        const listTechnologie = listTechnologies.find(d => d.name === "Launch vehicle");
        setSelectedTechnology(listTechnologie)
       },[])

       useEffect(() => {
        if (selectedTechnology) {
          const index = listTechnologies.indexOf(selectedTechnology);
          setSelectedButton(index);
        }
      }, [selectedTechnology]);



        const handlelistTechnology= (technologyName,index) =>{
        const tech = technologyName;
        const listTechnology = listTechnologies.find(d => d.name === tech);
        setSelectedTechnology(listTechnology)
        setSelectedButton(index)
     }   
  
    return (   
    
<div className="grid-container grid-container--technology flow">
<h1 className='numbered-titles uppercase'><span aria-hidden="true">01</span> space launch 101 </h1> 

<div className='technology-info flex'>
<div className="num-indicators flex-column">
{
    listTechnologies.map((listTechnology,index)=>(
    <button aria-selected={index===selectedButton ? "true" : "false"} key={index} 
    onClick={() => handlelistTechnology(listTechnology.name,index)}>{index}</button>
    ))
}
     
</div>   
<article className='flow'>
  <header className='flow flow--space-small'>
  <h2 className='fs-400 ff-serif uppercase'>the technology...</h2>
  <p className='fs-700 ff-serif uppercase'>{selectedTechnology? selectedTechnology.name :"" }</p>
  </header>
<p>{selectedTechnology? selectedTechnology.description :"" }</p>
</article>
</div>


   <picture>
    <source media="(min-width:45rem)" srcSet={selectedTechnology ? selectedTechnology.images.portrait: ""}/>
    <source media="(max-width:45rem)" srcSet={selectedTechnology ? selectedTechnology.images.landscape: ""}/>
    <img src="" alt="" />
  </picture>

</div>

);
}
 
export default Technology;