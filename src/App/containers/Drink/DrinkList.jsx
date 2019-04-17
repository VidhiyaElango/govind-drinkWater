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
                <th>Drank</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {this.props.list.map((i,k) => {console.log(i);
                        return <DirnkListItem key={k} name={i.name} time={i.time} desc={i.desc}></DirnkListItem>;
                    }
                )}
            </tbody>
        </table>
        );
    }
}
export default Drink;