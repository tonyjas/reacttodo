import Column from './Column';
import { DndContext } from '@dnd-kit/core';

function ColumnPanel(props) {
  function handleDragEnd(event) {
    console.log('Hello!');
    console.log(event);
    console.log(event.active.id);
    console.log(event.over?.id);

    props.onMoveTask(event.active.id, event.over?.id);
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
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
