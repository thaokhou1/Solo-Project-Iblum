import React, { Component } from 'react';
import { connect } from 'react-redux';
import PictureItem from '../PictureItem/PictureItem';


class DisplayPicture extends Component {
    componentDidMount() {
        this.getPicture();
    }

    getPicture() {
        this.props.dispatch({ type: 'GET_PIC' })

    }

  
    render() {
        return (
            <div>
                {this.props.reduxState.pictureList.map((image) => {
                        console.log('imagine', image.audio);

                    return (                       
                        <PictureItem key={image.id} image={image} getPicture={this.getPicture} />
                    )
                })}
            </div>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(DisplayPicture);