import React,{useState,createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const AuthContext = createContext();

export default function AuthProvider(props) {
    const navigate=useNavigate()
    const [userToken,setUserToken]=useState(null)
    const [userData,setUserData]=useState(null)
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,login start.....................
  const UserLogin=(formdata)=>{
    try{
    axios({
        method:"post",
        url:"http://localhost:3001/loginnow",
        data:formdata
    }).then((res)=>{
        if(res.data.status="success"){
          console.log(res.data)
          setUserToken(res.data.token)
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("usermail", res.data.usermail);
          navigate("/")
        }
    })
    }
    catch(err){
        console.log(err)
    }
  }
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,login end..................

// ,,,,,,,,,,,,,,,,,,register.......................
const Resister=(formdata)=>{
      axios({
        method:"post",
        url:"http://localhost:3001/userdata",
        data:formdata
    }).then((res)=>{
        alert(res.data)
    })
}
// ......................register node.............
// ..............................logout.....................
const Logout =()=>{
    // sessionStorage.removeItem('usermail');
    setUserToken(null)
    sessionStorage.removeItem('token');
    navigate("/")
}
// .........................................................
  return (
    <AuthContext.Provider value={{userToken,UserLogin,userData,Logout,Resister}}>
      {props.children}
    </AuthContext.Provider>
  )
}
