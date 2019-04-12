import React, { Component } from 'react';
import DirnkListItem from '../Drink/DrinkList/DirnkListItem';
class Drink extends Component{
    render(){
        return(
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <DirnkListItem name="Govidnarj" time="20"></DirnkListItem>
                <DirnkListItem name="Arun" time="10"></DirnkListItem>
                <DirnkListItem name="Ravi" time="5"></DirnkListItem>
            </tbody>
        </table>
        );
    }
}
export default Drink;