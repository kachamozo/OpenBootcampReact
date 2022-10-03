import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import('../../styles/task.scss');

function TaskComponent({ task, completed, remove }) {
	useEffect(() => {
		console.log('Created Task');
		return () => {
			console.log(`Task: ${task.name} is going to unmount`);
		};
	}, [task]);

	/**
	 *
	 * @returns taskLevelBadge: Funcion que retorna un badge de color
	 * dependiendo del tipo de level
	 */

	const taskLevelBadge = () => {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-primary'>{task.level}</span>
					</h6>
				);
			case LEVELS.URGETN:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-warning'>{task.level}</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-danger'>{task.level}</span>
					</h6>
				);

			default:
				break;
		}
	};

	/**
	 *
	 * @returns taskIconCompleted: Funcion que retorna el icocno dependiendo
	 * si esta completado o no
	 */
	const taskIconCompleted = () => {
		if (task.completed) {
			return (
				<i
					onClick={() => completed(task)}
					className='bi-toggle-on text-success task-action'
				/>
			);
		} else {
			return (
				<i
					onClick={() => completed(task)}
					className='bi-toggle-off task-action'
				/>
			);
		}
	};
	return (
		<tr className='fw-normal'>
			<th>
				<span className='ms-2'>{task.name}</span>
			</th>
			<td>
				<span className='align-middle'>{task.description}</span>
			</td>
			<td>
				{/* Sustituir por un Badge */}
				<span className='align-middle'>{taskLevelBadge()}</span>
			</td>
			<td>
				{/* Sustituir por iconos */}
				<span className='align-middle'>{taskIconCompleted()}</span>
				<i
					className='bi-trash task-action'
					style={{ color: 'tomato' }}
					onClick={() => remove(task)}
				/>
			</td>
		</tr>
	);
}

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	completed: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};
export default TaskComponent;
