import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Button, Card, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Rotate";
import { Link } from "react-router-dom";
import service from "../../../images/gear-icon.png";
import spinner from "../../../images/loading.gif";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";

const OurServices = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		axios
			.get("https://moto-repair-server.herokuapp.com/all-services")
			.then((res) => {
				setServices(res.data);
			})
			.catch((error) => toast.error(error.message));
	}, []);

	return (
		<section className="services" id="service">
			<Container>
				<h5>What We Do</h5>
				<h3>Services We Provide</h3>
				<Col lg={4} md={6} className="mt-5">
					<motion.div
						drag
						dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
						dragElastic={0.5}
					>
						<Card className="border-0 p-3 container card-container ">
							<Bounce top cascade>
								<img className="img-fluid" src={service} alt="service" />
								{/* <img className="img-fluid" src={image} alt={name} /> */}
								<Card.Body>
									<Card.Title as="h5" className="text-info">
										Gear Repair
										{/* {name} */}
									</Card.Title>
									<Card.Text as="p" className="text-muted">
										Gear drivetrain has the drive sprocket threaded or
										bolted directly to the hub of the back wheel, so that the
										pedals are directly coupled to the wheel.
										{/* {description} */}
									</Card.Text>
								</Card.Body>
								<Card.Footer className="d-flex justify-content-between align-items-center border-0">
									<h5>$ 1000</h5>
									{/* <h5>৳ {price}</h5> */}
									<Button
										variant="info"
										// as={Link}
										// to="/dashboard/book"
										// onClick={() => setSelectedService(service)}
										className="main-button"
									>
										<FontAwesomeIcon icon={faShoppingCart} /> Book
									</Button>
								</Card.Footer>
							</Bounce>
						</Card>
					</motion.div>
				</Col>
				{/* <Row className="mt-5 justify-content-center">
					{services.length > 0 ? (
						services.map((service) => (
							<ServiceDetail key={service._id} service={service} />
						))
					) : (
						<div className="m-auto">
							<img className="img-fluid" src={spinner} alt="..." />
						</div>
					)}
				</Row> */}
			</Container>
		</section>
	);
};

export default OurServices;
