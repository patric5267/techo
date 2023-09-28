import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Home.css'
import tech from '../images/tech.png'
import search from '../images/search.png'
import Slides from './Slides'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { getdata , loginmodal , signup ,logintech} from '../redux/actions'
import email2 from '../images/email2.png'
import password2 from '../images/password2.png'
import name2 from '../images/name2.png'

const Home = () => {
  const [login, setLogin] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[border,setBorder]=useState()
  const { mode, data, displaylogin,message ,isloading , authtoken} = useSelector((state) => state.auth)
  const sign = useRef('SignUp')
  const changelogin = useRef('Login')
  if(isloading){
      sign.current='Signing....'
      changelogin.current='Logging....'
  }
  else{
    sign.current='SignUp'
    changelogin.current='Login'
  }
  //  console.log(displaylogin);
   if(displaylogin){
    document.body.style.overflow='hidden'
   }
   else{
    document.body.style.overflowX='hidden'
    document.body.style.overflowY='scroll'
   }
  useEffect(() => {
    if (mode === 'dark') {
      document.getElementById('welcome').style.color = 'white'
      document.getElementById('news').style.color = 'white'
      document.getElementById('logo').style.borderColor = 'white'
      document.getElementById('footer').style.borderColor='white'
      document.getElementById('footer').style.color='white'
      setBorder('white')

    }
    else {
      document.getElementById('welcome').style.color = 'black'
      document.getElementById('news').style.color = 'black'
      document.getElementById('logo').style.borderColor = 'black'
      document.getElementById('logo').style.backgroundColor = 'black'
      document.getElementById('footer').style.borderColor='black'
      document.getElementById('footer').style.color='black'
      setBorder('black')
    }
  }, [mode])
  const [news, setNews] = useState('')
  const next = () => {
    if(!localStorage.getItem('token')){
       dispatch(loginmodal(true))
    }
    else if(!news){
      toast.error('fill the fields properly')
    }
    else{
      const page = 1
      // console.log(news);
      dispatch(getdata({ news, page }))
    }
  }
  useEffect(() => {
    if (data) {
      // console.log(data);
     if (data.length === 0) {
        toast.error(`No data found for ${news}`)
        document.getElementById('search').value = ''
      }
      else if (news) {
        navigate(`/news/${news}`)
      }
      else {
        navigate('/')
      }
    }
  }, [news,navigate,data])
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const postdatasign = ()=>{
     if(!name || !email || !password){
      toast.error('fill the fields properly')
     }
     else if(name.length<2){
      toast.error('Name should be of more than 1 character')
     }
     else if(password.length<5){
      toast.error('password should be of length 5')
     }
     else{
      dispatch(signup({name,email,password}))
     }
  }
  const postdatalogin =()=>{
    if(!email || !password){
      toast.error('fill the fields properly')
    }
    else{
      dispatch(logintech({email,password}))
    }
  }
  useEffect(()=>{
    if(message){
      if(message==='enter a valid email'){
        toast.error(message)
        dispatch({
          type:'clearmessage'
        })
        // sign.current='SignUp'
      }
      else if(message==='user already exists'){
        toast.error(message)
        dispatch({
          type:'clearmessage'
        })
        // sign.current='SignUp'
      }
      else if(message==='invalid credentials'){
        toast.error(message)
        dispatch({
          type:'clearmessage'
        })
      }
      else if(message==='login successful'){
         localStorage.setItem('token' , authtoken)
         dispatch(loginmodal(false))
         dispatch({
          type:'clearmessage'
         })
      }
      else{
        setLogin(true)
        dispatch({
          type:'clearmessage'
        })
      }
    }
  },[dispatch,authtoken,message])
  return (
    <>
      <Navbar />
      <div className='homecon'>
        <div className="inner">
          <div className="box1">
            <h1 className='welcome' id='welcome'>Welcome To</h1>
            <h1 id='news'>The Techo Newz</h1>
            <div className="st">
              <div className="input">
                <input type="text" placeholder='Search here....' onChange={(e) => setNews(e.target.value)} id='search' />
              </div>
              <div className="logo" id='logo' onClick={next} style={{cursor:'pointer'}}>
                <img src={search} alt="" />
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="shape">
              <img src={tech} alt="" />
            </div>
          </div>
        </div>
        <Toaster />
      </div>
      <Slides />
      <div className='drop'>
        {displaylogin ? <div className="innerdrop" >
          {login ? <div className='loginform' id='login' style={{borderColor:border}}>
            <div>
              <h1>Login</h1>
            </div>
            <div className="email">
              <img src={email2} alt="error" />
              <input type="email" placeholder='abc@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="email">
              <img src={password2} alt="" />
              <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='loginbtns'>
              <button onClick={postdatalogin} style={{cursor:'pointer'}}>{changelogin.current}</button>
              <button onClick={()=>dispatch(loginmodal(false))} style={{cursor:'pointer'}}>Cancel</button>
            </div>
            <p>or</p>
            <div className="alradysign">
              <p>New user?</p><p onClick={() => setLogin(false)} style={{cursor:'pointer'}}> Sign Up</p>
            </div>
          </div> :
            <div className='loginform' id='login' style={{borderColor:border}}>
              <div>
                <h1>Sign Up</h1>
              </div>
              <div className="email">
                <img src={name2} alt="" />
                <input type="email" placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className="email">
                <img src={email2} alt="" />
                <input type="email" placeholder='abc@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="email">
                <img src={password2} alt="" />
                <input type="password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className='loginbtns'>
                <button onClick={postdatasign} style={{cursor:'pointer'}}>{sign.current}</button>
                <button onClick={()=>dispatch(loginmodal(false))} style={{cursor:'pointer'}}>Cancel</button>
              </div>
              <p>or</p>
              <div className="alradysign">
                <p>Already a user?</p ><p onClick={() => setLogin(true)}style={{cursor:'pointer'}}>Login</p>
              </div>
            </div>
          }
        </div> : console.log()}
      </div>
      <div className='footer'>
        <div className="innerfooter" id='footer'>
          Copy@ TechnoNewz
        </div>
      </div>
    </>
  )
}

export default Home
