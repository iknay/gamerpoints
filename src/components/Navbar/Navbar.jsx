import React, {useState}from 'react';
import './navbar.css';
import logo from '../../assets/Group.svg';
import arrowdown from '../../assets/Vector.svg';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu = () => (
  <>
  <p><a href='#about'>About</a></p>
  <p><a href='#career'>Career</a></p>
  <p><a href='#more'>More <img className='more-btn' src={arrowdown} alt='arrowdown'/></a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gp__navbar'>
      <div className="gp__navbar-links">
        <div className="gp__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="gp__navbar-links_container">
          <Menu/>
          
        </div>
      </div>
      <div className="gp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="gp__navbar-menu_container scale-up-center">
            <div className="gp__navbar-menu_container-link">
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar