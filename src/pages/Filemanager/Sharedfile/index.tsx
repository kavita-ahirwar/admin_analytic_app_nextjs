// export default function SharedFile(){
//     return(
//         <>

//         </>
//     );
// }

import { Button, Card, Container, Modal, Nav, Navbar } from "react-bootstrap";
import leftArrowIcon from '../../../assests/images/kanban-img/LeftArrowIcon.svg';
import Image from 'next/image';
import Styles from './Shared.module.scss';
import '../Filemanager.module.scss'
import blueFileTextIcon from '../../../assests/images/kanban-img/BlueFileTextIcon.svg';
import GoogleDriveIcon from '../../../assests/images/kanban-img/Google Drive.svg';
import dropBoxIcon from '../../../assests/images/kanban-img/Dropbox.svg';
import gmailIcon from '../../../assests/images/kanban-img/GmailLogo.svg';
import sharedIcon from '../../../assests/images/kanban-img/ShareNetwork.svg';
import clockIcon from '../../../assests/images/kanban-img/Clock.svg';
import deleteIcon from '../../../assests/images/kanban-img/Trash.svg';
import starIcon from '../../../assests/images/kanban-img/Star.svg';
import folderOpenIcon from '../../../assests/images/kanban-img/Folder-open.svg';
import folderOpen1Icon from '../../../assests/images/kanban-img/FolderOpen1.svg';
import gallaryImgIcon from '../../../assests/images/kanban-img/GalleryImage.svg';
import youtubeImgIcon from '../../../assests/images/kanban-img/YoutubeLogo.svg';
import videoImgIcon from '../../../assests/images/kanban-img/MusicNotesSimple.svg';
import floppyDiskIcon from '../../../assests/images/kanban-img/FloppyDisk.svg';
import folderSimpleIcon from '../../../assests/images/kanban-img/FolderSimple.svg';
import menuStandIcon from '../../../assests/images/kanban-img/Other 2.svg';
import textFileIcon from '../../../assests/images/filemanager-img/Document.svg';
import fillstarIcon from '../../../assests/images/filemanager-img/fill-star.svg';
import { useState } from "react";
import cloudImgIcon from '../../../assests/images/kanban-img/CloudImg.svg';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import Sidebar from '../../Sidebar/index';


