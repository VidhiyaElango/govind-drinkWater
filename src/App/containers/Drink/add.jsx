import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DrinkForm from '../../components/DrinkForm';
import logo_bl from '../../assets/images/logo_bl.png';
class Add extends Component{
    render(){
        return(
            <>
            <Header />
                <main role="main">
                    <div class="container">
                    <h1>Add New</h1>
                    <a href="/" class="btn btn-link">&lt; Back to Home</a>
                        <DrinkForm></DrinkForm>
                    </div>
                </main>
            <Footer />                
            </>
        );
    }
}
export default Add;