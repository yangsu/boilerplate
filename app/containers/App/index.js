import React from 'react';

import styles from './styles.css';

export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.container}>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
