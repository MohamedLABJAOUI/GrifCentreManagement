import React from 'react';
import DashboardTable from '../components/DashboardTable';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const students = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  const instructors = [{ id: 1, name: 'Prof. Smith' }, { id: 2, name: 'Prof. Brown' }];

  return (
    <div className="admin-dashboard">
      <h2>Tableau de Bord Administrateur</h2>
      <DashboardTable data={students} columns={['name']} />
      <DashboardTable data={instructors} columns={['name']} />
    </div>
  );
};

export default AdminDashboard;