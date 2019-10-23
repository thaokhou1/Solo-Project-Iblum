import React, { Component } from 'react'
import { connect } from 'react-redux'


class AudioUpload extends Component {
    onChange = (e) => {
        let audio = e.target.files;
        console.log(audio)

        let reader = new FileReader();
        reader.readAsDataURL(audio[0]);
      

        reader.onload = (e) => {
            console.log("audio data", e.target.result);
            const formData = { audio: e.target.result }
            this.props.setAudio(formData);


        }
    }


    render() {
        return (
            <div>
                <input type="file" name="audio" onChange={(e) => this.onChange(e)} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
});
export default connect(mapStateToProps)(AudioUpload);