import React, { useState } from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../css/Prac.css'

const Prac2 = () => {
    const [state, setState] = useState(false)
    const [file, setFile] = useState(null)
    const [main, setMain] = useState(false)
    const handlefile = (e) => {
        const file = e.target.files[0]
        console.log(file);
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            if (reader.readyState === 2) {
                console.log(reader.result);
                setFile(reader.result)
                setState(true)
            }
        }
    }
    return (
        <div>
            <input type="file" onChange={handlefile} />
            <button onClick={() => setMain(true)}>View pdf</button>
            <button onClick={() => setMain(false)}>close pdf</button>
         
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {main ? <div className='pdf' style={{ border: '1px solid red', height: '95vh' }}>
                        {state ?
                          <div style={{width:'70%' , height:'100%'}} >
                             <Viewer fileUrl={file} className='pdfinner' />
                          </div>
                           
                            : <div>no pdf</div>}

                    </div> : null}
                </Worker>
                
        </div>

    )
}

export default Prac2
