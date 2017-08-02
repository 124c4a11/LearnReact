import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
  state = {
    openItemId: null
  };

  render() {
    return <OriginalComponent {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId} />
  };

  toggleOpenItem = (openItemId) => (e) => {
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    });
  };
}