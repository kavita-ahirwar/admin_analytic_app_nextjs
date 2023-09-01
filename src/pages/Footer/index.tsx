import { Container } from "react-bootstrap";
import { Col, Nav, Row } from "react-bootstrap";
import Image from 'next/image';
import Link from "next/link";
import profileImgIcon from '../../assests/images/dashbord-img/Profile.svg';

export default function Footer() {
    return (
        <>
            <div className="px-3 sm:ml-60 h-15">
                <footer>
                    <Container>
                        <Row className="d-flex align-items-center">
                            <Col className="mt-3" md={6}>
                                <p className="text-gray-600 text-medium font-['Public Sans']">© 2021 -  Analytix dashboard. Design & develop by <span className="text-blue-600">Templatecookie</span></p>
                            </Col>
                            <Col md={6}>
                                <Nav className="justify-content-end mt-3 ">
                                    <div className="text-gray-600 text-medium font-['Public Sans']">
                                        <ul className="flex ">
                                            <li className="">Documentation</li>
                                            <li className="list-disc ml-7">Privacy Policy</li>
                                            <li className="list-disc ml-7">FAQs</li>
                                        </ul>
                                    </div>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    );
}