import React from 'react'
import { Card, Accordion, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Edit from '../../Edit'
const Show = ({ contents, delContent, editContent }) => {
    console.log(contents);
    const nav = useNavigate()
    return (
        <>
            <Card className="text-center">
                {contents.map((t, i) =>
                    <Card.Body key={t.id} >
                        <Card.Header key={t.id} >{t.title}
                        </Card.Header>
                        <Accordion key={t.id} defaultActiveKey="1">
                            <Accordion.Item key={t.id} eventKey="0">
                                <Accordion.Header key={t.id} >
                                    {t.username}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {t.content}
                                    <div className='showButton'>
                                        <Button
                                            key={t.id}
                                            size='sm'
                                            onClick={() => {
                                                editContent(i)
                                            }}
                                        >
                                            Edit</Button>
                                        <Button
                                            key={t.id}
                                            size='sm'
                                            variant="danger"
                                            onClick={() => {
                                                delContent(t.id)
                                            }
                                            }
                                        >
                                            Deleted
                                        </Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion >
                        <Card.Footer key={t.id} className="text-muted">
                            {moment(t.date).format('LLLL')}
                        </Card.Footer>
                    </Card.Body>
                )}
            </Card>
        </>
    )
}
export default Show
