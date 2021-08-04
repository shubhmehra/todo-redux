import React from "react";
import { List, Icon, Card } from "semantic-ui-react";

//redux
import { connect } from "react-redux";
import { removeTodo } from "../action/todo";

const Todo = ({ todos, markComplete }) => {
  return (
    <div>
      {todos.length > 0 ? (
        <Card fluid>
          <Card.Content>
            <List divided verticalAlign="middle">
              {todos.map((todo) => (
                <List.Item key={todo.id} style={{ padding: "1rem" }}>
                  <List.Content floated="right">
                    <span onClick={() => markComplete(todo.id)}>
                      <Icon size="large" color="green" name="clipboard check" />
                    </span>
                  </List.Content>
                  <List.Content>{todo.title}</List.Content>
                </List.Item>
              ))}
            </List>
          </Card.Content>
        </Card>
      ) : (
        "No task available"
      )}
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
