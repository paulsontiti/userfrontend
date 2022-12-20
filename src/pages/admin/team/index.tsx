import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { token } from '../../../theme';
import { mockDataTeam } from '../../../data/mockdata';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../../components/global/Header';
import SideBar from '../global/SideBar';
import Topbar from '../global/Topbar';

const Team = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const backgroundColor = (access: string) => {
    return access === 'admin'
      ? colors.greenAscent[600]
      : colors.greenAscent[900];
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
      cellClassName: 'name-column-cell',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: '60%',
              m: '0 auto',
              p: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              background: backgroundColor(access),
            }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box display='flex'>
      <SideBar />
      <Box width='100vw'>
        <Topbar />
        <Header title='TEAM' subTitle='Managing The Team Members' />
        <Box height='75vh'>
          <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </Box>
  );
};
export default Team;
