'use strict';

const e = React.createElement;

// Define a React component called LikeButton
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Find the <div> we added to our HTML in the first step, 
// and then display our “Like” button React component inside of it
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);