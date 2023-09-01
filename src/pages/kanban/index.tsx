'use client';
import { Button, Card, Form, Modal, Nav, Navbar } from "react-bootstrap";
import Image from 'next/image';
import Styles from './Kanban.module.scss';
import leftArrowIcon from '../../assests/images/kanban-img/LeftArrowIcon.svg';
import menuIcon from '../../assests/images/kanban-img/menuIcon.svg';
import CircleIcon from '../../assests/images/kanban-img/Icon.svg';
import RedCircle from '../../assests/images/dashbord-img/Circle.svg';
import attachIcon from '../../assests/images/kanban-img/Attach.svg';
import commentIcon from '../../assests/images/kanban-img/Comment.svg';
import User1Icon from '../../assests/images/kanban-img/04.svg';
import User2Icon from '../../assests/images/kanban-img/03.svg';
import User3Icon from '../../assests/images/kanban-img/02.svg';
import User4Icon from '../../assests/images/kanban-img/01.svg';
import GreenCircleIcon from '../../assests/images/kanban-img/GreenCircle.svg';
import User5Icon from '../../assests/images/kanban-img/Plus.svg';
import bgImage from '../../assests/images/kanban-img/unsplash__6rR_iP06p4.svg'
import blueCircleIcon from '../../assests/images/dashbord-img/BlueCircle.svg';
import orangeCircleIcon from '../../assests/images/kanban-img/OrangeCircle.svg';
import bgImage1Icon from '../../assests/images/kanban-img/bgImage1.svg';
import { useState } from "react";
import whiteRightArrowIcon from '../../assests/images/kanban-img/WhiteArrowRight.svg'
import MydModalWithGrid from "../Cardetailsmodel";
import CreateCardModel from "../Createcardmodel/index";
import Header from '../Header/index';
import Footer from '../Footer/index';
import Sidebar from '../Sidebar/index';


