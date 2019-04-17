import React, { Component } from 'react';
import DirnkListItem from '../Drink/DrinkList/DirnkListItem';
class Drink extends Component{
    render(){
    if (this.props.list.length > 0) {
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
                {this.props.list.map((i,k) => {console.log(k);
                        return <DirnkListItem key={k} id={k} name={i.name} time={i.time} desc={i.desc} delete={this.props.delete}></DirnkListItem>;
                    }
                )}
            </tbody>
        </table>
        );
        } else{
            return (
                <div className="text-center">
                    <p>No Alert</p>
                </div>
            );
        }
    }
}
export default Drink;