import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Uploadimages extends Component {
//  constructor(props){
//    super(props);
//    this.state = {
//      image: ''
//    }
//  }

 onChange=(e)=>{
   let image =e.target.files;
   console.log(image)
   
   let reader= new FileReader();
   reader.readAsDataURL(image[0]);

   reader.onload=(e)=>{
     console.log("image data" , e.target.result);
     const url='/api/picture'
     const formData ={image:e.target.result}
    console.log((formData).toString());
     
     return axios.post ( url,formData)
     .then(response=> console.log('result', response))
     .catch(error => console.log('err', error)
     )
   }
 }


 render(){
   return(
     <div>
       <input type="file" name="image" onChange= {(e)=>this.onChange(e)}/>
     </div>
   )
 }
}
    const mapStateToProps = state => ({
      errors: state.errors,
    });
export default connect(mapStateToProps) (Uploadimages);