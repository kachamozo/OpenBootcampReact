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
		console.log('Task State has been modified');
		setLoading(false);
		return () => {
			console.log('TaskList component is going to unmount...');
		};
	}, [tasks]);

	const changeCompleted = (id) => {
		console.log('TODO: Cambiar estado de una tarea');
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
									return <TaskComponent key={index} task={task} />;
								})}
							</tbody>
						</table>
					</div>
					<TaskForm />
				</div>
			</div>
		</div>
	);
}

export default TaskList;
