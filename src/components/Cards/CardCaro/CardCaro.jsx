import React from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import "./CardCaro.css"

const CardCaro = (props) => {
    return (
        <container className="contain-card1">
            <div className="globaldivfame">
                <Card className='CardGlobal'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3">Manager Bunny</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" src="https://i.ibb.co/DgKhGv3/Caro.png" alt="altalacon" />
                    <CardBody className='CardBot'>
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg Managed 93657</CardText>
                    </CardBody>
                </Card>
            </div>
        </container>
    );
};

export default CardCaro;