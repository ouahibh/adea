import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Ayoub', firstName: 'Hamdaoui', age: 7 },
  { id: 2, lastName: 'Imen', firstName: 'Hamdaoui', age: 3 },
  { id: 3, lastName: 'Sonia', firstName: 'Djebiri', age: 40 },
  { id: 4, lastName: 'Sofiane', firstName: 'Hamdaoui', age: 40 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Utilisateur() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={9} checkboxSelection />
    </div>
  );
}
