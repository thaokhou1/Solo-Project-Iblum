import React, { Component } from 'react'
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class UploadPicture extends Component {

    render() {
        return (
            <div >
         
                <FilePond />
            </div>
        )
    }

}



    export default UploadPicture;