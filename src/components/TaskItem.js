import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, handleTaskSelection, isSelected }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <input 
        type="checkbox" 
        checked={isSelected} 
        onChange={() => handleTaskSelection(task.id)} 
      />
      
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <select
            className="form-select mx-2"
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="Por hacer">Por hacer</option>
            <option value="En progreso">En progreso</option>
            <option value="Finalizada">Finalizada</option>
          </select>
          <button onClick={handleEdit} className="btn btn-success">Guardar</button>
        </>
      ) : (
        <>
          <span>
            {task.title} - <em>{task.status}</em>
          </span>
          <div>
            <button onClick={() => setIsEditing(true)} className="btn btn-warning mx-2">Editar</button>
            <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
