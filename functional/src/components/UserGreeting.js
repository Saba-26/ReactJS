import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {


        return this.state.isLoggedIn && <div>Saba</div>

        // return(
        //    this.state.isLoggedIn?<div>Welcome Saba</div>:<div>Welcome Guests</div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //    message=<div>Hello Saba</div>
        // }else{
        //     message=<div>Hello Guests</div>
        // }

        // return(
        //     <div>{message}</div>
        // )





    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>Hello Saba</div>
    //       )   
    //   }else
    //   return(
    //       <div>Hello Guests</div>
    //   )
    }
}

export default UserGreeting
