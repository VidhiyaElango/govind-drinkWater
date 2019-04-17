import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class AddPopup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.setName = this.setName.bind(this);
      this.setDesc = this.setDesc.bind(this);
      this.setTime = this.setTime.bind(this);

      this.state = {
        name:"",
        desc:"",
        time:0,
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    handleAdd(){
      this.props.add(this.state.name,this.state.desc,this.state.time);
      this.setState({ show: false });
    }
    setName(event){
      this.setState({ name: event.currentTarget.value });
    }
    setDesc(event){
      this.setState({ desc: event.currentTarget.value });
    }
    setTime(event){
      this.setState({ time: event.currentTarget.value });
    }
    render() {
      return (
        <>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form action="/" method="get">
                <div className="form-group">
                <label htmlFor="name">Name:{this.state.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Jhon" onChange={this.setName}/>
                </div>
                <div className="form-group">
                <label htmlFor="desc">Desc:</label>
                <textarea type="text" className="form-control" id="desc" placeholder="Enter Description" onChange={this.setDesc}/>
                </div>
                <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input type="text" className="form-control" id="time" placeholder="00:30" onChange={this.setTime}/>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAdd}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
export default AddPopup;