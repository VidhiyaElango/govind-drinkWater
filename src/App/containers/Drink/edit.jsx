import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddDrink from '../../components/DrinkForm';
import logo_bl from '../../assets/images/logo_bl.png';
class Edit extends Component{
    render(){
        return(
            <>
            <Header />
                <main role="main">
                    <div class="container">
                    <a href="/" class="btn btn-link">&lt; Back to Home</a>
                        <AddDrink></AddDrink>
                    </div>
                </main>
            <Footer />                
            </>
        );
    }
}
export default Edit;