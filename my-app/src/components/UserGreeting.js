import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:true 
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Sunny</div>
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Sunny</div>
        // ) :(
        //     <div>
        //    <div>Welcome Guest</div>
        //     </div>
        // )

        // let message;
        // if (this.state.isLoggedIn) {
        //    message= <div>Welhcome Vishwas</div>
        // }
        // else {
        //     message= <div>Welcome Guest</div>
        // }

        // return (<div>{message}</div>)

        // if (this.state.isLoggedIn) {
        //    return <div>Welhcome Vishwas</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Sunny</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )

    }
}

export default UserGreeting
