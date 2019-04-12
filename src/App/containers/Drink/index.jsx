import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import logo_bl from '../../assets/images/logo_bl.png';
class Drink extends Component{
    render(){
        return(
            <>
            <Header />
                <main role="main">
                <div class="container"><h2>Drink Water List</h2>
                    <p>List Alert for drink</p>            
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Govidnaraj</td>
                            <td>Drink Water Daily</td>
                            <td>00:10</td>
                            <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                            <td>Arun </td>
                            <td>Drink Water Daily</td>
                            <td>00:10</td>
                            <td><a href="#">Edit</a></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="btns">
                        <div className="float-right">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                    </div>
                </main>
            <Footer />                
            </>
        );
    }
}
export default Drink;