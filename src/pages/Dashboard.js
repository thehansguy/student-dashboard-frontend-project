import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Budget from '../components/dashboard/Budget';
// import LatestOrders from '../components/dashboard/LatestOrders';
// import LatestProducts from '../components/dashboard/LatestProducts';
// import Sales from '../components/dashboard/Sales';
import TasksProgress from '../components/dashboard/TasksProgress';
// import TotalCustomers from '../components/dashboard/TotalCustomers';
// import TotalProfit from '../components/dashboard/TotalProfit';
// import TrafficByDevice from '../components/dashboard/TrafficByDevice';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Student | Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid> */}
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress />
          </Grid>
          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit sx={{ height: '100%' }} />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
