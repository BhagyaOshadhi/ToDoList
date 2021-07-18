import React, { Fragment } from "react";
import { useState, State } from "@hookstate/core";
import { none } from "@hookstate/core";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}
const HookstrateToDoAp: React.FC = () => {
  const value = useState("");
  const todos: State<ITodo[]> = useState([] as ITodo[]);

  return (
    <>
      <h3> Using React Hookstate</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          todos[todos.length].set({ text: value.get(), complete: false });
          value.set("");
        }}
      >
        <input
          type="text"
          value={value.get()}
          onChange={(e) => value.set(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo, index: number) => {
          return (
            <Fragment key={index}>
              <div
                style={{
                  textDecoration: todo.complete.get() ? "line-through" : "",
                }}
              >
                {todo.text.get()}
              </div>
              <button
                type="button"
                onClick={() => {
                  todos[index].complete.set(!todos[index].complete.get());
                }}
              >
                {todo.complete ? "Complete" : "Incomplete"}
              </button>
              <button
                type="button"
                onClick={() => {
                  todos[index].set(none);
                }}
              >
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
    </>
  );
};
export default HookstrateToDoAp;
