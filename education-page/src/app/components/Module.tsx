'use client';

import styled from 'styled-components';

// Основной контейнер модуля с горизонтальным расположением заголовка и дисциплин
const ModuleContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  width: 100%;
  margin-top: 20px;
  gap: 20px; 
`;

const Title = styled.h3`
  font-size: 20px;
  color: #e74c3c; 
  margin-bottom: 0;
  white-space: nowrap; 
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color: #555; 
`;

// Интерфейс для пропсов компонента Module
interface ModuleProps {
  title: string;
  disciplines: string[];
}

const Module: React.FC<ModuleProps> = ({ title, disciplines }) => {
  return (
    <ModuleContainer>
      <Title>{title}</Title>
      <List>
        {disciplines.map((discipline) => (
          <ListItem key={discipline}>{discipline}</ListItem>
        ))}
      </List>
    </ModuleContainer>
  );
};

export default Module;
