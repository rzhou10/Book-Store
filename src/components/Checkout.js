import React, { Component } from "react";
import axios from "axios";

class Checkout extends Component{
    constructor(props){
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = {
            firstName: user.firstName,
            lastName: user.lastName,
            street: user.street,
            city: user.city,
            state: user.state,
            zip: user.zip,
            accNo: user.accountNumber,
            orderNo: 0
        }
    }

    componentDidMount(){
        document.title = "Checkout";
        axios.get(`http://localhost:8081/listOrders?acctNumber=${this.state.accNo}`).then(
            (data) => {
                this.setState({
                    orderNo: data.orderNumber
                })
            }
        )
    }

    placeOrder = () => {
        axios.get(`http://localhost:8081/placeOrders?orderNumber=${this.state.orderNo}`).then(() => alert("Your order has been placed!"));
        this.props.history.push("/");
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
                <p>Check out</p>
                <form className="form" onSubmit={this.placeOrder}>>
                    <label>
                        Name on card: <input type="text" name="name" required/>
                    </label>
                    <label>
                        Card type: <select required>
                            <option>Visa</option>
                            <option>MasterCard</option>
                        </select>
                    </label>
                    <label>
                        Card Number: <input pattern="[0-9]{13, 16}" type="text" name="cardNo" maxLength="16" required/>
                    </label>
                    <label>
                        Expire Date: <input type="text" name="expire" placeholder="MM/YY" maxLength="5" required/>
                    </label>
                    <label>
                        CCV: <input type="text" maxLength="3" name="ccv" required/>
                    </label>
                    <input type="submit" value="Order" />
                </form>
                
                <p>
                    Ship to:
                    {this.state.firstName} {this.state.lastName}
                    {this.state.street}
                    {this.state.city}, {this.state.state} {this.state.zip}
                </p>
            </div>
        );
    }
}

export default Checkout;