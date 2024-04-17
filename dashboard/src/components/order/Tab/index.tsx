import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { TabICO, TabPanel, a11yProps } from '@pasal/cio-component-library';
import Shipping from './TabContents/Shipping';
import Assignment from './TabContents/assignment';
import Customize from './TabContents/customize';
import Measurement from './TabContents/measurement';
import { useQueryClient } from '@tanstack/react-query';

interface IOrderTabs {
  showModel: null | string;
}

export default function OrderTabs({showModel}: IOrderTabs) {
  const queryClient = useQueryClient();

   // Get the query cache
  //  const queryCache = queryClient.getQueryCache();

  //  // Get all cached queries
  //  const cachedQueries = queryCache.getAll();
 
  //  // Iterate over all keys in the query cache
  //  Object.keys(cachedQueries).forEach((queryKey) => {
  //    const queryData = queryCache.get(queryKey);
  //    console.log('Query key:', queryKey);
  //    console.log('Query data:', queryData);
  //  });

  const orderDetails = queryClient.getQueryData(['fetchOrderDetails', showModel]);

  // console.log('orderDetails from child', orderDetails);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {

    console.log(newValue)
    setValue(newValue);
  };

  const requestsLoading = {
    customize: false,
    measurement: false, 
    shipping: false,
    orderCompled: false
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
          scrollButtons="auto">
          
          <TabICO  label="customize" {...a11yProps(0)} />
          
          <TabICO  label="Assignment" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
       
        <Customize/>
        
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Assignment/>
      </TabPanel>
    
    </Box>
  );
}

