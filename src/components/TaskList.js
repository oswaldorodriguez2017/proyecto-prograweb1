import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, handleTaskSelection, selectedTasks }) => {
  return (
    <div className="list-group">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            editTask={editTask} 
            deleteTask={deleteTask} 
            handleTaskSelection={handleTaskSelection} 
            isSelected={selectedTasks.includes(task.id)} 
          />
        ))
      ) : (
        <p className="text-center">No hay tareas aún</p>
      )}
    </div>
  );
};

export default TaskList;
