import React, { useState } from 'react';
import Item from './Item';
import TodoForm from "./TodoForm";
import Nav from "./Nav";

const Todo = () => {


	const initialState = [
		{
			text: 'Learn Hooks',
			isCompleted: false
		},

		{
			text: 'Get the JS Book',
			isCompleted: false
		},

		{
			text: 'Learn JavaScript',
			isCompleted: false
		},
	];


	const [ todos, setTodos ] = useState( initialState );

	const addToDo = ( text ) => {
		const newToDos = [ ...todos, { text } ];
		setTodos( newToDos );
	};

	const handleItemClick = ( index ) => {
		const newTodos = [ ...todos ];

		newTodos[ index ].isCompleted = ! newTodos[ index ].isCompleted;

		setTodos( newTodos );
	};

	const handleRemoveClick = ( index ) => {
		const newTodos = [ ...todos ];

		newTodos.splice( index, 1 );

		setTodos( newTodos );
	};


	return (
		<React.Fragment>
			<Nav/>
			<div className="todo-container">
				<h2 className="main-heading">Todo App</h2>
				<TodoForm addToDo={addToDo}/>
				<div className="todo-list">
					{ todos.length ? (
						todos.map( ( item, index ) => (
							<Item
								key={`${ item.text }-${ index }`}
								todo={ item }
								index={ index }
								handleItemClick={ handleItemClick }
								handleRemoveClick={handleRemoveClick}
							/>
						) )
					) : '' }
				</div>
			</div>
		</React.Fragment>
	);
};

export default Todo;
