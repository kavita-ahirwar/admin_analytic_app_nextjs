'use client';
import { Button, Card, Container, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './Login.module.scss';
import Image from 'next/image';
import bgImg from '../../assests/images/login-img/Photo.svg';
import eyeImg from '../../assests/images/login-img/Eye.svg';
import whiteRightArrowIcon from '../../assests/images/kanban-img/WhiteArrowRight.svg';
import googleImg from '../../assests/images/login-img/Google.svg';
import facebookImg from '../../assests/images/login-img/Facebook.svg';
import appleImg from '../../assests/images/login-img/Apple.svg';
import Link from "next/link";

export default function Login() {
    return (
        <>
            <div className="px-3 sm:ml-60 h-500 bg-body-tertiary mt-10  font-['Public Sans']">
                <div className="grid grid-cols-1 grid-row-5 gap-4 ml-14 mr-2">

                    {/* first card */}
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1} >
                            <Card.Body>
                                <div className="row">
                                    <div className=" col-7 img">
                                        <Image className={Styles.bg_img_css} src={bgImg} alt='' />
                                    </div>
                                    <div className="col-5" style={{marginLeft:'-40px'}}>
                                        <div className={Styles.login_content}>
                                            <h1 className="text-center mt-2">Login to your account</h1>
                                            <div>
                                                <form>
                                                    <div className=" py-2 col-12 mt-3">
                                                        <Form.Label className='mb-2 font-big text-black font-medium'>Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Email address" autoFocus />
                                                    </div>
                                                    <div className=" py-2 col-12 relative ">
                                                        <Form.Label className='mb-2 font-big text-black font-medium'>Password</Form.Label>
                                                        <span className="">Forget Password</span>
                                                        <Form.Control type="password" placeholder="Password" autoFocus className=""/>
                                                        <Image src={eyeImg} alt="" className={Styles.eye}/>
                                                    </div>
                                                    <div className="col-12 mt-4 relative">
                                                        <Button className="" variant="primary">Login</Button>
                                                       {/* <Image src={whiteRightArrowIcon} alt=""/> */}
                                                    </div>
                                                    <div className=" flex mt-4">
                                                       <hr className="w-24 "/>
                                                       <p className="ml-1 ">OR Login with/ 
                                                       <Link href='/Signup' className=" text-sm no-underline text-blue-600">Sign up</Link >
                                                       </p>
                                                       <hr  className="w-24" style={{marginLeft:'3px'}}/>
                                                    </div>
                                                    <div className="flex mt-4">
                                                   <div className="div flex relative">
                                                   <Image src={googleImg} alt="" className="ml-2 mt-2 absolute"/>
                                                   <Button style={{width:'120px',background:'#F0F6FF',color:'#191B1C',border:'none',borderRadius:'5px'}} >Google</Button>
                                                   </div>
                                                   <div className="div flex relative ml-3">
                                                   <Image src={appleImg} alt="" className="ml-2 mt-2 absolute"/>
                                                   <Button style={{width:'120px',background:'#F0F6FF',color:'#191B1C',border:'none',borderRadius:'5px'}} >Apple</Button>
                                                   </div>
                                
                                                   <div className="div flex relative ml-3">
                                                   <Image  src={facebookImg} alt="" className="ml-2 mt-2 absolute"/>
                                                   <Button style={{width:'120px',background:'#F0F6FF',color:'#191B1C',border:'none',borderRadius:'5px'}} >Facebook</Button>
                                                   </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}