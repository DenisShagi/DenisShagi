'use client';

import Program from './components/Program';
import { useEffect, useState } from 'react';

// Типизация для отдельного навыка (дисциплины)
interface Skill {
  string: string;
}

// Типизация для специализированных предметов
interface SpecializedSubject {
  skills: Skill[];
}

// Типизация для программы, полученной с API
interface ProgramData {
  id: number;
  title: string;
  specializedSubjects: SpecializedSubject[];
}

// Типизация для обработанных данных программ (для отображения)
interface DisplayProgram {
  title: string;
  disciplines: string[];
}

export default function Home() {
  const [programs, setPrograms] = useState<DisplayProgram[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.moscow.mba/products');
      const data: ProgramData[] = await res.json();
      
      const processedPrograms: DisplayProgram[] = data
        .filter((program) => program.specializedSubjects) 
        .slice(0, 5) 
        .map((program) => {
          const disciplines = program.specializedSubjects.flatMap((subject) => 
            subject.skills.map((skill) => skill.string)
          );
          return { title: program.title, disciplines }; 
        });
        
      setPrograms(processedPrograms); // Устанавливаем обработанные данные
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20,
      textAlign: 'center'
     }}>
      <h1>Специализированные дисциплины</h1>
      {programs.map((program) => (
        <Program 
          key={program.title} 
          title={program.title} 
          disciplines={program.disciplines} 
        />
      ))}
    </div>
  );
}
