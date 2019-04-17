import React, { Component,createStore } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddPopup from '../../components/AddPopup';
import AddDrink from '../../components/DrinkForm';
import DrinkList from '../Drink/DrinkList';
import logo_bl from '../../assets/images/logo_bl.png';

class Drink extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.list = [
            {
                name:"Govidnaraj",
                desc:"ddd",
                time:"10"
            },
            {
                name:"d",
                desc:"ddd",
                time:"2"
            },
            {
                name:"c",
                desc:"ddd",
                time:"5"
            },
            {
                name:"c",
                desc:"ddd",
                time:"10"
            }
        ];
    }
    
    handleShow() {
        this.refs.addPopup.handleShow();
    }
    render(){
        return(
            <>
            <Header />
                <main role="main">
                    <div className="container">
                        <h2>Drink Water List</h2>
                        <p>List Alert for drink</p>            
                        <DrinkList list={this.list}></DrinkList>
                        <div className="btns">
                            <div className="float-right">
                                <button onClick={this.handleShow} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                    <AddPopup ref="addPopup" title="Add Drink">
                        <AddDrink></AddDrink>
                    </AddPopup>
                </main>
            <Footer />                
            </>
        );
    }
}
export default Drink;