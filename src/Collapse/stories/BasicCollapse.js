import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../Collapse';
import CollapsePanel from '../CollapsePanel';
import styles from './BasicCollapse.module.sass';

class BasicCollapse extends Component {
  static propTypes = {
    accordion: PropTypes.bool,
    disabledPanel: PropTypes.bool,
    openPanels: PropTypes.bool
  };

  static defaultProps = {
    accordion: false,
    disabledPanel: false,
    openPanels: false
  };

  state = {
    value: this.props.openPanels ? [1, 2] : []
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { accordion, disabledPanel } = this.props;

    return (
      <div>
        <Collapse
          value={value}
          onChange={this.handleChange}
          accordion={accordion}
        >
          <CollapsePanel title="Panel 1">
            <div className={styles.content}>
              Parish so enable innate in formed missed. Hand two was eat busy
              fail. Stand smart grave would in so. Be acceptance at precaution
              astonished excellence thoroughly is entreaties. Who decisively
              attachment has dispatched. Fruit defer in party me built under
              first. Forbade him but savings sending ham general. So play do in
              near park that pain.
            </div>
          </CollapsePanel>
          <CollapsePanel title="Panel 2" disabled={disabledPanel}>
            <div className={styles.content}>
              Started several mistake joy say painful removed reached end. State
              burst think end are its. Arrived off she elderly beloved him
              affixed noisier yet. An course regard to up he hardly. View four
              has said does men saw find dear shy. Talent men wicket add garden.
            </div>
            <div className={styles.content}>
              Perceived end knowledge certainly day sweetness why cordially. Ask
              quick six seven offer see among. Handsome met debating sir
              dwelling age material. As style lived he worse dried. Offered
              related so visitor we private removed. Moderate do subjects to
              distance.
            </div>
          </CollapsePanel>
          <CollapsePanel title="Panel 3">
            <div className={styles.content}>
              When be draw drew ye. Defective in do recommend suffering. House
              it seven in spoil tiled court. Sister others marked fat missed did
              out use. Alteration possession dispatched collecting instrument
              travelling he or on. Snug give made at spot or late that mr.
            </div>
          </CollapsePanel>
        </Collapse>
      </div>
    );
  }
}

export default BasicCollapse;
