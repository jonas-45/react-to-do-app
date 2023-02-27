import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  const clickHandler = () => {
    setDropdown((dropdown) => !dropdown);
  }

  useEffect(() => {
    
    const handler = (e) => {
      //console.log('Target:'. e.target);
      console.log('REF:'. ref);
      if(dropdown && ref.current && !ref.current.constains(e.targer)){
        setDropdown(false);
      }
    }

    document.addEventListener('mousedown',handler);
  }, [dropdown])
  return (
    <nav className="nav-wrapper">
      <ul className="list-container">
        <li>Home</li>
        <li>About</li>
        <li className="drop">
          <button onClick={clickHandler}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul className="drop-menu">
            <li>Design</li>
            <li>Development</li>
          </ul>
          )}
          
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;