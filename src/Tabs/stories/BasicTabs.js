import React from 'react';
import Tab from '../Tab';
import Tabs from '../Tabs';

import styles from './Stories.module.sass';

class BasicTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'tab1'
    };
  }

  handleChange = value => {
    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;

    return (
      <Tabs value={value} onChange={this.handleChange}>
        <Tab title="Tab 1" value="tab1">
          <div className={styles.content}>Content of Tab 1</div>
        </Tab>
        <Tab title="Tab 2" value="tab2">
          <div className={styles.content}>Content of Tab 2</div>
        </Tab>
        <Tab title="Tab 3" value="tab3">
          <div className={styles.content}>Content of Tab 3</div>
        </Tab>
        <Tab title="Tab 4" value="tab4">
          <div className={styles.content}>Content of Tab 4</div>
        </Tab>
      </Tabs>
    );
  }
}

export default BasicTabs;
