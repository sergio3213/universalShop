import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../../redux/actions';

class ComponenteContador extends React.Component {
  render() {
    const { dispatch, countState } = this.props;

    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={()=>dispatch(actionCreator())}>Increment1</button>
        <button>Increment5</button> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.resultSearch,
});

export default connect(mapStateToProps)(ComponenteContador);
