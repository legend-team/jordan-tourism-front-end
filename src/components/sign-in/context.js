import React from 'react'
import jwt from 'jsonwebtoken';
import cookies from 'react-cookies'


const API = 'http://tourism-api-back-end.herokuapp.com'

export const LoginContext = React.createContext()

class LoginProvider extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            loggedIn:false,
            login:this.login,
            logout:this.logout,
            signUp:this.signUp,
            valdiateToken:this.valdiateToken,
            setlogin:this.setlogin,
            setState:this.setState,
            user:{}
        }
        
    }
     login = async(username,password)=>{
        let output = await fetch(`${API}/signin`,{
           method:'POST',
           mode:'cors',
           cache:'no-cache',
           headers:new Headers({
               'Authorization':`Basic ${btoa(`${username}:${password}`)}`,
               'Content-Type': 'application/json'
           }) 
        })
        let token =await output.text()
        this.valdiateToken(token)
    }
    valdiateToken = (token)=>{
        try {
            console.log(token)
            let user = jwt.verify(token,'ser123')
            console.log('user',user)
            this.setlogin(true,token,user)
            console.log('user verfiy',token)
        } catch  {
            this.setlogin(false,null,{})
            console.error('token invalid')
        }
    }
    setlogin = (loggedIn,token,user)=>{
        cookies.save('auth',token)
        this.setState({token,loggedIn,user})
    }
    logout = ()=>{
        this.setlogin(false,null,{})
    }
    componentDidMount =()=>{
        const qs = new URLSearchParams(window.location.search)
        const cookiesToken = cookies.load('auth')
        const token  = qs.get('token') || cookiesToken || null
        this.valdiateToken(token)
    }
    signUp = async(username,password,email_user)=>{
        console.log('Hi')
        let response = await fetch(`${API}/signup`,{
            method:'POST',
            mode:'cors',
            cache:'no-cache',
            headers : new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({name:username,pass:password,email:email_user})
         })
         let output  = await response.text()
         this.login(username,password)
     }
    
    render(){
        return(
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider