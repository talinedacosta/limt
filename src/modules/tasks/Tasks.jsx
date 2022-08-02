import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from '../../initial-data';
import InnerColumnList from './components/innerColumnList/InnerColumnList';
import { Container } from './Tasks.styles';

const Tasks = () => {
    const [data, setData] = React.useState(initialData);

    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        if (type === 'column') {
            const newColumnOrder = Array.from(data.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...data,
                columnOrder: newColumnOrder
            };

            setData(newState)
            return;
        }

        const sourceColumn = data.columns[source.droppableId];
        const destinationColumn = data.columns[destination.droppableId];

        if (sourceColumn === destinationColumn) {
            const newTaskIds = Array.from(sourceColumn.taskIds);

            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...sourceColumn,
                taskIds: newTaskIds
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn
                }
            };

            setData(newState);
            return

        }

        //Moving from one list to another
        const sourceTaskIds = Array.from(sourceColumn.taskIds);
        sourceTaskIds.splice(source.index, 1);
        const newSource = {
            ...sourceColumn,
            taskIds: sourceTaskIds,
        }

        const destinationTaskIds = Array.from(destinationColumn.taskIds);
        destinationTaskIds.splice(destination.index, 0, draggableId);
        const newDestination = {
            ...destinationColumn,
            taskIds: destinationTaskIds
        }

        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [sourceColumn.id]: newSource,
                [destinationColumn.id]: newDestination
            }
        }

        setData(newState);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-columns" direction="horizontal" type="column">
                {(provided) => {
                    return (
                        <Container
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                data.columnOrder.map((columnId, index) => {
                                    const column = data.columns[columnId];

                                    return <InnerColumnList column={column} taskMap={data.tasks} index={index} key={column.id} />
                                })
                            }
                            {provided.placeholder}
                        </Container>
                    )
                }}

            </Droppable>
        </DragDropContext>
    )
}

export default Tasks