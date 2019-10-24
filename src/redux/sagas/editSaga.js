import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateAccount(action) {
  try {
    yield axios.put('/api/user/update', action.payload);
    console.log('PUT REQ:', action.payload)

  } catch (err) {
    console.log('PUT ERROR:', err);
  }
}


function* deleteAccount(action) {
  try {
    yield axios.delete('/api/user/delete' + action.payload);

  } catch (err) {
    console.log('DELETE ERROR:', err);
  }
}

function* editSaga() {
  yield takeLatest('UPDATE', updateAccount);
  yield takeLatest('DELETE', deleteAccount);

}

export default editSaga;