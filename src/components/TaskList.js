/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { formatRelative } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {

  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  const onTaskCheckChange = (task) => {
    setTaskList((taskList) => taskList.map((singleTask) => {
      // eslint-disable-next-line no-underscore-dangle
      if (singleTask._id === task._id) {
        return { singleTask, isChecked: !singleTask.isChecked };
      }
      return singleTask;
    }));
  }
  return (
    <section>
      {taskList.reverse().map((task) => (
        <div key={task._id}>
          <h4>{task.description}</h4>
          <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  );
}

export default TaskList;