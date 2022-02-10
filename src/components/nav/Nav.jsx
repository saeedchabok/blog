import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Create from '../pages/create/Create'
import Home from '../pages/home/Home'
import Show from '../pages/show/Show'
import Error from '../pages/Erorr';
import LoginForm from '../LoginForm'
import { Container, Button } from 'react-bootstrap'
import useLocalStorage from '../UseLocalStorage'
import './nav.css'
const Nav = () => {
    // ************************ content global var ************
    const [contents, setContent] = useLocalStorage('contents', [])
    const addContent = (id, username, title, content, date) => {
        setContent([...contents,
        {
            id: id,
            username: username,
            title: title,
            content: content,
            date: date
        }])
    }
    // ************************************************************
    // **************************del content *************
    const delContent = (id) => {
        const delcont = contents.filter(element => element.id !== id);
        setContent(delcont);
    };
    // ***************************************************
    // ********************** edit *************************
    const editContent = (i) => {
        console.log(i);
    }
    // ****************************************************
    // const exit = useNavigate()
    const [showlogin, setShowlogin] = useState(false);
    const [activ, setActiv] = useState(true)
    // *******************windowDimensions*******************
    const hasWindow = typeof window !== 'undefined';
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        return {
            width,
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);
    // *******************************************************
    return (
        <>
            <Router >
                <nav className={`${windowDimensions.width <= 680 ? 'navbarMob' : 'navbar'}`}>
                    <h2>Blog App</h2>
                    <div className={`${windowDimensions.width <= 680 ? 'normalNavMob' : 'normalNav'}`}>
                        <NavLink to={'/'} hidden={activ} >Home </NavLink>
                        <NavLink to='/create' hidden={activ} >Create A Post </NavLink>
                        <NavLink to='/show' hidden={activ} >Show Current Posts</NavLink>
                    </div>
                    <div className={`${windowDimensions.width <= 680 ? 'signInMOB' : 'signIn'}`}>
                        <Button hidden={!activ} variant="link" size="sm" onClick={() => {
                            setShowlogin(true)
                            setActiv(false)
                        }}>log-in</Button>
                        <Button hidden={activ} variant="link" size="sm" onClick={() => {
                            setShowlogin(false)
                            setActiv(true)
                            // exit(-1)
                        }}>log-out</Button>
                    </div>
                </nav>
                <Container >
                    <br />
                    <Routes>
                        <Route path={'/'} element={<Home />}></Route>
                        <Route path='/create/' element={<Create addContent={addContent} />}></Route>
                        <Route path='/show/' element={<Show
                            contents={contents}
                            delContent={(id) => delContent(id)
                            }
                            editContent={(i) => editContent(i)}
                        />}></Route>
                        <Route path='*' element={<Error />}></Route>
                    </Routes>
                </Container>
                <LoginForm
                    showlogin={showlogin}
                    hidedenmodel={() => setShowlogin(false)}
                />
            </Router>
        </>
    )
}
export default Nav
