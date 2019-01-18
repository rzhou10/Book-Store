import React, { Component } from "react";

class Account extends Component{
    constructor(props){
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            street: user.street,
            city: user.city,
            state: user.state,
            zip: user.zip,
            phone: user.phone,
            email: user.email
        }
    }

    componentDidMount(){
        document.title = "Account";
    }

    render(){
        return(
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/account">Account</a>
                    <a href="/signout">Sign out</a>
                </nav>
                <h2>Account Info</h2>
                <div className="accountInfo">
                    <p>Username: {this.state.username}</p>
                    <p>First Name: {this.state.firstName}</p>
                    <p>Last Name: {this.state.lastName}</p>
                    <p>Street: {this.state.street}</p>
                    <p>City: {this.state.city}</p>
                    <p>State: {this.state.state}</p>
                    <p>Zip Code: {this.state.zip}</p>
                    <p>Phone: {this.state.phone}</p>
                    <p>Email: {this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default Account;