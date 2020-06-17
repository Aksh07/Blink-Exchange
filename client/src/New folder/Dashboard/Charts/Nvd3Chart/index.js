import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import MultiBarChart from "./MultiBarChart";
import PieBasicChart from "./PieBasicChart";
import PieDonutChart from "./PieDonutChart";

class Nvd3Chart extends React.Component {

    render() {
        return (
                <Row>

                <Col md={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Rating</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <PieBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Categories</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <PieDonutChart/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md = {4} xl = {4} height = {1200}>

                        <Card className='Likes'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    
                                    <div className="col text-right">
                                        <h3>202</h3>
                                        <h5 className="text-c-green mb-0">+7.2% <span className="text-muted">Total Likes</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Posts:</span>12</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '60%', height: '6px'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>80</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '45%', height: '6px'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Sales History</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <MultiBarChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            //</Aux>
        );
    }
}

export default Nvd3Chart;