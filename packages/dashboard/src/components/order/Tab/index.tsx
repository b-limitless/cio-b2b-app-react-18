import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { TabICO, TabPanel, a11yProps } from '@pasal/cio-component-library';
import * as React from 'react';
import Assignment from './TabContents/assignment';
import Customize from './TabContents/customize';

interface IOrderTabs {
  showModel: null | string;
}

export default function OrderTabs({showModel}: IOrderTabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
          scrollButtons="auto">
          
          <TabICO  label="customize" {...a11yProps(0)} />
          
          {/* <TabICO  label="Assignment" {...a11yProps(1)} /> */}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
       
        <Customize showModel={showModel}/>
        
      </TabPanel>
      
      {/* <TabPanel value={value} index={1}>
        <Assignment/>
      </TabPanel> */}
    
    </Box>
  );
}

