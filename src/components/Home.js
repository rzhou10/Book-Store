import React, { Component } from "react";

class Home extends Component{
    loggedIn(){
        if (!localStorage.getItem("user")){
            return(
                <div>
                    <div className="signIn">
                        <div className="login">
                            <a className="logReg" href="login">Log In</a>
                        </div>
                        <div className="register">
                            <a className="logReg" href="register">Register</a>
                        </div>
                    </div>
                    <h1>Home</h1>
                    <p>Welcome to the bookseller! Sell your books or buy your own!</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/orders">Orders</a>
                        <a href="/account">Account</a>
                        <a href="/signout">Sign out</a>
                    </nav>
                    <h1>Home</h1>
                    <p>Welcome to the bookseller! Sell your books or buy your own! <a className="linkToPages" href="/search">Search</a> our catalog!</p>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.loggedIn()}
            </div>
        );
    }
}

export default Home;