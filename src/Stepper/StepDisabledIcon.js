import React, { Component } from 'react';
import classNames from 'classnames';
import SvgIcon from '../SvgIcon';
import styles from './StepDisabledIcon.module.sass';

class StepDisabledIcon extends Component {
  render() {
    const { className, ...other } = this.props;

    const classes = classNames(className, styles.root);

    return (
      <SvgIcon className={classes} viewBox="0 0 1024 1024" {...other}>
        <path d="M213.333 512h597.333c5.845 0 11.349 1.152 16.299 3.2 5.205 2.133 9.899 5.333 13.867 9.301s7.125 8.661 9.301 13.867c2.048 4.949 3.2 10.453 3.2 16.299v298.667c0 5.845-1.152 11.349-3.2 16.299-2.133 5.205-5.333 9.899-9.301 13.867s-8.661 7.125-13.867 9.301c-4.949 2.048-10.453 3.2-16.299 3.2h-597.333c-5.845 0-11.349-1.152-16.299-3.2-5.205-2.133-9.899-5.333-13.867-9.301s-7.125-8.661-9.301-13.867c-2.048-4.949-3.2-10.453-3.2-16.299v-298.667c0-5.845 1.152-11.349 3.2-16.299 2.133-5.205 5.333-9.899 9.301-13.867s8.661-7.125 13.867-9.301c4.949-2.048 10.453-3.2 16.299-3.2zM768 426.667v-128c0-34.603-6.869-67.712-19.413-97.92-12.971-31.36-32-59.52-55.595-83.115s-51.755-42.581-83.115-55.595c-30.165-12.501-63.275-19.371-97.877-19.371s-67.712 6.869-97.92 19.413c-31.36 12.971-59.52 32-83.115 55.552s-42.581 51.755-55.552 83.115c-12.544 30.208-19.413 63.317-19.413 97.92v128h-42.667c-17.28 0-33.835 3.456-48.981 9.728-15.701 6.485-29.781 16-41.557 27.776s-21.291 25.856-27.776 41.557c-6.229 15.104-9.685 31.659-9.685 48.939v298.667c0 17.28 3.456 33.835 9.728 48.981 6.485 15.701 16 29.781 27.776 41.557s25.856 21.291 41.557 27.776c15.104 6.229 31.659 9.685 48.939 9.685h597.333c17.28 0 33.835-3.456 48.981-9.728 15.701-6.485 29.781-16 41.557-27.776s21.291-25.856 27.776-41.557c6.229-15.104 9.685-31.659 9.685-48.939v-298.667c0-17.28-3.456-33.835-9.728-48.981-6.485-15.701-16-29.781-27.776-41.557s-25.856-21.291-41.557-27.776c-15.104-6.229-31.659-9.685-48.939-9.685zM341.333 426.667v-128c0-23.211 4.608-45.227 12.928-65.237 8.619-20.864 21.333-39.637 37.077-55.424s34.56-28.459 55.424-37.077c20.011-8.32 42.027-12.928 65.237-12.928s45.227 4.608 65.237 12.928c20.864 8.619 39.637 21.333 55.424 37.077s28.459 34.56 37.077 55.424c8.32 20.011 12.928 42.027 12.928 65.237v128z" />
      </SvgIcon>
    );
  }
}

export default StepDisabledIcon;
