import React from "react";

const TodoList = () => {
    const tasks = [
        { id: 1, title: 'Tarea 1' },
        { id: 2, title: 'Tarea 2' },
        { id: 3, title: 'Tarea 3' },
        // Agrega más tareas según sea necesario
    ];

    return (
        <div>
            <table className="w-full mt-4">
                <thead>
                    <tr>
                        <th className="py-2 w-3/4">Tarea</th>
                        <th className="py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td className="border-b border-gray-200 py-2 pl-2">{task.title}</td>
                            <td className="border-b border-gray-200 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full mr-2">
                                    Editar
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
