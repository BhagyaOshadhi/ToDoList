import React, { Fragment, useState } from "react";
type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

const ReactHooksToDoApp = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  console.log(todos);

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    // switch complete state
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    // newTodos = todos.filter((todo: ITodo) => todo !== newTodos[index]); This also work but must `let newTodos`
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h3> Using React Hooks</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.text}
              </div>
              <button type="button" onClick={(): void => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={(): void => deleteTodo(index)}>
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};
export default ReactHooksToDoApp;
