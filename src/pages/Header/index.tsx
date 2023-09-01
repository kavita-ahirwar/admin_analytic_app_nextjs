import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Styles from './Header.module.scss';
import Image from 'next/image';
import SearchIcon from '../../assests/images/dashbord-img/MagnifyingGlass.svg';
import usaFlagIcon from '../../assests/images/dashbord-img/Image.svg';
import fourDotIcon from '../../assests/images/dashbord-img/Icon.svg';
import notificationIcon from '../../assests/images/dashbord-img/Notification.svg';
import profileImgIcon from '../../assests/images/dashbord-img/Profile.svg';


export default function Header() {
  return (
    <>
      <div className=" px-3 sm:ml-60 h-15 font-['Public Sans']">
        <Navbar collapseOnSelect expand="lg" className="bg-body-white">
          <div className="ml-5 flex">
            <Image src={SearchIcon} alt="" className={Styles.searchIconCss} />
            <input type="text" placeholder="search" className={Styles.inputCss} />
          </div>
          <Nav className="navbar-nav ml-auto">
            <div className="flex">
              <Image src={usaFlagIcon} alt="" className={Styles.flagCss} />
              <select className={Styles.dropdownCss}>
                <option>English</option>
                <option>Chines</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="flex">
              <Image src={fourDotIcon} alt="" className="mr-4" />
              <Image src={notificationIcon} alt="" className="mr-4" />
              <Image src={profileImgIcon} alt="" className="mr-4" />
            </div>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}