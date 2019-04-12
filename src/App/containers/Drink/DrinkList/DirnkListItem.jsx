import React, { Component } from 'react';
class DirnkListItem extends Component{
    constructor(props) {
        super(props);
         this.state = {
           time: props.time
         };
        this.editAge = this.editAge.bind(this);
        this.reset = this.reset.bind(this);
        this.editAge();
     }
    editAge() {
        setInterval(()=>{
            this.setState({time : this.state.time - 1})
          },1000);
    }
    reset(){
        this.setState({time : this.props.time})  
    }
    render(){
        return(
            <tr className={this.state.time > 0 ? 'text-success' : "text-danger"}>
                <td >{this.props.name}</td>
                <td>Drink Water Daily</td>
                <td>{this.state.time > 0?this.state.time:"Please Drink"}</td>
                <td><a href="/edit">Edit</a> | <a href="#" onClick={this.reset}>Drank</a></td>
            </tr>
        );
    }
}
export default DirnkListItem;