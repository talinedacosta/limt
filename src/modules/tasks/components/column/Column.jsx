import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import InnerTaskList from '../innerTaskList/InnerTaskList';
import { Container, Title, TaskList } from './Column.styles';

const Column = (props) => {
  const { column, tasks, index } = props;
  console.log('re')
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}

          >
            <Title {...provided.dragHandleProps}>
              {column.title}
            </Title>
            <Droppable droppableId={column.id} type="task">
              {(provided) => {
                return (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <InnerTaskList tasks={tasks} />
                    {provided.placeholder}
                  </TaskList>
                )

              }}

            </Droppable>
          </Container>
        )
      }}

    </Draggable>

  )
}

export default Column