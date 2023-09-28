import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
      message: null,
      isloading: false,
      iserror: false,
      mode: null,
      data:null,
      displaylogin:null,
      authtoken:null,
      userdata:null
}

export const authreducer = createReducer(initialstate, {
      setmode: (state, action) => {
            state.mode = action.payload
      },
      getdatapending:(state)=>{
            state.isloading=true
      },
      getdatasuccess:(state,action)=>{
            state.isloading=false
            state.data=action.payload
      },
      getdatarejected:(state,action)=>{
            state.iserror=true
            state.data=action.payload
      },
      loginprompt:(state,action)=>{
            state.displaylogin=action.payload
      },
      signuppending:(state)=>{
            state.isloading=true
      },
      signupsuccess:(state,action)=>{
            state.isloading=false
            state.message=action.payload
      },
      signuprejected:(state)=>{
            state.iserror=true
      },
      loginpending:(state)=>{
           state.isloading=true
      },
      loginsuccess:(state,action)=>{
          state.isloading=false
          state.message=action.payload[0]
          state.authtoken=action.payload[1]
      },
      loginrejected:(state)=>{
         state.iserror=true
      },
      getuserpending:(state)=>{
            state.isloading=true
      },
      getusersuccess:(state,action)=>{
            state.isloading=false
            state.userdata=action.payload
      },
      getuserrejected:(state)=>{
            state.iserror=true
      },
      clearmessage:(state)=>{
            state.message=null
      }
})

