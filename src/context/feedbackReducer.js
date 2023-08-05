const feedbackReducer = (state, action) => {
    switch (action.type) {
      case 'SET_INITIAL_STATE':
        return {
          ...state,
          text: action.payload.text,
          btnDisabled: action.payload.btnDisabled,
          message: action.payload.message,
          rating: action.payload.rating,
        };
      case 'SET_TEXT':
        return { ...state, text: action.payload };
      case 'SET_BTN_DISABLED':
        return { ...state, btnDisabled: action.payload };
      case 'SET_MESSAGE':
        return { ...state, message: action.payload };
      case 'SET_RATING':
        return { ...state, rating: action.payload };
      default:
        return state;
    }
  };
  
  export { feedbackReducer };
  