export default function Kanban() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);
    const [createcardmodalShow, setCreateCardModalShow] = useState(false);

    return (
        <>
      <Header/>
      <Sidebar/>
            <div className="px-3 sm:ml-60 h-500 bg-body-tertiary mt-2  font-['Public Sans']">
                <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                    <div className="ml-5">
                        <h2 style={{ fontSize: '18px' }}>Kanban Board</h2>
                    </div>
                    <Nav className="navbar-nav ml-auto">
                        <div className="flex">
                            <Button className="mr-5 " style={{ background: 'white', color: 'black', border: 'none', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>Share Board</Button>
                            <Button className="mr-7" style={{ borderRadius: '20px', fontSize: '14px', width: '140px' }}>+ Create Now</Button>
                        </div>
                    </Nav>
                </Navbar>
                <div className="flex ml-5 text-sm text-gray-500 " style={{ marginTop: '-10px' }}>
                    <span className="mr-2">Home </span>
                    <Image className="mr-2" src={leftArrowIcon} alt="" />
                    <span className="mr-2">Apps </span>
                    <Image className="mr-2" src={leftArrowIcon} alt="" />
                    <span className="mr-2">kanban Board </span>
                </div>

                {/* card codes start */}
                <div className="grid grid-cols-4 grid-row-5 gap-4 ml-5 mr-2">

                    {/* first card */}
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black text-sm" style={{ fontWeight: '600' }}>TO - DO</p>
                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '200px' }} src={menuIcon} alt="" />
                                </div>
                                <div className="miniCard-1">
                                    <div className="mt-2">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />14 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className="flex" style={{ marginTop: '-22px' }}>
                                                    {/* <Button className={Styles.button_css} >Medium Priority</Button> */}
                                                    <Button className="mr-5 " style={{ background: '#F0F6FF', color: 'blue', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>Medium Priority</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#D50000', fontWeight: '600' }}>
                                                        <Image src={RedCircle} alt="" className="mr-2 mb-2" />Urgents</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>Meeting with UI/UX Team to manage our  upcoming projects & task.</p>
                                                <div className="flex mt-4">
                                                    <div className="flex">
                                                        <Image src={attachIcon} alt="" className="mr-1" />
                                                        <span className="text-black-600 text-sm mr-3" style={{ marginTop: '12px' }}>5</span>
                                                        <Image src={commentIcon} alt="" className="mr-1" />
                                                        <span className="text-black-600 text-sm" style={{ marginTop: '12px' }}>19</span>
                                                    </div>
                                                    <div className="flex align-items-right text-red-500 text-sm " style={{ marginLeft: '60px' }}>
                                                        <Image src={User1Icon} alt="" />
                                                        <Image src={User2Icon} className="mt-1" style={{ marginLeft: '-20px' }} alt="" />
                                                        <Image src={User3Icon} className="mt-1" style={{ marginLeft: '-20px' }} alt="" />
                                                        <Image src={User4Icon} className="mt-1" style={{ marginLeft: '-20px' }} alt="" />
                                                    </div>
                                                </div>


                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="miniCard-2">
                                    <div className="mt-3">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />19 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className="flex" style={{ marginTop: '-22px' }}>
                                                    {/* <Button className={Styles.button_css} >Medium Priority</Button> */}
                                                    <Button className="mr-5 " style={{ background: '#F0F6FF', color: 'red', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>Medium Priority</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#0C8C4E', fontWeight: '600' }}>
                                                        <Image src={GreenCircleIcon} alt="" className="mr-2 mb-2" />Work</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>New Project Idea & UX Research</p>
                                                <div className="flex mt-4">
                                                    <div className="flex">
                                                        <Image src={attachIcon} alt="" className="mr-1" />
                                                        <span className="text-black-600 text-sm mr-3" style={{ marginTop: '12px' }}>5</span>
                                                        <Image src={commentIcon} alt="" className="mr-1" />
                                                        <span className="text-black-600 text-sm" style={{ marginTop: '12px' }}>19</span>
                                                    </div>
                                                    <div className="flex align-items-right text-red-500 text-sm " style={{ marginLeft: '60px' }}>
                                                        <Image src={User1Icon} alt="" />
                                                        <Image src={User2Icon} className="mt-1" style={{ marginLeft: '-20px' }} alt="" />
                                                        <Image src={User3Icon} className="mt-1" style={{ marginLeft: '-20px' }} alt="" />
                                                        <Image src={User4Icon} className="mt-1" style={{ marginLeft: '-20px' }} alt="" />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <Button className={Styles.btn} onClick={() => setModalShow(true)} >+ Add Card Details</Button>
                                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                            </Card.Body>
                        </Card>
                    </div>

                    {/* second card */}
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black text-sm" style={{ fontWeight: '600' }}>Doing</p>
                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '200px' }} src={menuIcon} alt="" />
                                </div>
                                <div className="miniCard-1 ">
                                    <div className="mt-2">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />19 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Image style={{ width: '240px', margin: 'auto' }} src={bgImage} alt="" />
                                            <Card.Body>
                                                <div className="flex" >
                                                    {/* <Button className={Styles.button_css} >Medium Priority</Button> */}
                                                    <Button className="mr-5 " style={{ background: '#FFF4E6', color: '#FF9500', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '600', paddingTop: '3px' }}>Not Inportant</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#0E78D9', fontWeight: '600' }}>
                                                        <Image src={blueCircleIcon} alt="" className="mr-2 mb-1" />Personal</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>Buy Green Plants for my Desk.</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="miniCard-2 ">
                                    <div className="mt-3">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />19 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className="flex" style={{ marginTop: '-20px' }} >
                                                    <Button className="mr-5 " style={{ background: '#FDEDED', color: '#E84646', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '600', paddingTop: '3px' }}>High Priority</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#0E78D9', fontWeight: '600' }}>
                                                        <Image src={blueCircleIcon} alt="" className="mr-2 mb-1" />Personal</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>Buy Flowers for my love</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="miniCard-3">
                                    <div className="mt-3">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />19 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className="flex" style={{ marginTop: '-20px' }} >
                                                    <Button className="mr-5 " style={{ background: '#F0F6FF', color: '#005CE8', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '600', paddingTop: '3px' }}>High Priority</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#FF9904', fontWeight: '600' }}>
                                                        <Image src={orangeCircleIcon} alt="" className="mr-2 mb-1" />Productivity</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>Learn how to work with kanban board.</p>
                                                <div className="flex mt-4">
                                                    <div className="flex">
                                                        <Image src={User1Icon} alt="" />
                                                        <Image src={User2Icon} style={{ marginLeft: '-20px' }} alt="" />
                                                        <Image src={User3Icon} style={{ marginLeft: '-20px' }} alt="" />
                                                        <Image src={User4Icon} style={{ marginLeft: '-20px' }} alt="" />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <Button className={Styles.btn} onClick={() => setCreateCardModalShow(true)} >+ Add New Card</Button>
                                {/* <Button className={Styles.btn} onClick={() => setCreateCardModalShow(true)} >+ Add New Card</Button>
                                <CreateCardModel show={modalShow} onHide={() => setModalShow(false)} /> */}
                                 <CreateCardModel show={createcardmodalShow} onHide={() => setCreateCardModalShow(false)} />
                            </Card.Body>
                        </Card>
                    </div>

                    {/* third card */}
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black text-sm" style={{ fontWeight: '600' }}>Done</p>
                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '200px' }} src={menuIcon} alt="" />
                                </div>
                                <div className="miniCard-1">
                                    <div className="mt-2">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />19 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className="flex" style={{ marginTop: '-22px' }}>
                                                    {/* <Button className={Styles.button_css} >Medium Priority</Button> */}
                                                    <Button className="mr-5 " style={{ background: '#F0F6FF', color: 'blue', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>Medium Priority</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#0C8C4E', fontWeight: '600' }}>
                                                        <Image src={GreenCircleIcon} alt="" className="mr-2 mb-2" />Productivity</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>Learn how to work with kanban board.</p>
                                                <div className="flex mt-4">
                                                    <div className="flex">
                                                        <Image src={attachIcon} alt="" className="mr-1" />
                                                        <span className="text-black-600 text-sm mr-3" >5</span>
                                                        <Image src={commentIcon} alt="" className="mr-1" />
                                                        <span className="text-black-600 text-sm">19</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="miniCard-2 ">
                                    <div className="mt-2">
                                        <Card className="shadow-lg" style={{ border: 'none' }}>
                                            <Card.Title>
                                                <div className="flex mt-3">
                                                    <p className="flex text-black text-sm" style={{ fontWeight: '600' }}>
                                                        <Image src={CircleIcon} alt="" className="ml-2 mr-2" />19 Nov, 2021</p>
                                                    <Image className="" style={{ marginTop: '-15px', marginLeft: '130px' }} src={menuIcon} alt="" />
                                                </div>
                                            </Card.Title>
                                            <Image style={{ width: '240px', margin: 'auto' }} src={bgImage1Icon} alt="" />
                                            <Card.Body>
                                                <div className="flex" >
                                                    <Button className="mr-5 " style={{ background: '#FDEDED', color: '#E84646', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '600', paddingTop: '3px' }}>High Priority</Button>
                                                    <span className="flex text-sm mt-1 " style={{ color: '#D50000', fontWeight: '600' }}>
                                                        <Image src={RedCircle} alt="" className="mr-2 mb-1" />Urgents</span>
                                                </div>
                                                <p className="text-black mt-3" style={{ fontSize: '13px', fontWeight: '600' }}>Team Meeting at 9:50 PM</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <Button className={Styles.btn} >+ Add New Card</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* fourth card */}
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <Button className={Styles.btnnOneCss} onClick={handleShow}>+ Add New Column</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                {/*Create New column model code */}
               <div className="modal">
               <Modal  aria-labelledby="contained-modal-title-vcenter"
                    centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-sm">Create New Column</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {/* <div className="grid gap-6 mb-6 md:grid-cols-2"> */}
                            {/* <div className="px-4 py-3">
                                <label htmlFor="large-input" className="block mb-2 font-big text-black " style={{ color: '#191B1C', fontSize: '20px' }}>Title</label>
                                <input type="text" id="" style={{ background: '#F0F6FF' }} className="border-gray-600 text-black text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add label tittle" required />
                            </div> */}
                            <div className=" py-3 px-4 col-12">
                            <Form.Label className='mb-2 font-big text-black'>Tittle</Form.Label>
                            <Form.Control type="email" placeholder="Add tittle" autoFocus/>
                        </div>
                        </form>
                        <div className="button_div flex mt-3 mb-3 ">
                            <Button className="mr-20 border-3 ml-7 w-25 font-bold" onClick={handleClose} style={{ background: '#F5F6F7',color: '#191B1C',border:'none',borderRadius:'20px'}}>
                              Cancel
                            </Button>
                            <Button className="ml-7border-3 " style={{width:'190px',position:'relative',borderRadius:'20px'}}  onClick={handleClose}>
                                Save Changes
                            </Button>
                            <Image style={{marginTop:'10px',position:'absolute',marginLeft:'380px',fontWeight:'600'}} src={whiteRightArrowIcon} alt=""/>
                        </div>
                    </Modal.Body>
                </Modal>
               </div>
               {/* Card details page model code */}
            </div>
            <Footer/>
        </>
    );
}