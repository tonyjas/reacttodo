import Column from './Column';

function ColumnPanel() {
  return (
    <>
      <div className="column-panel">
        <Column title="backlog" />
        <Column title="today" />
        <Column title="in progress" />
        <Column title="done" />
      </div>
    </>
  );
}

export default ColumnPanel;
