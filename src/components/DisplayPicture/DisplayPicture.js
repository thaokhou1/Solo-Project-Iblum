import React, { Component } from 'react';
import { connect } from 'react-redux';
import PictureItem from '../PictureItem/PictureItem';


class DisplayPicture extends Component {
    componentDidMount() {
        this.getPicture();
    }

    getPicture=()=> {
        this.props.dispatch({ type: 'GET_PIC' });

    }
    render() {
        return (
            <ul>
                {this.props.reduxState.pictureList.map((image) => {
                    return (                       
                        <PictureItem key={image.id} image={image} getPicture={this.getPicture} />
                    )
                })}
            </ul>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
   
});
export default connect(mapStateToProps)(DisplayPicture);