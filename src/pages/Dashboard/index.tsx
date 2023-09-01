import { Card } from "react-bootstrap";
import Styles from './Dashboard.module.scss';
import upArrowIcon from '../../assests/images/dashbord-img/Arrow up.svg';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import downArrowIcon from '../../assests/images/dashbord-img/Interface/Arrow up.svg'
import Highcharts from 'highcharts';
import blueCircleIcon from '../../assests/images/dashbord-img/BlueCircle.svg';
import redCircleIcon from '../../assests/images/dashbord-img/Circle.svg';
import googleCromeIcon from '../../assests/images/dashbord-img/Google Chrome.svg';
import fireFoxIcon from '../../assests/images/dashbord-img/Firefox.svg';
import microsoftEdgeIcon from '../../assests/images/dashbord-img/Microsoft Edge.svg';
import braveIcon from '../../assests/images/dashbord-img/Brave.svg';
import safarIcon from '../../assests/images/dashbord-img/Safari.svg';
import operaIcon from '../../assests/images/dashbord-img/Opera.svg';
import barChartImg from '../../assests/images/dashbord-img/Chart (2).svg';
import lineChart1 from '../../assests/images/dashbord-img/Chart.svg';
import lineChart2 from '../../assests/images/dashbord-img/Leaving Users.svg';
import barchatImg from '../../assests/images/dashbord-img/Chart (3).svg';
import linechart3Img from '../../assests/images/dashbord-img/Chart (4).svg';
import linechart4Img from '../../assests/images/dashbord-img/Enter Users.svg';
import linechart1YDataImg from '../../assests/images/Y TO Y.svg';
import linechart1XDataImg from '../../assests/images/X TO X.svg';
import piecharImg from '../../assests/images/dashbord-img/Chart (1).svg';
import worldmapImg from '../../assests/images/World Map.svg';
import flag1Img from '../../assests/images/Flag.svg';
import flag2Img from '../../assests/images/Flag (1).svg';
import flag3Img from '../../assests/images/Flag (2).svg';
import computerIcon from '../../assests/images/dashbord-img/Icon (1).svg';
import computer1Icon from '../../assests/images/dashbord-img/Icon (2).svg';
import mobile1Icon from '../../assests/images/dashbord-img/Icon (3).svg';
import mobile2Icon from '../../assests/images/Icon4.svg';
import facebookIcon from '../../assests/images/dashbord-img/Facebook.svg';
import twiterIcon from '../../assests/images/dashbord-img/Twitter.svg';
import linkdlnIcon from '../../assests/images/dashbord-img/Linkedin.svg';
import instagramIcon from '../../assests/images/dashbord-img/Instagram.svg';
import dribbleIcon from '../../assests/images/dashbord-img/Dribbble.svg';
import behanceIcon from '../../assests/images/dashbord-img/Behance.svg';
import pinterestIcon from '../../assests/images/dashbord-img/Pinterest.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import windowIcon from '../../assests/images/dashbord-img/Vector.svg';
import macOsIcon from '../../assests/images/dashbord-img/MacOS.svg';
import iosIcon from '../../assests/images/dashbord-img/iOS.svg';
import androidIcon from '../../assests/images/dashbord-img/Android.svg';
import ubntuIcon from '../../assests/images/dashbord-img/Ubuntu.svg';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Sidebar from '../Sidebar/index';

