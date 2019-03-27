import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Breadcrumb.module.sass';
import BreadcrumbSeparator from './BreadcrumbSeparator';

class Breadcrumb extends Component {
  static propTypes = {
    component: PropTypes.elementType,
    separator: PropTypes.elementType
  };

  static defaultProps = {
    component: 'nav',
    separator: BreadcrumbSeparator
  };

  static FLR_BREADCRUMB = true;

  render() {
    const {
      className,
      component: Root,
      separator: Separator,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, styles.root);

    const items = [];

    const childrenCount = Children.count(children);

    Children.forEach(children, (child, index) => {
      const { type: { FLR_BREADCRUMB_ITEM } = {} } = child || {};

      if (!FLR_BREADCRUMB_ITEM) {
        return;
      }

      items.push(child);

      if (childrenCount !== index + 1) {
        // eslint-disable-next-line
        items.push(<Separator key={`separator_${index}`} />);
      }
    });

    return (
      <Root className={classes} {...other}>
        {items}
      </Root>
    );
  }
}

export default Breadcrumb;
