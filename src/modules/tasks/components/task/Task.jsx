import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Container } from './Task.styles';

const Task = (props) => {
    const { task, index } = props;

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => {
                return (
                    <Container
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >{task.description}</Container>
                )

            }}

        </Draggable>

    )
}

export default Task