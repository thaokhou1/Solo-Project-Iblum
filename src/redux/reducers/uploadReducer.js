const pictureList = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PICTURE':
        return action.payload;
  default:
        return state;
    }
  };

 

  export default pictureList;