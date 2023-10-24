function Task(props) {
  return (
    <div className="task" draggable>
      {props.text}
    </div>
  );
}

export default Task;
