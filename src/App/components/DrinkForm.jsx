import React, { Component } from 'react';
class DrinkForm extends Component{
    render(){
        return(  
            <div className="card">
                <div className="card-body">
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
                        <button type="submit" className="btn btn-primary">save</button>
                    </form>    
                </div>
            </div>
          );
    }
}
export default DrinkForm;