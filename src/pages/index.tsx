import Image from 'next/image'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Link from 'next/link';
import Kanban from './kanban';
import Modal from '../pages/Modal/index';
import Filemanager from './Filemanager';
import SharedFile from './Filemanager/Sharedfile/index';
import Login from './Login/index';
import Signup from './Signup/index';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
      {/* <Modal /> */}
     {/* <Filemanager/> */}
     {/* <SharedFile/> */}
      {/* <Kanban/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Footer />
    </>
  )
}
