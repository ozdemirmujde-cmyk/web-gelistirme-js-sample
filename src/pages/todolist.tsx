
import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../context/file';
import type { ITodoListResponse, ITodo } from '../interfaces/todo';

export const TodoListPage: React.FC = () => {
    const getTodos = useCallback(async () => {
        const response = await api.post('/todos');
        return response.data as ITodoListResponse;
    }, []);

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        (async () => {
            const todoData = (await getTodos()).data.todoData;
            setTodos(todoData);
        })();
    }, [getTodos]);

    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
            <h1>Todo List Uygulaması</h1>
            <p>Bu proje, React ve Vite ile oluşturulmuş basit bir todo list örneğidir.</p>

            {todos?.map((todo) => (
                <div key={todo.id} style={{ marginTop: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h3>{todo.todo}</h3>
                    <p>Durum: {todo.state ? 'Tamamlandı' : 'Tamamlanmadı'}</p>
                </div>
            ))}
        </div>
    );
};