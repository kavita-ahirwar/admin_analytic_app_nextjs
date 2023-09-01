import styles from './Sidebar.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Diamond from '../../assests/images/dashbord-img/Diamond.svg';
import Image from 'next/image';
import HomeIcon from '../../assests/images/dashbord-img/HouseLine.svg';
import CalendarIcon from '../../assests/images/dashbord-img/CalendarBlank.svg';
import ClipboardIcon from '../../assests/images/dashbord-img/ClipboardText.svg';
import FolderNotchOpenIcon from '../../assests/images/dashbord-img/FolderNotchOpen.svg';
import PuzzlePriceIcon from '../../assests/images/dashbord-img/PuzzlePiece.svg';
import UserIcon from '../../assests/images/dashbord-img/User.svg';
import NotebookIcon from '../../assests/images/dashbord-img/Notebook.svg';
import CreditcardIcon from '../../assests/images/dashbord-img/CreditCard.svg';
import LightingIcon from '../../assests/images/dashbord-img/Lightning.svg';
import QuestioncircleIcon from '../../assests/images/dashbord-img/Question.svg';
import NotebookblankIcon from '../../assests/images/dashbord-img/NoteBlank.svg';
import CardIcon from '../../assests/images/dashbord-img/Cards.svg';
import ListDashesIcon from '../../assests/images/dashbord-img/ListDashes.svg';
import SwatchesIcon from '../../assests/images/dashbord-img/Swatches.svg';
import LeafIcon from '../../assests/images/dashbord-img/Leaf.svg';
// import BookOpenIcon from '../../assests/images/dashbord-img/BookOpen.svg';
import Styles from './Sidebar.module.scss';
import Link from 'next/link';
import BookOpenIcon from '../../assests/images/dashbord-img/BookOpen.svg';
import { useState } from 'react';
import MydModalWithGrid from '../Cardetailsmodel/index';

export default function Sidebar() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [modalShow, setModalShow] = useState(false);


   return (
      <>
         <aside id="default-sidebar" className="fixed font-['Public Sans'] top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-2 overflow-y-auto bg-gray-s50 dark:bg-white-200">
               <div className='flex'>
                  <Image className='ml-3' src={Diamond} alt='' />
                  <span className='ml-3 mt-1' style={{ fontSize: '18px', fontWeight: '600' }}>Analytics</span>
               </div>
               <div className='mt-4 ml-2 text-gray-400 '>DASHBOARD</div>


               <div className="space-y-2 font-medium mt-2">
                  <div>
                     <div  className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={HomeIcon} alt='' />
                        {/* <span className="ml-3 text-sm text-gray-600" >Dashboard</span> */}
                        <Link href='' className="ml-3 no-underline text-sm text-gray-600">Dashboard</Link>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={CalendarIcon} alt='' />
                        <Link href='' className="ml-3 text-sm no-underline text-gray-600">Calander</Link>
                        {/* <Link href='/Cardetailmodel' onClick={() => setModalShow(true)} className="ml-3 text-sm text-gray-600">Modal</Link> */}
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={ClipboardIcon} alt="" />
                        {/* <select className={Styles.dropdownCss}>
                           <option> */}
                              <Link href='/kanban' className="ml-3 text-sm no-underline text-gray-600">Kanban Board</Link>
                              {/* </option> */}
                           {/* <option>Kanban Board</option>
                           <option>Create New Card </option>
                        </select> */}
                     </div>
                     {/* <Button variant="primary" >
                        Launch modal with grid
                     </Button>
                     <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> */}
                     <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={FolderNotchOpenIcon} alt='' />
                        <Link href='/Filemanager' className="ml-3 no-underline text-sm text-gray-600">File Manager</Link>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={FolderNotchOpenIcon} alt='' />
                        <Link href='/Filemanager/Sharedfile' className="ml-3 no-underline text-sm text-gray-600">Shared File</Link>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={PuzzlePriceIcon} alt='' />
                        <Link href='/Login' className="ml-3 text-sm no-underline  text-gray-600">Authentication Login</Link >
                     </div>
                  </div >
                  <div className='mt-4 ml-2 text-gray-400 '>
                     PAGES
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={UserIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Profile</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={NotebookIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Invoice</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={CreditcardIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Billing</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={LightingIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Pricing Plans</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={QuestioncircleIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">FAQs</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={NotebookblankIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Blank Page</span>
                     </div>
                  </div>
                  <div className='mt-4 ml-2 text-gray-400 '>
                     COMPONENTS
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={CardIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Card</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={ListDashesIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Table</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={SwatchesIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Form Elements</span>
                     </div>
                  </div>
                  <div>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={LeafIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600">Widgets</span>
                     </div>
                  </div>
                  <div className='mb-5'>
                     <div className="flex no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                        <Image src={BookOpenIcon} alt='' />
                        <span className="ml-3 text-sm text-gray-600 ">Documentation</span>
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      </>
   );
}