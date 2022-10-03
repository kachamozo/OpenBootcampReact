import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/TaskForm';
import TaskComponent from '../pure/Task';

function TaskList() {
	const defaultTask1 = new Task(
		'Example 1',
		'Description 1',
		true,
		LEVELS.NORMAL
	);
	const defaultTask2 = new Task(
		'Example 2',
		'Description 2',
		true,
		LEVELS.URGETN
	);
	const defaultTask3 = new Task(
		'Example 3',
		'Description 3',
		false,
		LEVELS.BLOCKING
	);

	// Estado del componente
	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setLoading] = useState(true);

	// Control del ciclo de vida del componente
	useEffect(() => {
		console.log('El estado de la tarea ha sido modificado');
		setLoading(false);
		return () => {
			console.log('El componente TaskList se va desmontar');
		};
	}, [tasks]);

	const completeTask = (task) => {
		console.log('Complete this Task: ', task);
		/**
		 * Buscamos el indice de la tarea
		 */
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks[index].completed = !tempTasks[index].completed;
		setTasks(tempTasks);
	};

	const deleteTask = (task) => {
		console.log('Delete this Task: ', task);
		/**
		 * Buscamos el indice de la tarea
		 */
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks.splice(index, 1);
		setTasks(tempTasks);
	};

	const addTask = (task) => {
		console.log('Add this Task: ', task);
		const tempTasks = [...tasks];
		tempTasks.push(task);
		setTasks(tempTasks);
	};

	return (
		<div>
			<div className='col-12'>
				<div className='card'>
					{/* Card Header */}
					<div className='card-header p-3'>
						<h5>Your task:</h5>
					</div>
					{/* Card Body (Content) */}
					<div
						className='card-body'
						data-mdb-perfect-scrollbar='true'
						style={{ position: 'relative', height: '400px' }}
					>
						<table>
							<thead>
								<tr>
									<th scope='col'>Title</th>
									<th scope='col'>Description</th>
									<th scope='col'>Priority</th>
									<th scope='col'>Actions</th>
								</tr>
							</thead>
							<tbody>
								{/* TODO: iterar sobre una lista de tareas */}
								{tasks.map((task, index) => {
									return (
										<TaskComponent
											key={index}
											task={task}
											completed={completeTask}
											remove={deleteTask}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<TaskForm add={addTask} />
		</div>
	);
}

export default TaskList;
