import Box from '@mui/material/Box'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'role', headerName: 'Role', flex: 1 },
  { field: 'status', headerName: 'Status', width: 120 },
]

const rows = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },
  { id: 2, name: 'Grace Hopper', role: 'Engineer', status: 'Active' },
  { id: 3, name: 'Alan Turing', role: 'Researcher', status: 'Invited' },
  { id: 4, name: 'Margaret Hamilton', role: 'Engineer', status: 'Active' },
  { id: 5, name: 'Katherine Johnson', role: 'Analyst', status: 'Inactive' },
]

export default function DataTableSection() {
  return (
    <Box sx={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
    </Box>
  )
}
