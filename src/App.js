import React from "react";
import { Container, Card } from "semantic-ui-react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";
//redux
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Container>
        <div className="center">
          <Card fluid>
            <Card.Content>
              <TodoForm />
            </Card.Content>
          </Card>
          <Todo />
        </div>
      </Container>
    </Provider>
  );
}

export default App;
