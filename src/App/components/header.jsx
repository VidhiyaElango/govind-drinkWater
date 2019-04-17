import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#"><img className="img" src={logo}/> Drink Water</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0 pull-left">
                            <input className="form-control mr-sm-2" placeholder="Name" />
                            <button className="btn btn-outline-success" type="Button">Add</button>
                        </form>
                    </div>
                </nav>
            </header>
       );
    }
}
export default Header;