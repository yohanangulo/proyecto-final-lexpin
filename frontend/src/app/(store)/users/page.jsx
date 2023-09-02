'use client';
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/users')
      .then((response) => {
        const userData = response.data;
        setUsers(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const deleteUser = (userId) => {
    axios.delete(`http://localhost:3003/users/${userId}`)
      .then(() => {
        // Actualizar la lista de usuarios después de eliminar
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.error('Error al eliminar usuario:', error);
      });
  };

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className=''>
      <Header />
      <h2 className="text-center text-2xl font-bold mb-4">Users</h2>
      <div className=" w-full max-w-screen-md">
        <table className="ml-20 border-collapse w-full ">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Apellido</th>
              <th className="border p-2">Correo Electrónico</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className=" border p-2">{user._id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.lastname}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                <a href="#" className="remove" title="Remove this item" onClick={() => deleteUser(user._id)}>
                  <i className="icon icon_close" />
                </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
