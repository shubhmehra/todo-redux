import React from "react";
import { List, Icon } from "semantic-ui-react";

//redux
import { connect } from "react-redux";
import { REMOVE_TODO } from "../action/action-types";

const Todo = ({ todos, markComplete }) => {
  return (
    <div>
      <List divided verticalAlign="middle">
        {todos.map((todo) => (
          <List.Item key={todo.id}>
            <List.Content floated="right">
              <span onClick={() => markComplete(todo.id)}>
                <Icon disabled name="check" />
              </span>
            </List.Content>
            <List.Content>{todo.title}</List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
