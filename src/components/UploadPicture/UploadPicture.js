import React, { Component } from 'react'
import { connect } from 'react-redux'


class Uploadimages extends Component {


  onChange = (e) => {
    let image = e.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(image[0]);
    reader.onload = (e) => {

      const formData = { image: e.target.result }
      this.props.setPic(formData);
    }
  }


  render() {
    return (
      <div>
        <input type="file" name="image" onChange={(e) => this.onChange(e)} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  errors: state.errors,
});
export default connect(mapStateToProps)(Uploadimages);