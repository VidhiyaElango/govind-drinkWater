import React, { Component } from 'react';
import ReactNotifications from 'react-browser-notifications';
import logo_bl from '../../../assets/images/logo_bl.png';
class DirnkListItem extends Component{
    constructor(props) {
        super(props);
         this.state = {
           time: props.time,
           notication: false
         };
        this.setDrinkTimmer = this.setDrinkTimmer.bind(this);
        this.reset = this.reset.bind(this);
        this.showNotifications = this.showNotifications.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.delete = this.delete.bind(this);
     }
    setDrinkTimmer() {
        setInterval(()=>{
            console.log(this.state.notication);
            if(this.state.time > 0){
                this.setState({time : this.state.time - 1})
                this.setState({notication : false})
            }else if(!this.state.notication){
                this.showNotifications();
                this.setState({notication : true})
            }
          },1000);
    }
    reset(){
        this.setState({time : this.props.time})  
    }
    showNotifications() {
        // If the Notifications API is supported by the browser
        // then show the notification
        if(this.n.supported()) this.n.show();
      }
     
      handleClick(event) {
        // Do something here such as
        // console.log("Notification Clicked") OR
        // window.focus() OR
        // window.open("http://www.google.com")
     
        // Lastly, Close the notification
        this.n.close(event.target.tag);
      }
      delete(){
          if(window.confirm("Do you want to delete?")){
            this.props.delete(this.props.id);
          }
      }
    render(){
        return(
            <>
                <tr className={this.state.time > 0 ? 'text-success' : "text-danger"}>
                    <td >{this.props.name}</td>
                    <td>{this.props.desc}</td>
                    <td>{this.state.time > 0?this.state.time:"Please Drink"}</td>
                    <td><a href="#" onClick={this.reset}>Drink</a></td>
                    <td>
                        <a href="#/edit">Edit</a> | <a href="#" onClick={this.delete}>Delete</a>
                        <ReactNotifications
                            onRef={ref => (this.n = ref)} // Required
                            title={"Hey "+this.props.name} // Required
                            body={this.props.desc}
                            icon={logo_bl}
                            tag="abcdef"
                            timeout="2000"
                            onClick={event => this.handleClick(event)}
                            />
                    </td>
                </tr>
            </>
        );
    }
    componentDidMount(){
        this.setDrinkTimmer();
    }
}
export default DirnkListItem;