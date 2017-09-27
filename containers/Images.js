import React, { Component } from 'react';
import { connect } from 'react-redux';

// export default class Images extends Component {
//   render () {
//     return (
//       <div>Images 2.0</div>
//     );
//   }
// }
class Images extends Component {
  render () {
    return (
      <div>{this.props.user.email}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toker: state.app.token,
    user: state.user
  }
}

export default connect(mapStateToProps)(Images);
