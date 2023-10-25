import { useDraggable, useDndMonitor } from '@dnd-kit/core';

function Task(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  /*
  useDndMonitor({
    onDragStart(event) {
      console.log(event);
    },
    onDragMove(event) {
      console.log(event);
    },
    onDragOver(event) {
      console.log(event);
    },
    onDragEnd(event) {
      console.log(event);
    },
    onDragCancel(event) {
      console.log(event);
    },
  });*/

  return (
    <div
      id={props.id}
      className="task"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.text}
    </div>
  );
}

export default Task;
