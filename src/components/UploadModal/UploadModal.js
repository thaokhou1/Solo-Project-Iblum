import React, {Component} from 'react'
import Modal from 'react-modal';
import UploadPictures from '../UploadPicture/UploadPicture';
import {connect} from 'react-redux'

class UploadModal extends Component {
    constructor() {
      super();
      this.state = {
        showModal: false,
        newPicture:{
        image:''
              }
      };
  
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      
    }

    handleInputChangeFor = (event, propertyName) => {
      this.setState({
        newPicture:{
          ...this.state.newPicture,
        [propertyName]: event.target.value,
        }
      });
      console.log(this.state.newPicture);
      
    }
   
    handleOpenModal() {
      this.setState({ showModal: true });
    }
  
    handleCloseModal() {
      this.setState({ showModal: false });
    }

    handleSubmit=(event)=> {
      event.preventDefault();
        console.log('hello from the upload btn');
        this.props.dispatch({type: 'POST_PIC', payload: this.state.newPicture});
        this.setState({
          newPicture: {
           
           image:''
       
          }
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Upload Picture</button>
          <Modal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <div>
           
              <h2>Upload</h2>
              {/* <form onSubmit={this.handleSubmit}> */}
                
              <UploadPictures/>
              {/* Select your memory here <input type='file' onChange={(event)=>this.handleInputChangeFor(event,'img')}/> */}
              {/* Always remember this place <input placeholder="location" onChange={(event)=>this.handleInputChangeFor(event,'location')}/> */}
              {/* On this day <input placeholder="date"  onChange={(event)=>this.handleInputChangeFor(event,'date')}/> */}
              {/* Secure this moment <input  placeholder="voice recorder will go here"  onChange={(event)=>this.handleInputChangeFor(event,'voice_clip')}/> */}
              {/* </form> */}
            </div>
            <br></br>
            <div>
              <button onClick= {this.handleSubmit}>Upload</button>
            <button onClick={this.handleCloseModal}>Cancel</button>
            </div>
          </Modal>
        </div>
      );
    }
}
  

  
const mapStateToProps = state => ({
  errors: state.errors,
});
  export default connect(mapStateToProps)(UploadModal);