import React from "react";
import Task from '../task/Task';

export default class innerTaskList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) {
            return false;
        }

        return true;
    }

    render() {
        return (
            this.props.tasks.map((task, i) => <Task task={task} index={i} key={task.id} />)
        )
    }
}