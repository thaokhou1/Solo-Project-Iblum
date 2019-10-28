import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* uploadSaga() {
  yield takeLatest('GET_PIC', grabPic);
  yield takeLatest('POST_PIC', uploadPicture);
  yield takeLatest('DELETE', deletePic);
  yield takeLatest('SET_PIC_STATE', setPicture);


}

function* setPicture(action) {
  yield put({ type: 'PIC_STATE', payload: action.payload })

}

function* uploadPicture(action) {
  try {
    yield axios.post('/api/picture', action.payload);
    yield grabPic();
  } catch (error) {
    console.log('Error with  picture post', error);

  }
}

function* deletePic(action) {
  try {
yield axios.delete('/api/picture/' + action.payload);
yield grabPic();
  } catch (err) {
    console.log('DELETE ERROR:', err);
  }
}

function* grabPic() {
  try {
    const response = yield axios.get(`/api/picture`);
    yield put({ type: 'ADD_PICTURE', payload: response.data })



  } catch (err) {
    console.log('GET ERROR:', err);
  }
}






export default (uploadSaga);
