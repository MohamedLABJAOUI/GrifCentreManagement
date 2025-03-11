import React from 'react';
import DashboardTable from '../components/DashboardTable';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const classes = [{ id: 1, name: 'Classe A' }, { id: 2, name: 'Classe B' }];
  const subjects = [
    { id: 1, name: 'Mathématiques', price: 100, status: 'Payé' },
    { id: 2, name: 'Physique', price: 150, status: 'Non Payé' },
  ];

  return (
    <div className="student-dashboard">
      <h2>Tableau de Bord Étudiant</h2>
      <DashboardTable data={classes} columns={['name']} />
      <DashboardTable data={subjects} columns={['name', 'price', 'status']} />
    </div>
  );
};

export default StudentDashboard;