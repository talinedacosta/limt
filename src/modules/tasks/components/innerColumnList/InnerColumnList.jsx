import React from 'react';
import Column from '../column/Column';

export default class InnerColumnList extends React.PureComponent {
    render() {
        const { column, taskMap, index } = this.props;
        const tasks = column.taskIds.map(taskId => taskMap[taskId]);
        return <Column column={column} tasks={tasks} index={index} key={column.id} />
    }
}
