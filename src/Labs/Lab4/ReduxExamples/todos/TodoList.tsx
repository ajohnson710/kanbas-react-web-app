import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group" style={{ width: "25%" }}>
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}
            </ul>
            <hr />
        </div>)
};