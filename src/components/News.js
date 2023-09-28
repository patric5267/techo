import React, { useEffect, useRef, useState } from 'react'
import '../css/News.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../redux/actions'
const News = () => {
    const { news } = useParams()
    if(news){
        document.title=`TechnoNewz | ${news}`
    }
    const { isloading, data } = useSelector((state => state.auth))
    const style = useRef()
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    if(data){
        // console.log(data);
    }
    if (isloading) {
        document.body.style.overflow = 'hidden'
        const element = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid red',
            width: '80%',
            height: '100vh',
        }
        style.current = element
    }
    else {
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'scroll'
        style.current = {}
    }

    const mode = localStorage.getItem('mode')
    const [border, setBorder] = useState()
    const [text, setText] = useState()
    const [back, setBack] = useState()
    const [text2, setText2] = useState()
    const [color, setColor] = useState()
    const [loader, setloader] = useState()
  
    useEffect(() => {
        if (mode) {
            // console.log(mode);
            if (mode === 'dark') {
                document.body.style.backgroundColor = 'black'
                setBorder('white')
                setText('white')
                setColor('white')
                setBack('white')
                setText2('black')
                setloader('white')
              
            }
            else {
                document.body.style.backgroundColor = 'white'
              
                setBorder('black')
                setText('white')
                setColor('black')
                setBack('black')
                setText2('white')
                setloader("black")
            }
        }
    }, [mode])
    useEffect(() => {
        // console.log(page);
        dispatch(getdata({ news, page }))
    }, [dispatch,news,page])
    const plus = () => {
        if (page < 49) {
            setPage(page + 1)
        }
    }
    const minus = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    return (
        <div className='newscon'>
            <div className="inner" style={style.current}>
                {
                    isloading ? <div className="loader" style={{ color: loader }}>
                        <h1>Loading....</h1>
                    </div>
                        : data? data.map((val) => {
                            return (
                                <>
                                    <div className="detail" style={{ borderColor: border, color: text }} key={val.num_comments}>
                                        <div>
                                            <p>{val.title}</p>
                                        </div>
                                        <div className='author'>
                                            <p>{`By ${val.author}   `}</p>
                                            <p>{`| ${val.points}`}</p>
                                        </div>
                                        <div style={{ marginBottom: '1vh' }}>
                                            <a href={val.url} style={{color:'white'}}><p>Read Docs</p></a>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : console.log('')
                }

            </div>
            <div className="number">
                <div className="count" style={{ color: color }}>
                    <div className="prev" style={{ borderColor: border, backgroundColor: back, color: text2 }} onClick={minus}>
                        Prev
                    </div>
                    <div className="display">
                        <div className="start">
                            {page}
                        </div>
                        <div className="of">
                            of
                        </div>
                        <div className="end">
                            49
                        </div>
                    </div>
                    <div className="next" style={{ borderColor: border, backgroundColor: back, color: text2 }} onClick={plus} >
                        Next
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
