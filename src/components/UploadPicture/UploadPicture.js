import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class UploadPictures extends Component {
 constructor(props){
   super(props);
   this.state = {
     picture: ''
   }
 }

 onChange=(e)=>{
   let picture =e.target.files;
   console.log(picture)
   
   let reader= new FileReader();
   reader.readAsDataURL(picture[0]);

   reader.onload=(e)=>{
     console.log("picture data" , e.target.result);
     const url='/api/image'
     const formData ={picture:e.target.result}
    console.log((formData).toString());
     
     return axios.post (url, formData)
     .then(response=> console.log('result', response))
     .catch(error => console.log('err', error)
     )
   }
 }


 render(){
   return(
     <div>
       <input type="file" name="picture" onChange= {(e)=>this.onChange(e)}/>
     </div>
   )
 }
}
    const mapStateToProps = state => ({
      errors: state.errors,
    });
export default connect(mapStateToProps) (UploadPictures);