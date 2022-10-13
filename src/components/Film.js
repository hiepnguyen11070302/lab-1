import { data } from '../shared/ListOfFilms'
import { useState } from 'react'
import React from 'react'
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container,Section } from 'react-materialize'
import "../index.css"
export default function Films1() {
    const [film, setFilm] = useState([])
    return (
        <Section>
            <Container maxWidth = "sm">
                <Row>
                    {data.map((data) => (
                        <Col key={data.id} m={3} s={12}>
                            <Card 
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={data.img} reveal waves='light' />}
                                reveal={<p>{data.info}</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title={data.Title}
                            >
                                <Link to={`detail/${data.id}`}>Detail</Link>
                            </Card>
                        </Col>))
                    }
                </Row>
            </Container>
        </Section>


    )
}