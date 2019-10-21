import React, {Component} from 'react'
import {connect} from 'react-redux'

class UploadPictures extends Component {
  state={
    selectedFile: ''
  }
    handleChange = (event)=>{
      this.setState={
       selectedFile:  event.target.files
      }
    }
    
      render() {
        return (
          <div >
              <input type='file' onChange={this.handleChange}/>
          </div>
        );
      }
    }
    const mapStateToProps = state => ({
      errors: state.errors,
    });
export default connect(mapStateToProps) (UploadPictures);