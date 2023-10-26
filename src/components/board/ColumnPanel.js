import Column from './Column';
import { DndContext } from '@dnd-kit/core';

function ColumnPanel(props) {
  function handleDragStart(event) {
    console.log('Hello2!');
    console.log(event);
    console.log(event.active.id);
    console.log(event.over?.id);

    props.onMoveTaskStart(event.active.id);
  }

  function handleDragEnd(event) {
    console.log('Hello!');
    console.log(event);
    console.log(event.active.id);
    console.log(event.over?.id);

    props.onMoveTaskEnd(event.active.id, event.over?.id);
  }

  return (
    <>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="column-panel">
          {props.columns.map((column) => {
            return (
              <Column
                key={column.id}
                id={column.id}
                title={column.title}
                tasks={column.tasks}
              />
            );
          })}
        </div>
      </DndContext>
    </>
  );
}

export default ColumnPanel;
