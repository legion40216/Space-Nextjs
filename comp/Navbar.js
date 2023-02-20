import { useState,useEffect } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [linkActive, setlinkActive] = useState(null)
    const router = useRouter();
    const pathname = router.pathname;
    
    useEffect(()=>{
      setlinkActive(pathname)
    },[pathname])
   
    return ( 
    <header className='primary-header flex align-item-center'>
    <div>
      <img src="/assets/shared/logo.svg" alt="space tourism logo" className="logo" />
    </div>
    <button className='mobile-nav-toggle' aria-controls='primary-navigation'
     onClick={()=>{setToggleMenu(!toggleMenu)}}
     data-visible={toggleMenu}>
    <span className='sr-only' aria-expanded={toggleMenu}>Menu</span>
    </button>
    <nav>
       <ul id='primary-navigation'
       className="primary-navigation ff-sans-cond letter-spacing-2 underline-indicators flex"
       data-visible={toggleMenu}>
          <li className={`${linkActive==="/" ? "active" : "" }`}>
            <Link href="/"><span>00</span>Home</Link></li>
          <li className={`${linkActive==="/destination" ? "active" : "" }`}>
            <Link href="destination"><span>01</span>Destination</Link></li>
          <li className={`${linkActive==="/crew" ? "active" : "" }`}>
            <Link href="crew"><span>02</span>Crew</Link></li>
          <li className={`${linkActive==="/technology" ? "active" : "" }`}>
            <Link href="technology"><span>03</span>Technology</Link></li>
        </ul>
    </nav>
    </header>);
}
 
export default Navbar;