export default function SharedFile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Header/>
        <Sidebar/>
            <div className="px-3 sm:ml-60 h-500 bg-body-tertiary mt-2 mb-3 font-['Public Sans'] ">
                <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                    <div className="ml-5 mt-2">
                        <h2 style={{ fontSize: '18px' }}>File Manager</h2>
                    </div>
                </Navbar>
                <div className="flex ml-5 text-sm text-gray-500 " style={{ marginTop: '-10px' }}>
                    <span className="mr-2">Home </span>
                    <Image className="mr-2" src={leftArrowIcon} alt="" />
                    <span className="mr-2">Apps </span>
                    <Image className="mr-2" src={leftArrowIcon} alt="" />
                    <span className="mr-2">File Manager </span>
                </div>

                {/*First card start */}
                <div className="grid px-4 grid-cols-4 grid-row-5 gap-4 ml-5 mr-2">

                    {/* first card */}
                    <div className="mt-4">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <Button className={Styles.addNewCard_btn} onClick={handleShow} style={{borderRadius:'20px',marginTop:'5px'}}>+ Upload File</Button>

                                <div className="flex mt-3 no-underline items-center p-2 text-green-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-blue-50 Blue-700 group">
                                    <Image src={blueFileTextIcon} alt="" />
                                    <select className={Styles.dropdownCss}>
                                        <option className="ml-3">
                                            All Files</option>
                                        <option>Kanban Board</option>
                                        <option>Create New Card </option>
                                    </select>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '15px' }}></hr>
                                <Card className="div-1 px-2 border-0 ">
                                    <p className="text-gray-400">CONNECTED APPS</p>
                                    <div className="div flex">
                                        <Image className="mr-2" src={GoogleDriveIcon} alt="" />
                                        <span>Google Drive</span>
                                    </div>
                                    <div className="div flex mt-4">
                                        <Image className="mr-2" src={dropBoxIcon} alt="" />
                                        <span>Dropbox</span>
                                    </div>
                                    <div className="div flex mt-4">
                                        <Image className="mr-2" src={gmailIcon} alt="" />
                                        <span>Mega</span>
                                    </div>
                                </Card>
                                <hr className="Styles.hr" style={{ marginTop: '25px' }}></hr>
                                <Card className="div-1 px-2 text-medium mt-4 text-gray-600 border-0">
                                    <div className="div flex">
                                        <Image className="mr-2" src={sharedIcon} alt="" />
                                        <span>Shared File</span>
                                    </div>
                                    <div className="div flex mt-4">
                                        <Image className="mr-2" src={clockIcon} alt="" />
                                        <span>Recents Files</span>
                                    </div>
                                    <div className="div flex mt-4">
                                        <Image className="mr-2" src={starIcon} alt="" />
                                        <span>Starred</span>
                                    </div>
                                    <div className="div flex mt-4">
                                        <Image className="mr-2" src={deleteIcon} alt="" />
                                        <span>Deleted</span>
                                    </div>
                                </Card>
                                <hr className="Styles.hr" style={{ marginTop: '80px' }}></hr>
                                <Card className="border-0" >
                                    <div className="div flex mt-3">
                                        <Image className="mr-3" src={blueFileTextIcon} alt="" />
                                        <Card.Title className="mt-1">Total Storage</Card.Title>
                                    </div>
                                    <div className="w-medium ml-8 mt-2 bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-white-700">
                                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                                    </div>
                                    <p className="text-gray-400 ml-8 text-sm font-medium">3.71 GB of 15 GB available</p>
                                    <div className="bg-yellow-300 rounded-2 px-3" style={{ height: '165px' }} >
                                        <div className="row flex mt-4 ">
                                            <div className="col-4 px-4">
                                                <Image src={folderOpenIcon} alt="" />
                                            </div>
                                            <div className="col-8" style={{ fontSize: '18px' }}>
                                                <p>Become a <span className="font-medium">Pro</span></p>
                                                <p style={{ marginTop: '-17px' }} >to get more<span className="font-medium"> Space</span></p>
                                                <button className="bg-white mt-1 p-2 px-3 rounded-5 font-medium">Upgrade Plans</button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Second card */}
                    <div className="col-span-3 ">

                        {/* second card */}
                        <Card className={Styles.cardDiv_2}>
                            <p className="mt-3 font-medium ">Shared Files</p>
                        </Card>

                        {/* third card */}
                        <div className="flex">
                            <p className={Styles.name_col}>Name</p>
                            <p className={Styles.type_col}>Type</p>
                            <p className={Styles.size_col}>Size</p>
                            <p className={Styles.date_col}>Date Added</p>
                        </div>
                        <Card className={Styles.cardDiv_3}>
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full text-center text-sm font-light mt-3">
                                                <thead className="font-medium">
                                                    <tr className=" ">
                                                        <th scope="col" className=" "></th>
                                                        <th scope="col" className="flex items-start"></th>
                                                        <th scope="col" className=""></th>
                                                        <th scope="col" className=""></th>
                                                        <th scope="col" className=""></th>
                                                        <th scope="col" className=""></th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="">
                                                        <td className="">
                                                            <Image className="" src={starIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={textFileIcon} alt="" />
                                                            File name
                                                        </td>
                                                        <td >Zip File</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM

                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={starIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={textFileIcon} alt="" />
                                                            File name
                                                        </td>
                                                        <td >Zip File</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={fillstarIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={textFileIcon} alt="" />
                                                            File name
                                                        </td>
                                                        <td >Compressed</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={starIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={folderSimpleIcon} alt="" />
                                                            Templatecookie - Themeforest Templates
                                                        </td>
                                                        <td >Zip File</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={starIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={textFileIcon} alt="" />
                                                            Designerzafor.
                                                        </td>
                                                        <td >Compressed</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={fillstarIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={textFileIcon} alt="" />
                                                            Echotemplate Logo v1.0
                                                        </td>
                                                        <td >Zip File</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={fillstarIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={textFileIcon} alt="" />
                                                            Designerzafor.
                                                        </td>
                                                        <td >PDF file</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>
                                                    <hr style={{ color: 'white' }} />
                                                    <tr>
                                                        <td className="">
                                                            <Image className="" src={starIcon} alt="" />
                                                        </td>
                                                        <td className="flex items-start mt-1">
                                                            <Image className="mr-2" src={folderSimpleIcon} alt="" />
                                                            Designerzafor.
                                                        </td>
                                                        <td >Zip File</td>
                                                        <td  >512 MB</td>
                                                        <td >24 May, 2020 at 5:30 PM
                                                        </td>
                                                        <td> <Image className="" src={menuStandIcon} alt="" /></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                 {/* upload file model */}

                 <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <div className="div m-auto mt-5">
                        <Image src={cloudImgIcon} alt='' />
                    </div>
                    <div className="content m-auto mt-2 mb-5">
                        <p className={Styles.model_upload_folder}>Upload new file or folder</p>
                        <p className={Styles.model_drag_drop}>Drag an drop a file or
                            <span className="text-blue-600 ml-1">browse file</span>
                        </p>
                    </div>
                </Modal>
            </div>
            <Footer/>
        </>
    );
}