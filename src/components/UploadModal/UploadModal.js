import React, {Component} from 'react'
import Modal from 'react-modal';
import UploadPictures from '../UploadPicture/UploadPicture';

class UploadModal extends Component {
    constructor() {
      super();
      this.state = {
        showModal: false
      };
  
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      
    }
   
    handleOpenModal() {
      this.setState({ showModal: true });
    }
  
    handleCloseModal() {
      this.setState({ showModal: false });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Upload</button>
          <Modal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <div>
              <h2>Upload</h2>
              Select your memory here <UploadPictures/>
              Always remember this place <input placeholder="location"/>
              On this day <input placeholder="date"/>
              Secure this moment <input placeholder="voice recorder will go here"/>
            </div>
            <br></br>
            <div>
              <button>Upload</button>
            <button onClick={this.handleCloseModal}>Cancel</button>
            </div>
          </Modal>
        </div>
      );
    }
}
  

  
  export default UploadModal;