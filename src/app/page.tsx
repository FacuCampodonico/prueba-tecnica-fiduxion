import React from 'react';
import 'tailwindcss/tailwind.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
};

export default Home;




