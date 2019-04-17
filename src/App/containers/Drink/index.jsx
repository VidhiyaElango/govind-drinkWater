import React, { Component,createStore } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddPopup from '../../components/AddPopup';
import DrinkList from '../Drink/DrinkList';
import logo_bl from '../../assets/images/logo_bl.png';

class Drink extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            list: []
        };
    }
    
    handleShow() {
        this.refs.addPopup.handleShow();
    }
    add(name,desc,time) {
        var list = [...this.state.list];
        list.push({
            name:name,
            desc:desc,
            time:time,
        });
        this.setState({list : list});
    } 
    delete(e) {
        console.log(e)
        var array = [...this.state.list];
        array.splice(e, 1);
            this.setState({list : array});
    }
    render(){
        return(
            <>
            <Header />
                <main role="main">
                    <div className="container">
                        <h2>Drink Water List</h2>
                        <p>List Alert for drink</p>            
                        <DrinkList list={this.state.list} delete={this.delete}></DrinkList>
                        <div className="btns">
                            <div className="float-right">
                                <button onClick={this.handleShow} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                    <AddPopup add={this.add} ref="addPopup" title="Add Drink">
                    </AddPopup>
                </main>
            <Footer />                
            </>
        );
    }
}
export default Drink;