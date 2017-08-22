import React, {Component} from 'react';


export default (OriginalComponent) => class Accordion extends Component {
  state = {
    openItemId: null
  };

  render() {
    return (
      <OriginalComponent
        {...this.props}
        openItemId={this.state.openItemId}
        toggleOpenItem={this.toggleOpenItem}
      />
    );
  }

  toggleOpenItem = (itemId) => (e) => {
    this.setState({
      openItemId: itemId === this.state.openItemId ? null : itemId
    });
  };
}