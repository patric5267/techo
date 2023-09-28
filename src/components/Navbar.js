import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import { toggle , loginmodal ,getuser} from '../redux/actions'
import { useDispatch , useSelector} from 'react-redux'

const Navbar = () => {
  const[user,setUser]=useState()
  const[color,setColor]=useState()
  const dispatch = useDispatch()
  const {mode,authtoken,userdata}= useSelector((state)=>state.auth)
  const[light , setlight]=useState()
  const[userlogin,setUserlogin]=useState()
    useEffect(()=>{
       if(authtoken){
        // console.log(authtoken);
        setUserlogin(true)
        dispatch(getuser(authtoken))
       }
    },[dispatch,authtoken])
    useEffect(()=>{
        if(userdata){
           setUser(true)
        }
    },[userdata])
    const logout = ()=>{
      localStorage.removeItem('token')
      setUserlogin(false)
      setUser(false)
    }
    useEffect(()=>{
      const mode = localStorage.getItem('mode')
      if(mode){
        if(mode==='dark'){
          setlight(false)
          dispatch(toggle('dark'))

        }
        else{
          setlight(true)
          dispatch(toggle('light'))

        }
      }
      else{
        localStorage.setItem('mode' , 'light')
        setlight(true)
        dispatch(toggle('light'))
      }
    },[dispatch])
    useEffect(()=>{
      if(mode){
        if(mode==='dark'){
           document.body.style.backgroundColor='black'
           document.getElementById('inner').style.borderColor='white'
           document.getElementById('list').style.color='white'
           document.getElementById('btn').style.color='black'
           document.getElementById('btn').style.backgroundColor='white'
           setColor('white')
        }
        else{
          document.body.style.backgroundColor='white'
          document.getElementById('inner').style.borderColor='#000000ad'
          document.getElementById('list').style.color='black'
          document.getElementById('btn').style.color='white'
          document.getElementById('btn').style.backgroundColor='black'
          setColor('black')
        }
      }
    },[mode])
    const togglemode = ()=>{
       if(light){
        localStorage.setItem('mode' , 'dark')
        setlight(false)
        dispatch(toggle('dark'))

       }
       else{
        localStorage.setItem('mode' , 'light')
        setlight(true)
        dispatch(toggle('light'))

       }
    }
    const token = localStorage.getItem('token')
    useEffect(()=>{
       if(token){
          setUserlogin(true)
          dispatch(getuser(token))
       }
       else{
         setUserlogin(false)
       }
    },[dispatch,token])
  return (
    <div className='navcon'>
       <div className="inner" id='inner'>
          <div className="mode" onClick={togglemode} style={{cursor:'pointer'}}>
           {light? <img src={moon} alt="" /> : <img src={sun} alt='' />}
          </div>
          <div className="list" id='list'>
             <div className="home">
              Home
             </div>
             <div className="about">
               About
             </div>
          </div>
          <div className="logout">
          {user? <p style={{color:color}}>{`Hey ${userdata.name}`}</p> : console.log()}
            { userlogin? <button id='btn' onClick={logout}  style={{cursor:'pointer'}}>Logout</button> : <button id='btn' onClick={()=>dispatch(loginmodal(true))}  style={{cursor:'pointer'}}>Login</button>}
          </div>
       </div>
    </div>
  )
}

export default Navbar
