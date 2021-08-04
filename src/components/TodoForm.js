import React, { useState } from "react";
import { v4 } from "uuid";
import { Form, Button } from "semantic-ui-react";
//redux

import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);
    setTitle("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          type="text"
          label="Todo Title"
          placeholder="Your next todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

//This is closure.
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
