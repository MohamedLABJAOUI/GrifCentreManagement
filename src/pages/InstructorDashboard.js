import React from 'react';
import DashboardTable from '../components/DashboardTable';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
  const classes = [{ id: 1, name: 'Classe A' }, { id: 2, name: 'Classe B' }];

  return (
    <div className="instructor-dashboard">
      <h2>Tableau de Bord Formateur</h2>
      <DashboardTable data={classes} columns={['name']} />
    </div>
  );
};

export default InstructorDashboard;