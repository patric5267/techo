import React, { useEffect } from 'react'
import '../css/Slides.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import react from '../images/react.png'
import node from '../images/node.png'
import mongo from '../images/mongo.png'
const Slides = () => {
    const { mode } = useSelector((state) => state.auth)
    useEffect(() => {
        // console.log(mode);
        if (mode) {
            if (mode === 'dark') {
                document.getElementById('inner2').style.borderColor = 'white'
                document.getElementById('node').style.borderColor = 'white'
                document.getElementById('react').style.borderColor = 'white'
                document.getElementById('mongo').style.borderColor = 'white'
                document.getElementById('r').style.color = 'white'
                document.getElementById('n').style.color = 'white'
                document.getElementById('m').style.color = 'white'


            }
            else {
                document.getElementById('inner2').style.borderColor = 'black'
                document.getElementById('node').style.borderColor = 'black'
                document.getElementById('react').style.borderColor = 'black'
                document.getElementById('mongo').style.borderColor = 'black'
                document.getElementById('r').style.color = 'black'
                document.getElementById('n').style.color = 'black'
                document.getElementById('m').style.color = 'black'
            }
        }
    }, [mode])
    return (
        <div className='slidecon'>
            <div className="inner" id='inner2' >
                <div className='p1' id='node' data-aos='fade-right' data-aos-offset="200"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true">
                    <div className='img'>
                        <img src={react} alt="" />
                    </div>
                    <div className='para'>
                        <p id='r'>
                            React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.
                        </p>
                    </div>
                </div>
                <div className='p2' id='react' data-aos='fade-left' data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true">
                    <div className='para'>
                        <p id='n'>
                            As an runtime javascript environment , javascript is build to develop backend application
                        </p>
                    </div>
                    <div className='img'>
                        <img src={node} alt="" />
                    </div>
                </div>
                <div className='p3' id='mongo' data-aos='fade-right' data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true">
                    <div className='img'>
                        <img src={mongo} alt="" />
                    </div>
                    <div className='para'>
                        <p id='m'>
                            Build applications on the industry's first developer data platform. From AI-powered and event-driven apps to edge use cases and search, build fast and at the scale users demand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slides
