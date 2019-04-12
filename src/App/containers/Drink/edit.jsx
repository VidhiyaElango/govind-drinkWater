import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import logo_bl from '../../assets/images/logo_bl.png';
class Edit extends Component{
    render(){
        return(
            <>
            <Header />
                <main role="main">
                    <div class="container">
                        <a href="/">Back to Home</a>
                    </div>
                </main>
            <Footer />                
            </>
        );
    }
}
export default Edit;