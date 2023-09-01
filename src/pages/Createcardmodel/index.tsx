import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import editBookIcon from '../../assests/images/kanban-img/EditNoteBookButton.svg'
import horizontalMenuIcon from '../../assests/images/kanban-img/HorizontalMenukButton.svg';
import Image from 'next/image';
import Styles from './Creatcardmodel.module.scss'
import { Dropdown, Form } from 'react-bootstrap';
import RedCircle from '../../assests/images/dashbord-img/Circle.svg';
import whiteRightArrowIcon from '../../assests/images/kanban-img/WhiteArrowRight.svg';


export default function CreateCardModel(props: any) {

    return (
        // className={Styles.madalCss}
        <Modal id="modal-content"  {...props} aria-labelledby="contained-modal-title-vcenter" centered className="font-['Public Sans']">
            <Modal.Header closeButton>
                <Modal.Title className='mt-2 ml-2' style={{ fontSize: '18px' }} id="contained-modal-title-vcenter">
                    <p>Create New Card</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Container>
                    <div className="row">
                        <div className=" py-2 col-12">
                            <Form.Label className='mb-2 font-big text-black'>Tittle</Form.Label>
                            <Form.Control type="email" placeholder="Add tittle" autoFocus/>
                        </div>
                       
                        <div className="col-6 mt-2">
                            <label htmlFor="large-input" className="block mb-1 font-big text-black " style={{ color: '#191B1C', fontSize: '16px' }}>Priority</label>
                            <div className="no-underline relative items-center p-2 text-green-900 rounded-lg dark:text-black  Blue-700 group">
                                <select className={Styles.dropdownCss}>
                                    <option>
                                        High Priority</option>
                                    <option>Kanban Board</option>
                                    <option>Create New Card </option>
                                </select>
                                <Form.Control type="email" placeholder="" autoFocus className={Styles.input_css}/>
                            </div>
                            {/* <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                High Priority
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </div>
                        <div className="col-6 mt-2">
                            <label htmlFor="large-input" className="block mb-2 font-big text-black " style={{ color: '#191B1C', fontSize: '16px' }}>Label</label>
                            <div className="no-underline relative items-center p-2 text-green-900 rounded-lg dark:text-black  Blue-700 group">
                                <div className={Styles.urgent_dropdown_css}>
                                    <Image src={RedCircle} alt='' className={Styles.redImg_css} />
                                    <select>
                                        <option>
                                            Urgents</option>
                                        <option>Kanban Board</option>
                                        <option>Create New Card </option>
                                    </select>
                                </div>
                                <Form.Control type="email" placeholder="" autoFocus className={Styles.input_css}/>         
                            </div>
                        </div>

                        <div className="col-6 mt-2">
                        <label htmlFor="large-input" className="block mb-2 font-big text-black " style={{ color: '#191B1C', fontSize: '16px' }}>Created Date</label>
                            <Form.Control type="date" placeholder="DD/MM/YY" autoFocus/>
                        </div>

                        <div className="col-6 mt-2">
                        <label htmlFor="large-input" className="block mb-2 font-big text-black " style={{ color: '#191B1C', fontSize: '16px' }}>Due Date</label>
                            <Form.Control type="date" placeholder="15 Nov, 2021" autoFocus/>
                        </div>

                        <div className="col-12 mt-3">
                        <label htmlFor="large-input" className="block mb-2 font-big text-black " style={{ color: '#191B1C', fontSize: '16px' }}>Add Member</label>
                            <Form.Control type="text" placeholder="Member email address" autoFocus/>
                        </div>
                    </div>

                    <div className="button_div flex mt-4 mb-3 ">
                            <Button className="mr-20 border-3  w-25 font-bold"  onClick={props.onHide} style={{ background: '#F5F6F7',color: '#191B1C',border:'none',borderRadius:'20px'}}>
                              Cancel
                            </Button>
                            <Button className="ml-20 border-3 " style={{width:'160px',position:'relative',borderRadius:'20px'}} onClick={props.onHide}>
                                Save Changes
                            </Button>
                            <Image style={{marginTop:'10px',position:'absolute',marginLeft:'403px',fontWeight:'600'}} src={whiteRightArrowIcon} alt=""/>
                        </div>
                </Container>

            </Modal.Body>
        </Modal>
    );
}