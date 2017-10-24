import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import { ListItem, IconButton, MenuItem, ListItemText, ListItemSecondaryAction, Checkbox } from 'material-ui';
import { Menu } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/ArrowDropDown';
import EditDeleteMenu from './EditDeleteMenu';
import CheckBoxIcon from 'material-ui/svg-icons/CheckBox';
import CheckBoxBlankIcon from 'material-ui/svg-icons/CheckBox';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleEdit = () => {
    this.setState({ editing: true });
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    /*
    const rightIconMenu = (
      <IconMenu iconButtonElement={
          <IconButton>
            <MoreVertIcon color={'#EEEEEE'} />
          </IconButton>
        }
      >
        <MenuItem primaryText="Edit" onTouchTap={this.handleEdit.bind(this)}/>
        <MenuItem primaryText="Delete" onTouchTap={() => deleteTodo(todo.id)}/>
      </IconMenu>
    );
*/
    /*
    const rightIconMenu = (
        <div>
          <IconButton
              aria-label="More"
              aria-owns={this.state.open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu>
            id="long-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                    width: 200
              }
            }}
          >
            <MenuItem onClick={this.handleEdit.bind(this)}>Edit</MenuItem>
            <MenuItem onClick={() => deleteTodo(todo.id)}>Delete</MenuItem>
          </Menu>
        </div>
    );
*/
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                      editing={this.state.editing}
                      onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <ListItem key={todo.id}
                  onTouchTap={() => completeTodo(todo.id)}
                  //leftIcon={todo.completed ? <CheckBoxIcon /> : <CheckBoxBlankIcon />}
                  //rightIconButton={rightIconMenu}
        >
          <Checkbox
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
          />
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction>
            <EditDeleteMenu
                onHandleEdit ={this.handleEdit}
                onHandleDelete = {this.handleDelete}/>
          </ListItemSecondaryAction>
        </ListItem>
      );
    }

    return (
      <div className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}>
        {element}
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
