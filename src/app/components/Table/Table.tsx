"use client";

import React from 'react';
import { useState } from 'react';

interface TableProps {
  data: any[];
  createData: (newData: { campo1: string; campo2: string }) => void;
  updateData: (id: number, updatedData: { campo1: string; campo2: string }) => void;
  deleteData: (id: number) => void;
  newData: { campo1: string; campo2: string };
  setNewData: React.Dispatch<React.SetStateAction<{ campo1: string; campo2: string }>>;
}

export function Table({ data, createData, updateData, deleteData, newData, setNewData }: TableProps) {
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateData(editingId, newData);
      setEditingId(null);
    } else {
      createData(newData);
    }
    setNewData({ campo1: '', campo2: '' });
  };

  const handleEdit = (id: number, campo1: string, campo2: string) => {
    setNewData({ campo1, campo2 });
    setEditingId(id);
  };

  return (
    <div className='container-tabela'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="campo1">Nome: </label>
        <input
          type="text"
          id='campo1'
          name='campo1'
          value={newData.campo1}
          onChange={handleInputChange}
        />

        <label htmlFor="campo2">Salário: </label>
        <input
          type="number"
          id='campo2'
          name='campo2'
          value={newData.campo2}
          onChange={handleInputChange}
        />

        <button type="submit">{editingId ? 'Atualizar' : 'Criar'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Salário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.campo1}</td>
              <td>{item.campo2}</td>
              <td>
                <button onClick={() => handleEdit(item.id, item.campo1, item.campo2)}>Editar</button>
                <button onClick={() => deleteData(item.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
