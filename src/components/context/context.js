import React from 'react'

const API = 'https://jordan-explorers.herokuapp.com'


export const CityContext = React.createContext()

class LoginProvider extends React.Component{

  constructor(props){
      super(props)
      this.state ={
          link:null,
          cityLink: this.cityLink                     
      }   
          // this.cityLink  = this.cityLink.bind(this);
          // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  cityLink = (cityLink)=>{
    console.log('cityLink from context => ',cityLink);
    let newcity = cityLink;
    this.setState({
      link: `${newcity}`,
      cityLink : this.cityLink
    });
    // this.state.link =`${newcity}`;

    console.log('this.state from context => ',this.state);
    
  }


  render(){
      return(
          <CityContext.Provider value={this.state}>
              {this.props.children}
          </CityContext.Provider>
      )
  }
}

export default LoginProvider;
