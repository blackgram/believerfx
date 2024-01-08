import {useState, useEffect} from 'react'
import NavbarLg from './NavbarLg'
import Navbar from './Navbar'


const Header = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isSmallScreen ? <Navbar /> : <NavbarLg /> }
    </div>
  )
}

export default Header