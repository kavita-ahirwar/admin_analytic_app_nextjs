import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import editBookIcon from '../../assests/images/kanban-img/EditNoteBookButton.svg'
import horizontalMenuIcon from '../../assests/images/kanban-img/HorizontalMenukButton.svg';
import Image from 'next/image';
import Styles from './Carddetail.module.scss';
import RedCircle from '../../assests/images/dashbord-img/Circle.svg';
import User1Icon from '../../assests/images/kanban-img/04.svg';
import User2Icon from '../../assests/images/kanban-img/03.svg';
import User3Icon from '../../assests/images/kanban-img/02.svg';
import User4Icon from '../../assests/images/kanban-img/01.svg';
import { Card } from 'react-bootstrap';
import whiteRightArrowIcon from '../../assests/images/kanban-img/WhiteArrowRight.svg';
import chatCircleIcon from '../../assests/images/filemanager-img/ChatCircleDots.svg';


export default function MydModalWithGrid(props: any) {

  return (
    // className={Styles.madalCss}
    <Modal size="lg" id="modal-content"  {...props} aria-labelledby="contained-modal-title-vcenter" centered className="font-['Public Sans']">
      <Modal.Header closeButton>
        <Modal.Title className='flex' id="contained-modal-title-vcenter">
          <Image className='mr-2' src={editBookIcon} alt='' />
          <Image src={horizontalMenuIcon} alt='' />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container>
          <div className="flex text-black font-bold">
            <p className='mr-5'>New Project Idea & Research</p>
            <Button className={Styles.highPrioritybtn_1} >High Priority</Button>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light mt-3">
                    <thead className="font-medium text-gray-400" style={{ textAlign: 'left' }}>
                      <tr className=" ">
                        <th scope="col" className="flex items-start">Label</th>
                        <th scope="col" className="items-start mt-1">Created date</th>
                        <th scope="col" className="items-start mt-1">Due Date</th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: 'left' }} className='text-gray-900 font-medium'>
                      <tr className="">
                        <td className="flex mr-8 ml-2 py-1 text-red-400">
                          <Image className="mr-2" src={RedCircle} alt="" />
                          Urgents
                        </td>
                        <td className='mr-9'>12 Nov, 2021 at 9:40 PM </td>
                        <td> 15 Nov, 2021 at 10:00 AM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="div mt-4">
            <h6>Description</h6>
            <p className='text-gray-600 text-sm'>In lobortis fermentum venenatis. Phasellus orci libero, feugiat et velit non, sagittis feugiat eros.
              In placerat risus vitae est faucibus, in laoreet enim rutrum. Mauris posuere vitae felis at convallis.
              Integer consequat et tellus vel tincidunt. Aenean rhoncus ligula eu risus molestie semper.</p>
          </div>

          <Card className='border-0 mt-4'>
            <h6> Members (05)</h6>
            <div className="row">
              {/* <div> */}
              <Card className="col-4 border-0 ">
                <div className="div flex text-sm">
                  <Image className=' mr-3' src={User1Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Brooklyn Simmons</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>ateniese@mac.com</p>
                  </div>
                </div>
              </Card>
              <Card className="col-4 border-0">
                <div className="div flex text-sm">
                  <Image className='ml-1 mr-3' src={User3Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Ralph Edwards</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>raines@optonline.com</p>
                  </div>
                </div>
              </Card>
              <Card className="col-4 border-0">
                <div className="div flex text-sm">
                  <Image className='ml-1 mr-3' src={User4Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Devon Lane</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>gravyface@mac.com</p>
                  </div>
                </div>
              </Card>
              <Card className="col-4 mt-2 border-0 ">
                <div className="div flex text-sm">
                  <Image className='ml-1 mr-3' src={User2Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Arlene McCoy</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>kspiteri@live.com</p>
                  </div>
                </div>
              </Card>
              <Card className="col-4 ml-2 mt-2 border-0">
                <div className="div flex text-sm">
                  <Image className='ml-1 mr-3' src={User1Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Jane Cooper</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>mthurn@optonline.com</p>
                  </div>
                </div>
              </Card>
              {/* </div> */}
            </div>
          </Card>

          <div className="comments mt-3">
            <span className='mr-10 text-gray-900 font-medium ml-3 '>Comments</span>
            <span>Attach File</span>
          </div>
          <hr className='mt-4' />
          <div className="chat-section">
            <h6>Post Comments</h6>
            <div className="div col-10 flex relative mt-3">
              <Image src={chatCircleIcon} alt='' className='absolute ml-3' style={{marginTop:'12px'}}/>
              <input type="text" id="" style={{ background: '#F0F6FF' }} className="border-gray-600 rounded-5 pl-10 text-black text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write down your questions and comments..." required />
              <div className="div col-2 relative">
                <Button className="ml-5 border-3 col-5 " style={{ width: '140px', borderRadius: '20px' }} onClick={props.onHide}>
                  Post
                </Button>
                <Image style={{marginTop:'-30px',position:'absolute',marginLeft:'115px',fontWeight:'600'}} src={whiteRightArrowIcon} alt=""/>
              </div>
            </div>
          </div>

          <div className="latest-comments mt-4">
            <h6>Latest Comments</h6>
            <Card className="col-4 ml-2 mt-2 border-0">
                <div className="div flex text-sm">
                  <Image className='ml-1 mr-3' src={User1Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Jane Cooper</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>mthurn@optonline.com</p>
                  </div>
                </div>
              </Card>
              <Card className="col-4 border-0 ml-2">
                <div className="div flex text-sm">
                  <Image className='ml-1 mr-3' src={User4Icon} alt='' />
                  <div className="div mt-3">
                    <h6>Devon Lane</h6>
                    <p className='text-gray-500' style={{ marginTop: '-5px' }}>gravyface@mac.com</p>
                  </div>
                </div>
              </Card>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
}