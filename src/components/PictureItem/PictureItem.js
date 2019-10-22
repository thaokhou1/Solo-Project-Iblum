import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router} from 'react-router-dom';
// import {withRouter} from 'react-router'


class PictureItem extends Component {
    removepicture = () =>{
        this.props.dispatch({ type: 'DELETE', payload: this.props.image.id});
    }
    render() {
        return (
        
                <tr>
                    <td><img src={this.props.image.image} width="320" height="320"/></td>
                    <td>{this.props.image.date}</td>
                    <td>{this.props.image.location}</td>
              
                    <td><button onClick={this.removepicture}>Delete</button></td>
               </tr>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
  });
export default connect(mapStateToProps)(PictureItem);