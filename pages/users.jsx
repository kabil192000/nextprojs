import { useState, useEffect } from 'react';
import '../styles/globals.css'; 
import Header from '../app/components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ButtomFooter from '../app/components/ButtomFooter';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '', password: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; 

  const userId=1

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/item');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } 
    };
    fetchUsers();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/item', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const createdUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, { id: createdUser.id, ...newUser }]);
        setNewUser({ name: '', email: '', password: '' });
      } else {
        throw new Error('Failed to create user');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/item`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateUser),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updateUser.id ? { ...user, ...updateUser } : user
          )
        );
        setUpdateUser({ id: '', name: '', email: '', password: '' });
        setSuccessMessage('User updated successfully!');
      } else {
        throw new Error('Failed to update user');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`/api/item?id=${id}`, { method: 'DELETE' });

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } else {
        throw new Error('Failed to delete user');
      }
    } catch (err) {
      setError(err.message);
    }
  };


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />

      <Button className="create-button" variant="info" onClick={() => setShowCreateForm(!showCreateForm)}>
        {showCreateForm ? 'Close Create Form' : 'Open Create Form'}
      </Button>
      
      <div className='form-div'>
        {showCreateForm &&(
          <form onSubmit={handleCreateUser}>
            <h2>Create New User</h2>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <Button variant="success" type="submit">Create User</Button>
          </form>
        )}
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}

      {updateUser.id && (
        <form onSubmit={handleUpdateUser}>
          <h2>Update User</h2>
          <input
            type="text"
            placeholder="Name"
            value={updateUser.name}
            onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={updateUser.email}
            onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={updateUser.password}
            onChange={(e) => setUpdateUser({ ...updateUser, password: e.target.value })}
          />
          <Button variant="success" type="submit">Update User</Button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              
              <td>
                <Button className="update-button" variant="primary" onClick={() => setUpdateUser(user)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <span>Page: {currentPage}</span>
        <Button
          disabled={currentPage * usersPerPage >= users.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>

      <ButtomFooter />
    </div>
  );
};

export default UsersList;
