import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Picture.css'
import moment from 'moment'

class PictureItem extends Component {
    removepicture = () => {
        this.props.dispatch({ type: 'DELETE', payload: this.props.image.id });
    }
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    render() {
        return (
            <li >

                <div className="container" >
                    <img  src={this.props.image.image} width="320" height="320" />
                    <div class="overlay">
                    <h3> {moment(this.props.image.date).format('MM/DD/YYYY')}</h3>
                    <h3>{this.props.image.location}</h3>
                    <button onClick={this.playAudio}>
                        <span>Play Audio</span>
                    </button>
                    <br></br>
                    <audio className="audio-element">
                        <source src={this.props.image.audio}></source>
                    </audio>
                    <button onClick={this.removepicture}>Delete</button>
                    </div>
                </div>
            </li>
            /*--------second layout------ */
            //      <div className="flip-box">
            //         <div className="flip-box-inner">
            // <li >

            //     <div className="flip-box-front">
            //     <img className="cardImg" src={this.props.image.image} />
            //     </div>
            //     <div className="flip-box-back">
            //     <h3> {moment(this.props.image.date).format('MM/DD/YYYY')}</h3>
            //     <h3>{this.props.image.location}</h3>
            //     <button onClick={this.playAudio}>
            //         <span>Play Audio</span>
            //     </button>
            //     <br></br>
            //     <audio className="audio-element">
            //         <source src={this.props.image.audio}></source>
            //     </audio>
            //     <button onClick={this.removepicture}>Delete</button>
            //     </div>
            // </li>
            // </div>
            //     </div>
            /* ------- First lay out-------*/
            /* // <div>
            //     <div className="flip-box">
            //         <div className="flip-box-inner">
            //             <div className="flip-box-front">
            //                 <img src={this.props.image.image} width="220" height="220" />
            //             </div>
            //             <div className="flip-box-back">
            //                 {moment(this.props.image.date).format('MM/DD/YYYY')}
            //                 {this.props.image.location}
            //                 <button onClick={this.playAudio}>
            //                     <span>Play Audio</span>
            //                 </button>
            //                 <audio className="audio-element">
            //                     <source src={this.props.image.audio}></source>
            //                 </audio>
            //                 <button onClick={this.removepicture}>Delete</button>
            //             </div>
            //         </div>
            //     </div>
            //     <br></br>
            // </div> */
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});
export default connect(mapStateToProps)(PictureItem);