import React, { Component } from 'react';
import {
  Button,
  CardActions,
  FileUpload,
  LinearProgress,
  Snackbar,
  TextField,
} from 'react-md';


class UploadPicture extends Component {
  state = {
    sending: false,
    toasts: [],
    fileName: '',
    progress: null,
    uploadProgress: undefined,
    fileSize: 0,
  };

  componentWillUnmount() {
    if (this.progressTimeout) {
      clearTimeout(this.progressTimeout);
    }

    if (this.uploadProgressTimeout) {
      clearTimeout(this.uploadProgressTimeout);
    }
  }

  progressTimeout = null;
  uploadProgressTimeout = null;

  handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const file = data.get('file');
    if (!file || !file.name) {
      this.addToast('A file is required.');
      return;
    }

   

    this.setState({ sending: true });
  };



  handleProgress = (file, progress) => {
    this.setState({ progress });
  };

  handleLoad = ({ name, size }) => {
    this.progressTimeout = setTimeout(() => {
      this.progressTimeout = null;
      this.setState({ progress: null });
    }, 500);
    this.setState({ fileName: name, fileSize: size });
  };

  handleLoadStart = () => {
    this.setState({ progress: 0 });
  };

  addToast = (text) => {
    const toasts = [{ text, action: 'Ok' }];
    this.setState({ toasts });
  };

  dismiss = () => {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  };

  handleReset = () => {
    this.setState({ fileName: '' });
  };

  render() {
    const {
      toasts,
      fileName,
      progress,
      sending,
      uploadProgress,
    } = this.state;

    let progressBar;
    if (typeof progress === 'number') {
      progressBar = (
        <span className="file-inputs__upload-form__progress">
          <LinearProgress id="file-upload-status" value={progress} />
        </span>
      );
    } else if (sending || typeof uploadProgress === 'number') {
      progressBar = (
        <span className="file-inputs__upload-form__progress">
          <LinearProgress id="file-upload-server-status" query value={uploadProgress} />
        </span>
      );
    }

    return (
      <form
    
      >
        {progressBar}
        <FileUpload
          id="server-upload-file"
          
          required
          accept="image/*,video/*"
          onLoad={this.handleLoad}
          onLoadStart={this.handleLoadStart}
          onProgress={this.handleProgress}
          name="file"
          className="file-inputs__upload-form__file-upload"
          primary
          iconBefore
        />
 
          <Button type="reset" flat className="md-cell--right">Reset</Button>
      </form>
    );
  }
}

export default UploadPicture;