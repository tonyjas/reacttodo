import { useState } from 'react';
import ColumnPanel from './ColumnPanel';

const dummyColumns = [
  {
    id: 1,
    title: 'backlog',
    tasks: [{ title: 'task 1' }, { title: 'task 2' }, { title: 'task 3' }],
  },
  {
    id: 2,
    title: 'today',
    tasks: [{ title: 'task 4' }, { title: 'task 5' }, { title: 'task 6' }],
  },
  {
    id: 3,
    title: 'in progress',
    tasks: [{ title: 'task 7' }, { title: 'task 8' }, { title: 'task 9' }],
  },
  {
    id: 4,
    title: 'done',
    tasks: [{ title: 'task 10' }, { title: 'task 11' }, { title: 'task 12' }],
  },
];

function Board() {
  const [columns, setColumns] = useState(dummyColumns);

  function moveTaskStartHandler(taskId) {
    console.log('TODO: moveTaskStartHandler');
  }

  function moveTaskEndHandler(taskId, columnId) {
    // copy columns
    let newColumns = [...columns];

    newColumns.forEach((column) => {
      column.tasks = column.tasks.filter((task) => task.title !== taskId);
      if (column.id === columnId) {
        column.tasks.push({ title: taskId });
      }
    });

    console.log(newColumns);
    console.log('TODO: moveTaskEndHandler');

    setColumns(newColumns);
  }

  return (
    <div className="board">
      Board
      <ColumnPanel
        columns={columns}
        onMoveTaskStart={moveTaskStartHandler}
        onMoveTaskEnd={moveTaskEndHandler}
      />
    </div>
  );
}

export default Board;
