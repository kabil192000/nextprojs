import connection from '../../lib/db';

export default async function handler(req, res) {

  

  if (req.method === 'GET') {
    try {
      const [rows] = await connection.query('SELECT * FROM tests.userst');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Database connection error', details: error.message });
    }
  }

  else if (req.method === 'GET' && req.query.id) {
    try {
      const { id } = req.query;
      const [rows] = await connection.query('SELECT * FROM tests.userst WHERE id = ?', [id]);
      
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Database connection error', details: error.message });
    }
  }

  else if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;

      const [result] = await connection.query(
        'INSERT INTO tests.userst (name, email, password) VALUES (?, ?, ?)', 
        [name, email, password]
      );

      res.status(201).json({ message: 'User created successfully', id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: 'Database connection error', details: error.message });
    }
  }

  else if (req.method === 'PUT') {
    try {
      const { id, name, email, password } = req.body;

      const [existingUser] = await connection.query('SELECT * FROM tests.userst WHERE id = ?', [id]);

      if (existingUser.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      await connection.query(
        'UPDATE tests.userst SET name = ?, email = ?, password = ? WHERE id = ?',
        [name, email, password, id]
      );

      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Database connection error', details: error.message });
    }
  }

  else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      const [existingUser] = await connection.query('SELECT * FROM tests.userst WHERE id = ?', [id]);

      if (existingUser.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      await connection.query('DELETE FROM tests.userst WHERE id = ?', [id]);

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Database connection error', details: error.message });
    }
  }

  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


