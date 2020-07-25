import React, { Component } from 'react';
import styles from './AppLayout.module.css';
import Footer from './Footer/footer';
// CUSTOM COMPONENTS

class AppLayout extends Component {
  render() {
    return (
      <div className={styles.site}>
        <div className={styles['site-hd']}></div>
        <div className={styles['site-bd']}>
          <div className="container">{this.props.children}</div>
        </div>
        <div className={styles['site-ft']}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AppLayout;
