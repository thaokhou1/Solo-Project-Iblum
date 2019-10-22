import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* uploadPicture(action) {
  try {
    yield axios.post('/api/picture', action.payload);
  
  } catch (error) {
    console.log('Error with  picture post', error);

  }
}

function* deletePic(action) {
  try {
    yield axios.delete('/api/picture/' + action.payload);


  } catch (err) {
    console.log('DELETE ERROR:', err);
  }
}

function* grabPic(action) {
  try {
    const response = yield axios.get('/api/picture');
    yield put({ type: 'ADD_PICTURE', payload: response.data })



  } catch (err) {
    console.log('DELETE ERROR:', err);
  }
}

function* grabImage(action) {
  try {
    const response = yield axios.get('/api/image');
    yield put({ type: 'ADD_IMAGE', payload: response.data })



  } catch (err) {
    console.log('GET IMAGE ERROR:', err);
  }
}


function* uploadSaga() {
  yield takeLatest('GET_PIC', grabPic);
  yield takeLatest('POST_PIC', uploadPicture);
  yield takeLatest('DELETE', deletePic);
  yield takeLatest('GET_IMAGE', grabImage);

}

export default uploadSaga;
