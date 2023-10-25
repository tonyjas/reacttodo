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

  function updateColumnsHandler(taskId, columnId) {
    console.log('TODO: updateColumnsHandler');
  }

  return (
    <div className="board">
      Board
      <ColumnPanel columns={columns} onMoveTask={updateColumnsHandler} />
    </div>
  );
}

export default Board;
