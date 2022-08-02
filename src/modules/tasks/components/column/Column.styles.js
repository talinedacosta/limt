import styled from 'styled-components';

export const Container = styled.section`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    padding: 8px;
`;

export const TaskList = styled.div`
    padding: 8px;
    flex-grow: 1;
    min-height: 100px;
`;