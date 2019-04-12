import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DrinkList from '../Drink/DrinkList';
import logo_bl from '../../assets/images/logo_bl.png';
class Drink extends Component{
    render(){
        return(
            <>
            <Header />
                <main role="main">
                <div className="container">
                    <h2>Drink Water List</h2>
                    <p>List Alert for drink</p>            
                    <DrinkList>

                    </DrinkList>
                    <div className="btns">
                        <div className="float-right">
                            <a href="/add"className="btn btn-primary">Add</a>
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