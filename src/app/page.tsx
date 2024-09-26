"use client";

import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import { useEffect, useState } from 'react';


export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [newData, setNewData] = useState({ campo1: '', campo2: '' });




  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3015/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };




  const createData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const result = await response.json();
      setData([...data, result]);
      setNewData({ campo1: '', campo2: '' });
    } catch (error) {
      console.error('Erro ao criar dado:', error);
    }
  };

  const updateData = async (id: number, updatedData: any) => {
    try {
      const response = await fetch(`http://localhost:3000/api/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Erro ao atualizar dado:', error);
    }
  };

  const deleteData = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/data/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setData(data.filter(item => item.id !== id));
      }
    } catch (error) {
      console.error('Erro ao deletar dado:', error);
    }
  };




  useEffect(() => {
    fetchData();
  }, []);


  return (
    <main className="container-main">
        <Header/>
        <Table
        data={data}
        createData={createData}
        updateData={updateData}
        deleteData={deleteData}
        newData={newData}
        setNewData={setNewData}
        />    
    </main>
  );
}
