import Task from './Task';

function Column(props) {
  return (
    <div className="column">
      <div className="column-header">
        <h3>{props.title}</h3>
      </div>
      <div className="column-body">
        <Task text="Hardcoded Task 1" />
        <Task text="Hardcoded Task 2" />
        <Task text="Hardcoded Task 3" />
      </div>
    </div>
  );
}

export default Column;
