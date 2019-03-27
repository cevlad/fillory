import React from 'react';
import SvgIcon from '../../SvgIcon';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';

class BasicBreadcrumb extends React.Component {
  state = {
    active: 'settings'
  };

  handleClick = active => {
    this.setState({ active });
  };

  render() {
    const { active } = this.state;
    return (
      <Breadcrumb>
        <BreadcrumbItem
          href="#/home"
          active={active === 'home'}
          onClick={() => this.handleClick('home')}
        >
          <SvgIcon viewBox="0 0 1024 1024">
            <path d="M101.803 350.336c-10.069 7.851-16.469 20.011-16.469 33.664v469.333c0 17.28 3.456 33.835 9.728 48.981 6.485 15.701 16 29.781 27.776 41.557s25.856 21.291 41.557 27.776c15.104 6.229 31.659 9.685 48.939 9.685h597.333c17.28 0 33.835-3.456 48.981-9.728 15.701-6.485 29.781-16 41.557-27.776s21.291-25.856 27.776-41.557c6.229-15.104 9.685-31.659 9.685-48.939v-469.333c-0.043-12.8-5.717-25.301-16.469-33.664l-384-298.667c-15.275-11.733-36.736-12.16-52.395 0zM682.667 896v-384c0-23.552-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667v384h-128c-5.845 0-11.349-1.152-16.299-3.2-5.205-2.133-9.899-5.333-13.867-9.301s-7.125-8.661-9.301-13.867c-2.048-4.949-3.2-10.453-3.2-16.299v-448.469l341.333-265.472 341.333 265.472v448.469c0 5.845-1.152 11.349-3.2 16.299-2.133 5.205-5.333 9.899-9.301 13.867s-8.661 7.125-13.867 9.301c-4.949 2.048-10.453 3.2-16.299 3.2zM426.667 896v-341.333h170.667v341.333z" />
          </SvgIcon>
        </BreadcrumbItem>
        <BreadcrumbItem
          title="Profile"
          href="#/home/profile"
          active={active === 'profile'}
          onClick={() => this.handleClick('profile')}
        />
        <BreadcrumbItem
          title="Settings"
          href="#home/profile/settings"
          active={active === 'settings'}
          onClick={() => this.handleClick('settings')}
        />
      </Breadcrumb>
    );
  }
}

export default BasicBreadcrumb;
