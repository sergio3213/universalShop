const INITIAL_STATE = {
  valorPesquisa: '',
  contadorClickButton:0
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { resultSearch: action.payload[0], contadorClickButton: action.payload[1]+1 };
    default: return state;
  }
}

export default counterReducer;