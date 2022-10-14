import { useParams } from "react-router-dom";
import { data } from "../shared/ListOfFilms";
import { useState } from "react";
import React from "react";
import { Row, Col,Container,Card,CardPanel,Icon } from "react-materialize";
import ModalCase from "./ModalCase";
export default function Detail() {
    const [isOpen, setIsOpen] = useState(false); 
    const userName = useParams();
    const film = data.find(obj => {
        return obj.id == userName.id;
    })
    let price = film.price.toLocaleString();
    return (
        <>
            <Container style={{paddingTop:'30px'}}>
                <Row style={{display:'block',width:'60%',height:'100%',justifyContent:'center'}}>
                    <Col m={12} s={12}>
                        <Card>
                            <div className="card-image">
                                <img src={`../${film.img}`} alt={film.img} style={{width:"100%",height:"500px"}}/>
                                <span className="card-title">{film.name}</span>
                                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab">
                                    <Icon large>ondemand_video</Icon>
                                </a>
                            </div>
                            <CardPanel className="teal" >
                                <p className="card-title white-text">{film.Title}</p>
                                <p className="card-title white-text">{film.price}</p>
                                <p className="white-text card-action">{film.info}</p>
                            </CardPanel>
                        </Card>
                    </Col>
                </Row>
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
            </Container>
        </>

    )
}
