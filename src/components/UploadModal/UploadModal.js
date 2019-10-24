import React, { Component } from 'react'
import Modal from 'react-modal';
import UploadPictures from '../UploadPicture/UploadPicture';
import AudioUpload from '../AudioUpload/AudioUpload'
import { connect } from 'react-redux'

class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      newDescription: {
        img: '',
        date: '',
        location: '',
        audio: '',
        // user_id: this.props.user.id
      }
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      newDescription: {
        ...this.state.newDescription,
        [propertyName]: event.target.value,
      }
    });
    console.log(this.state.newDescription);

  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello from the upload btn');
    this.props.dispatch({ type: 'POST_PIC', payload: this.state.newDescription });
    this.setState({
      newDescription: {
        img: '',
        date: '',
        location: '',
        audio: ''

      }
    });
    this.handleCloseModal()
  }

  setImg = (imgUrl) => {
    this.setState({
      newDescription: {
        ...this.state.newDescription,
        img: imgUrl
      }
    })
    console.log(this.state.newDescription)
  }
  setFile = (audioUrl) => {
    this.setState({
      newDescription: {
        ...this.state.newDescription,
        audio: audioUrl
      }
    })
    console.log(this.state.newDescription)

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


            Select image: <UploadPictures setPic={this.setImg} />
            Location: <input onChange={(event) => this.handleInputChangeFor(event, 'location')} />
            Date:<input type="date" onChange={(event) => this.handleInputChangeFor(event, 'date')} />
            Voice Clip: <AudioUpload setAudio={this.setFile} />

          </div>
          <br></br>
          <div>
            <button onClick={this.handleSubmit}>Upload</button>
            <button onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});
export default connect(mapStateToProps)(UploadModal);