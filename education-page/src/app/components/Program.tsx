'use client';

import styled from 'styled-components';
import Module from './Module';

// Основной контейнер программы
const ProgramContainer = styled.div`
  margin-bottom: 40px;
`;

// Заголовок программы
const Title = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: left;
  font-weight: bold;
  margin: 40px 0 20px;
`;

// Контейнер для разделения модулей на две части
const ModuleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

// Функция для разделения дисциплин на два модуля
const divideIntoModules = (disciplines: string[]) => {
  const half = Math.ceil(disciplines.length / 2);
  return [disciplines.slice(0, half), disciplines.slice(half)];
};

// Интерфейс для пропсов компонента Program
interface ProgramProps {
  title: string;
  disciplines: string[];
}

const Program: React.FC<ProgramProps> = ({ title, disciplines }) => {
  const modules = divideIntoModules(disciplines);

  return (
    <ProgramContainer>
      <Title>{title}</Title>
      <ModuleContainer>
        <Module title="1 модуль" disciplines={modules[0]} />
        <Module title="2 модуль" disciplines={modules[1]} />
      </ModuleContainer>
    </ProgramContainer>
  );
};

export default Program;
