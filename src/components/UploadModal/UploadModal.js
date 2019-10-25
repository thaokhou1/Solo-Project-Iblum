import React, { Component } from 'react'
import Modal from 'react-modal';
import UploadPictures from '../UploadPicture/UploadPicture';
import AudioUpload from '../AudioUpload/AudioUpload'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'


class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }
  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      newDescription: {
        ...this.state.newDescription,
        [propertyName]: event.target.value,
      }
    });


  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'POST_PIC', payload: this.state.newDescription });
    this.setState({
      newDescription: {
        img: '',
        date: '',
        location: '',
        audio: ''

      }
    });
    this.closeModal()
  }

  setImg = (imgUrl) => {
    this.setState({
      newDescription: {
        ...this.state.newDescription,
        img: imgUrl
      }
    })

  }
  setFile = (audioUrl) => {
    this.setState({
      newDescription: {
        ...this.state.newDescription,
        audio: audioUrl
      }
    })


  }
  render() {
    return (
      <div >
        <button className="button" onClick={this.openModal}>
          Upload Picture
      </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
                 Select image: <UploadPictures setPic={this.setImg} />
          Location: <input onChange={(event) => this.handleInputChangeFor(event, 'location')} />
          Date:<input type="date" onChange={(event) => this.handleInputChangeFor(event, 'date')} />
          Voice Clip: <AudioUpload setAudio={this.setFile} />
          <br></br>
          <div>
            <button onClick={this.handleSubmit}>Upload</button>
            <button className="dog" onClick={this.closeModal}>Close</button>
          </div>
       
   
   
        
        </Popup>
    
      </div>

    );
  }
}



const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});
export default connect(mapStateToProps)(UploadModal);