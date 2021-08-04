import React from "react";
import { Container } from "semantic-ui-react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

//redux
import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
      <Container>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