export default function Dashboard() {
    const [value, onChange] = useState(new Date());


    // <div className="h-full px-3 py-2 overflow-y-auto bg-gray-s50 dark:bg-white-200">
    return (
        <>
            <div className="px-3 sm:ml-60 h-500 bg-body-tertiary mt-2  font-['Public Sans']">
                <div className="ml-5">
                    <h5 style={{ fontSize: '16px' }}>👋 Hey, Kevin.</h5>
                    <p className="text-gray-400 text-sm     " >Here is all your Relik analytics overview</p>
                </div>
                <div className="grid grid-cols-4 grid-row-5 gap-4 ml-5 mr-2">
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Active Visitors</p>
                                    <div className="flex align-items-right text-green-500 text-sm " style={{ marginLeft: '60px' }}>
                                        <span style={{ marginTop: '-3px' }}> <Image src={upArrowIcon} alt="" /></span>
                                        <span> 6.7% Increase</span>
                                    </div>
                                </div>
                                <p className="text-black-900 text-medium" style={{ marginTop: '-8px' }}>157,367</p>
                                <div className="chartImg mt-5">
                                    <Image src={barChartImg} alt="" />
                                </div>
                                {/* <div className="barChart">
                                    <BarChart/>
                                </div> */}
                                {/* <div>
                                    <Bar
                                        data={{
                                            labels: [
                                                "Sqli",
                                                "XSS",
                                                "XXE",
                                                "Open Redirect",
                                                "Broken Authentication"
                                            ],
                                            datasets: [
                                                {
                                                    label: "# of vulnerabilities",
                                                    data: [15, 12, 6, 7, 4],
                                                    backgroundColor: ["red", "yellow", "blue", "black", "green"],
                                                    borderColor: "orange",
                                                    borderWidth: 5
                                                },
                                                {
                                                    label: "Web Apps",
                                                    data: [20, 13, 6, 8, 9],
                                                    backgroundColor: "purple",
                                                    borderColor: "red",
                                                    borderWidth: 5
                                                }
                                            ]
                                        }}
                                        height={100}
                                        width={100}
                                        options={{
                                            maintainAspectRatio: false
                                        }}
                                    />
                                </div> */}

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Visitor per minute</p>
                                    <div className="flex align-items-right text-red-500 text-sm " style={{ marginLeft: '20px' }}>
                                        <span style={{ marginTop: '-3px' }}> <Image src={downArrowIcon} alt="" /></span>
                                        <span>13.5% Decrease</span>
                                    </div>
                                </div>
                                <p className="text-black-900 text-medium" style={{ marginTop: '-8px' }}>9,741</p>
                                <div className="barChar mt-6">
                                    <Image style={{ marginTop: '32px' }} src={linechart4Img} alt="" />
                                    <Image style={{ marginTop: '35px' }} src={lineChart2} alt="" />
                                    {/* <Bar options={option} data={data} /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mt-2 mb-3">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Conversion Rate</p>
                                    <div className="flex align-items-right text-green-500 text-sm " style={{ marginLeft: '40px' }}>
                                        <span style={{ marginTop: '-3px' }}> <Image src={upArrowIcon} alt="" /></span>
                                        <span>3.5% Increase</span>
                                    </div>
                                </div>
                                <p className="text-black-900 text-medium" style={{ marginTop: '-8px' }}>9.73%</p>
                                <div className="barChar" style={{ marginTop: '68px' }}>
                                    <Image src={barchatImg} alt="" />
                                    {/* <Bar options={option} data={data} /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mt-2">
                        <Card className={Styles.cardDiv_1}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">bounce rate</p>
                                    <div className="flex align-items-right text-green-500 text-sm " style={{ marginLeft: '60px' }}>
                                        <span style={{ marginTop: '-3px' }}> <Image src={upArrowIcon} alt="" /></span>
                                        <span> 1.1% Increase </span>
                                    </div>
                                </div>
                                <p className="text-black-900 text-medium" style={{ marginTop: '-8px' }}>81.94%</p>
                                <div className="barChar" style={{ marginTop: '46px' }}>
                                    <Image src={linechart3Img} alt="" />
                                    {/* <Bar options={option} data={data} /> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                  
{/* second row code */}

                    <div className="col-span-3 mb-3 ">
                        <Card className={Styles.secondRowCard}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">User Overview</p>
                                    <div className="align-items-end" style={{ marginLeft: '650px' }}>
                                        <select className={Styles.dropdownCss}>
                                            <option>English</option>
                                            <option>Chines</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div className="barChar">
                                    <div className="flex">
                                        <Image src={linechart1YDataImg} alt="" />
                                        <Image className={Styles.linechart1_css} src={lineChart1} alt="" />
                                    </div>
                                    <Image src={linechart1XDataImg} alt="" />
                                    {/* <Bar options={option} data={data} /> */}
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="mb-3">
                        <Card className={Styles.secondRowCard_2}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Most Visited Page</p>
                                    <div style={{ marginLeft: '30px' }}>
                                        <select className={Styles.dropdownCss}>
                                            <option>English</option>
                                            <option>Chines</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div className="barChar">
                                    {/* <Bar options={option} data={data} /> */}
                                    <Image src={piecharImg} alt="" style={{ margin: 'auto', paddingTop: '20px' }} />
                                </div>
                                <div className={Styles.tableCss}>
                                    <table className="mt-4 mb-4">
                                        <thead className="text-gray-500" style={{ fontSize: '12px' }} >
                                            <tr style={{ background: '#F5F6F7', height: '35px', marginLeft: '10px' }}>
                                                <th style={{ width: '110px', paddingRight: '25px' }} >Page name</th>
                                                <th style={{ width: '90px', paddingRight: '20px' }} >total users</th>
                                                <th style={{ width: '90px', paddingRight: '10px' }}>bounce rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-black-500" style={{ fontSize: '11px' }}>
                                            <tr className="mt-3 ">
                                                <td className="flex" ><Image className="mr-1" src={blueCircleIcon} alt="" />Request a Quote</td>
                                                <td className="ml-2">547,914</td>
                                                <td className="text-green-400">81.94%</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={redCircleIcon} alt="" />Career</td>
                                                <td>547,914</td>
                                                <td className="text-green-400">81.94%</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={blueCircleIcon} alt="" />Work</td>
                                                <td>547,914</td>
                                                <td className="text-green-400">81.94%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Third row code */}

                    <div className="mb-3 ">
                        <Card className={Styles.secondRowCard_2}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Browser Overview</p>
                                    <div style={{ marginLeft: '30px' }}>
                                        <select className={Styles.dropdownCss}>
                                            <option>English</option>
                                            <option>Chines</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-7" src={googleCromeIcon} alt="" />
                                            <h6 className="mt-2 ml-2" style={{ fontSize: '12px' }}>Google Chrome</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'center' }} className="text-gray-500">54% User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-6">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-7" src={fireFoxIcon} alt="" />
                                            <h6 className="mt-2 ml-2" style={{ fontSize: '12px', textAlign: 'center' }}>Fire Fox</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'center' }} className="text-gray-500 ml-1">23% User</p>
                                        </Card>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-7" src={microsoftEdgeIcon} alt="" />
                                            <h6 className="mt-2 ml-2" style={{ fontSize: '12px' }}>Microsoft Edge</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'center' }} className="text-gray-500">19% User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-6">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-7" src={braveIcon} alt="" />
                                            <h6 className="mt-2 ml-2" style={{ fontSize: '12px', textAlign: 'center' }}>Brave</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'center' }} className="text-gray-500 ml-1">11% User</p>
                                        </Card>
                                    </div>
                                </div>
                                <div className="row" style={{ marginBottom: '9px' }}>
                                    <div className="col-lg-6">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-7" src={safarIcon} alt="" />
                                            <h6 className="mt-2 ml-2" style={{ fontSize: '12px' }}>Apple Safari</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'center' }} className="text-gray-500">7% User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-6">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-7" src={operaIcon} alt="" />
                                            <h6 className="mt-2 ml-2" style={{ fontSize: '12px', textAlign: 'center' }}>Opera</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'center' }} className="text-gray-500 ml-1">3% User</p>
                                        </Card>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-span-2 mb-3 ml-1 ">
                        <Card className={Styles.thirdRowCard_second}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">User Location</p>
                                    <div style={{ marginLeft: '358px' }}>
                                        <select className={Styles.dropdownCss}>
                                            <option>English</option>
                                            <option>Chines</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div className={Styles.mapCss} >
                                    <Image src={worldmapImg} alt="" />
                                    {/* <Bar options={option} data={data} /> */}
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 " src={flag1Img} alt="" />
                                            <h6 className="mt-2" style={{ fontSize: '12px' }}>United State (USA)</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 " src={flag2Img} alt="" />
                                            <h6 className="mt-2 " style={{ fontSize: '12px' }}>China</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2" src={flag3Img} alt="" />
                                            <h6 className="mt-2" style={{ fontSize: '12px' }}>Russia</h6>
                                            <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className=" mb-3 ">
                        <Card className={Styles.secondRowCard_2}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Devices Overview</p>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div>
                                    <Card className="" style={{ padding: '10px', border: 'none' }}>
                                        <div className="flex">
                                            <Image className="h-16  " src={mobile2Icon} alt="" />
                                            <div className="">
                                                <h6 className="mt-2 ml-8" style={{ fontSize: '12px' }}>Computer</h6>
                                                <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ml-8">54% .5.761,723 User</p>
                                                <div className="flex text-green-500 ml-7 " style={{ fontSize: '10px', textAlign: 'start', marginTop: '-10px' }}>
                                                    <span style={{ marginTop: '-5px' }}> <Image src={upArrowIcon} alt="" /></span>
                                                    <span> 6.7% Increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="" style={{ padding: '10px', border: 'none' }}>
                                        <div className="flex">
                                            <Image className="h-16  " src={computerIcon} alt="" />
                                            <div className="">
                                                <h6 className="mt-2 ml-8" style={{ fontSize: '12px' }}>Laptop</h6>
                                                <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ml-8">54% .5.761,723 User</p>
                                                <div className="flex  text-red-500 ml-7" style={{ fontSize: '10px', textAlign: 'start', marginTop: '-10px' }}>
                                        <span style={{ marginTop: '-3px' }}> <Image src={downArrowIcon} alt="" /></span>
                                        <span>13.5% Decrease</span>
                                    </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="" style={{ padding: '10px', border: 'none' }}>
                                        <div className="flex">
                                            <Image className="h-16  " src={computer1Icon} alt="" />
                                            <div className="">
                                                <h6 className="mt-2 ml-8" style={{ fontSize: '12px' }}>Tablet</h6>
                                                <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ml-8">54% .5.761,723 User</p>
                                                <div className="flex text-green-500 ml-7 " style={{ fontSize: '10px', textAlign: 'start', marginTop: '-10px' }}>
                                                    <span style={{ marginTop: '-5px' }}> <Image src={upArrowIcon} alt="" /></span>
                                                    <span> 6.7% Increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="" style={{ padding: '10px', border: 'none' }}>
                                        <div className="flex">
                                            <Image className="h-16  " src={mobile1Icon} alt="" />
                                            <div className="">
                                                <h6 className="mt-2 ml-8" style={{ fontSize: '12px' }}>Mobile Phone</h6>
                                                <p style={{ fontSize: '10px', textAlign: 'start' }} className="text-gray-500 ml-8">54% .5.761,723 User</p>
                                                <div className="flex text-green-500 ml-7 " style={{ fontSize: '10px', textAlign: 'start', marginTop: '-10px' }}>
                                                    <span style={{ marginTop: '-5px' }}> <Image src={upArrowIcon} alt="" /></span>
                                                    <span> 6.7% Increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Fourth row code */}

                    <div className="mb-3 ">
                        <Card className={Styles.secondRowCard_2}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Social Media Traffic</p>
                                    <div style={{ marginLeft: '20px' }}>
                                        <select className={Styles.dropdownCss}>
                                            <option>English</option>
                                            <option>Chines</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div className={Styles.tableCss} style={{marginBottom:'18px'}}>
                                    <table className="table mt-4 mb-4">
                                        <thead className="text-gray-500" style={{ fontSize: '12px' }} >
                                            <tr style={{ background: '#F5F6F7', height: '35px', marginLeft: '10px' }}>
                                                <th style={{ width: '110px', paddingRight: '25px' }} >Network</th>
                                                <th style={{ width: '100px', paddingRight: '20px' }} >Visitors</th>
                                                <th style={{ width: '100px', paddingRight: '10px' }}>Followers</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-black-500 mt-3" style={{ fontSize: '11px' }}>
                                            <tr className="mt-3 ">
                                                <td className="flex" ><Image className="mr-1" src={facebookIcon} alt="" />Facebook</td>
                                                <td className="ml-2">5,761,687</td>
                                                <td className="text-green-400">68,412</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={twiterIcon} alt="" />Twitter</td>
                                                <td>698,723</td>
                                                <td className="text-green-400">3,942</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={linkdlnIcon} alt="" />Linkedin</td>
                                                <td>68,412</td>
                                                <td className="text-green-400">13,677</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={instagramIcon} alt="" />Instagram</td>
                                                <td>16,716</td>
                                                <td className="text-green-400">5,761,687</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={dribbleIcon} alt="" />Dribbble</td>
                                                <td>13,677</td>
                                                <td className="text-green-400">68,412</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={behanceIcon} alt="" />Behance</td>
                                                <td>9,717</td>
                                                <td className="text-green-400">698,723</td>
                                            </tr>
                                            <tr>
                                                <td className="flex"><Image className="mr-1" src={pinterestIcon} alt="" />Pinterest</td>
                                                <td>3,942</td>
                                                <td className="text-green-400">16,716</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className=" mb-3 ">
                        <Card className={Styles.secondRowCard_2}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Devices Overview</p>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>
                                <div className="calander" style={{marginBottom:'33px'}}>
                                    <Calendar 
                                        value={value}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-span-2 mb-3 ml-1 ">
                        <Card className={Styles.thirdRowCard_second}>
                            <Card.Body>
                                <div className="flex">
                                    <p className="text-black-600 text-sm">Operating System</p>
                                </div>
                                <hr className="Styles.hr" style={{ marginTop: '9px' }}></hr>    
                                <div className="row" style={{margin:'20px'}}>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 " src={windowIcon} alt="" style={{margin:'auto'}} />
                                            <h6 className="mt-2 text-blue-500" style={{ fontSize: '13px' }}>Computer & Laptop</h6>
                                            <p className="text-sm ml-5" style={{marginTop:'-5px'}}>Windows</p>
                                            <p style={{ fontSize: '10px', textAlign: 'start',marginTop:'-12px' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 " src={macOsIcon} alt="" style={{margin:'auto'}} />
                                            <h6 className="mt-2 text-blue-500 " style={{ fontSize: '13px' }}>Computer & Laptop</h6>
                                            <p className="text-sm ml-6" style={{marginTop:'-5px'}}>macOS</p>
                                            <p style={{ fontSize: '10px', textAlign: 'start',marginTop:'-12px' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2" src={iosIcon} alt="" style={{margin:'auto'}} />
                                            <h6 className="mt-2 text-blue-500" style={{ fontSize: '13px' }}>Mobile & Tablet</h6>
                                            <p className="text-sm ml-8" style={{marginTop:'-5px'}}>iOS</p>
                                            <p style={{ fontSize: '10px', textAlign: 'start',marginTop:'-12px' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-2 ml-4" src={androidIcon} alt="" style={{width:'62px',height:'50px'}}/>
                                            <h6 className="mt-2 text-blue-500" style={{ fontSize: '13px' }}>Mobile & Tablet</h6>
                                            <p className="text-sm ml-4" style={{marginTop:'-5px'}}>Android</p>
                                            <p style={{ fontSize: '10px', textAlign: 'start',marginTop:'-12px' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card style={{ padding: '10px', border: 'none' }}>
                                            <Image className="h-7 mt-4" src={ubntuIcon} alt="" style={{margin:'auto',height:'34px'}} />
                                            <h6 className="mt-2 text-blue-500" style={{ fontSize: '13px' }}>Computer & Laptop</h6>
                                            <p className="text-sm ml-7" style={{marginTop:'-5px'}}>Ubuntu</p>
                                            <p style={{ fontSize: '10px', textAlign: 'start',marginTop:'-12px' }} className="text-gray-500 ">54% .5.761,723 User</p>
                                        </Card>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >
         
        </>
    );
}