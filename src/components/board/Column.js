import Task from './Task';
import { useDroppable } from '@dnd-kit/core';

function Column(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    backgroundColor: isOver ? 'green' : undefined,
  };

  return (
    <div className="column" ref={setNodeRef} style={style}>
      <div className="column-header">
        <h3>{props.title}</h3>
      </div>
      <div className="column-body">
        {props.tasks.map((task) => {
          return <Task key={task.title} id={task.title} text={task.title} />;
        })}
      </div>
    </div>
  );
}

export default Column;
