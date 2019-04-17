import React, { Component } from 'react';
class DrinkForm extends Component{
    render(){
        return(  
            <form action="/" method="get">
                <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Jhon"/>
                </div>
                <div className="form-group">
                <label for="desc">Desc:</label>
                <textarea type="text" className="form-control" id="desc" placeholder="Enter Description"/>
                </div>
                <div className="form-group">
                <label for="time">Time:</label>
                <input type="text" className="form-control" id="time" placeholder="00:30"/>
                </div>
            </form>
          );
    }
}
export default DrinkForm;