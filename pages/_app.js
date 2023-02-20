import '@/styles/globals.css'
import Navbar from '@/comp/Navbar'
import Header from '@/comp/Header';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {

  const router = useRouter();
  const pathname = router.pathname;

  // set the background image based on the current page
  let backgroundClass = false;
  let title = "";
  
  if (pathname === '/') {
    backgroundClass = "home";
    title = "home"
  } 
  if (pathname === '/destination') {
    backgroundClass = "destination";
    title = "destination" 
  } 

  if (pathname === '/crew') {
    backgroundClass = "crew";
    title = "crew"
  } 

  if (pathname === '/technology') {
    backgroundClass = "technology"
    title = "technology" 
  } 

  return (
    <div className={`main ${backgroundClass ? `${backgroundClass}` :""}`}>
    <Header title={title}/>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  )
}
