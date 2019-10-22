 const pictureState = (state = [], action) => {
    switch (action.type) {
      case 'PIC_STATE':
        return action.payload;
      default:
        return state;
    }
  };

  export default pictureState;