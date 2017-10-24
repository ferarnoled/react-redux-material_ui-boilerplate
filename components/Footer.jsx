import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { Button, List, ListItem, Divider, ListItemText, ListItemIcon } from 'material-ui';

import InboxIcon from 'material-ui-icons/Inbox';
import LoopIcon from 'material-ui-icons/Loop';
import ArchiveIcon from 'material-ui-icons/Archive';

import palette from '../src/material_ui_raw_theme_file';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const FILTER_ICONS = {
  [SHOW_ALL]: <InboxIcon />,
  [SHOW_ACTIVE]: <LoopIcon />,
  [SHOW_COMPLETED]: <ArchiveIcon />
};

class Footer extends Component {
  getCountForFilter(filter) {
    const { activeCount, completedCount } = this.props;
    if (filter === SHOW_ALL) return activeCount + completedCount;
    if (filter === SHOW_ACTIVE) return activeCount;
    if (filter === SHOW_COMPLETED) return completedCount;
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;
    const active = filter === selectedFilter;
    const count = this.getCountForFilter(filter);
    return (
      <ListItem key={filter} className={classnames({ selected: active })}
                style={{color: active ? palette.primaryColor : palette.textColor}}
                onTouchTap={() => onShow(filter)}
      >
        <ListItemIcon>
          {FILTER_ICONS[filter]}
        </ListItemIcon>
        <ListItemText primary={title + (count > 0 ? ' (' +  count + ')' : '')} />
      </ListItem>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <Button raised className="clear-completed"
                      onClick={onClearCompleted}
        >
          Clear completed
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <footer className="footer">
        <Divider style={{marginTop: 10}}/>
        <List className="filters">
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
          this.renderFilterLink(filter)
        )}
        </List>
        {this.renderClearButton()}
      </footer>
    );
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
};

export default Footer;
