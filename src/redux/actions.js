export const toggle = (data)=>async(dispatch)=>{
    dispatch({
        type:'setmode',
        payload:data
    })
}

export const loginmodal = (data)=>async(dispatch)=>{
    dispatch({
        type:'loginprompt',
        payload:data
    })
}
export const getdata = (data2)=>async(dispatch)=>{
   try {
    dispatch({
        type:'getdatapending'
    })
    const {news , page}=data2
    // console.log(news , page);
    const data = await fetch(`https://hn.algolia.com/api/v1/search?query=${news}&page=${page}`)
    const res = await data.json()
    if(res){
        dispatch({
            type:'getdatasuccess',
            payload:res.hits
        })
        // console.log(res.hits);
    }
   } catch (error) {
       dispatch({
        type:'getdatarejected'
       })
   }
}

export const signup = (data2)=>async(dispatch)=>{
    try {
        const{name,email,password}=data2
        dispatch({
            type:'signuppending'
        })
        const data = await fetch('https://precious-crab-housecoat.cyclic.cloud/createuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,email,password
            })
        })
        const res = await data.json()
        console.log(res);
        if(res.message){
            dispatch({
                type:'signupsuccess',
                payload:res.message
            })
        }
        else{
            dispatch({
                type:'signupsuccess',
                payload:res[0].msg
            })
        }
    } catch (error) {
        dispatch({
            type:'signuprejected'
        })
    }
}

export const logintech = (data2)=>async(dispatch)=>{
    try {
        const{email,password}=data2
        dispatch({
            type:'loginpending'
        })
        const data = await fetch('https://precious-crab-housecoat.cyclic.cloud/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,password
            })
        })
        const res = await data.json()
        // console.log(res);
        if(res){
            dispatch({
                type:'loginsuccess',
                payload:[res.message,res.token]
            })
        }
    } catch (error) {
        dispatch({
            type:'loginrejected'
        })
    }
}

export const getuser = (token)=>async(dispatch)=>{
    try {
        dispatch({
            type:'getuserpending'
        })
        const data = await fetch('https://precious-crab-housecoat.cyclic.cloud/getuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                token
            })
        })
        const res = await data.json()
        // console.log(res);
        if(res){
           dispatch({
            type:'getusersuccess',
            payload:res
           })
        }
    } catch (error) {
        
    }
}