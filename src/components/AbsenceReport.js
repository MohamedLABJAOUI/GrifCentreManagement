import React from 'react';

const AbsenceReport = ({ absences }) => {
  return (
    <div className="absence-report">
      <h3>Rapport des Absences</h3>
      <ul>
        {absences.map((absence, index) => (
          <li key={index}>
            {absence.date} - {absence.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsenceReport;