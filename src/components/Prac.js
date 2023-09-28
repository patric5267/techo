import React, { useEffect, useState } from 'react'
import '../css/Prac.css'

const Prac = () => {
    const [dis, setDis] = useState('transparent')
    const[show , setShow]=useState(false)
    useEffect(()=>{
      if(show){
        document.body.style.overflow='hidden'
      }
      else{
        document.body.style.overflow='scroll'
        document.body.style.overflowX='hidden'
      }
    },[show])
    const plus = () => {
        console.log(window.innerHeight);
        console.log(document.documentElement.scrollTop);
        console.log(document.documentElement.scrollHeight);
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
            setDis('yellow')
        }
        else {
            setDis('transparent')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', plus)
    })

    return (
        <>
            <div className='maincon'>
                <div className="inner">
                    <div className="boxinner">

                    </div>
                </div>
                <div className="nav" style={{ backgroundColor: dis }}>
                    <div className="straight">
                        
                    </div>
                    <div className="white" onClick={()=>setShow(true)}>

                    </div>
                </div>

                <div className="box1prac" data-aos='fade-up'>

                </div>
            </div>
           { show?<div className="dropprac">
                <div className="red">

                </div>
                <div className="dropdown">
                    <div className="cross" onClick={()=>setShow(false)}>

                    </div>
                    <div className="right">

                    </div>
                </div>
            </div> : console.log() }
        </>
    )
}

export default Prac

