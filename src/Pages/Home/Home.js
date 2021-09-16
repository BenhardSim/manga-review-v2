import React, {useState} from 'react'
import Backdrop from './Backdrop'
import Feature from './Feature'
import Navbar from './Navbar'
import Welcome from './Welcome'

function Home() {

    const [showLogin,setShowLogin] = useState(false)
    const [showSignin, setSignin] = useState(false)

    const loginHandler = () => {
        let temp = showLogin
        setShowLogin(!temp)
    }

    const signinHandler = () => {
        let temp = showSignin
        setSignin(!temp)
    }

    return (
        <section>
            <Navbar loginHandler={loginHandler} signinHandler={signinHandler}/>
            {showLogin && <Backdrop login={showLogin}  loginHandler={loginHandler}/>}
            {showSignin && <Backdrop signin={showSignin} loginHandler={signinHandler}/>}
            <Welcome />
            <Feature />
        </section>
    )
}

export default Home
