import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* uploadPicture(action) {
  try { 
    console.log('uploadSaga', action.payload);
    

    yield axios.post('/api/picture', action.payload);

  } catch (error) {
      console.log('Error with  picture post', error);
   
  }
}

function* uploadPictureSaga() {
  yield takeLatest('UPLOAD', uploadPicture);
}

export default uploadPictureSaga;
