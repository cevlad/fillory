import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box/Box';
import './Tabs.sass';

class Tabs extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  getChildrenProps = () => {
    const tabs = [];

    React.Children.forEach(this.props.children, child => {
      if (typeof child !== 'object' || !child.props) {
        return;
      }

      tabs.push(child.props);
    });

    return tabs;
  };

  handleTabClick = value => {
    this.props.onChange(value);
  };

  renderTab = ({ disabled, title, value }) => {
    const classes = classNames('flr-tabs__tab', {
      'flr-tabs__tab_disabled': disabled,
      'flr-tabs__tab_active': value === this.props.value
    });

    return (
      <button
        key={value}
        className={classes}
        type="button"
        tabIndex={0}
        disabled={disabled}
        onClick={() => this.handleTabClick(value)}
      >
        {title}
      </button>
    );
  };

  render() {
    const { className, value, children, onChange, ...other } = this.props;

    const classes = classNames(className, 'flr-tabs');

    const tabs = this.getChildrenProps();

    const { children: content } = tabs.find(tab => tab.value === value) || {};

    return (
      <div className={classes} {...other}>
        <Box className="flr-tabs__tab-list">
          {tabs.map(tab => this.renderTab(tab))}
        </Box>
        <div className="flr-tabs__content">{content}</div>
      </div>
    );
  }
}

export default Tabs;
