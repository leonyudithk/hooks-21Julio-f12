import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'

export default function NavBars() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
      <Link to="/"><Tab value="one" label="Home" /></Link>
       <Link to="/counter"> <Tab value="two" label="Counter" /></Link>
       <Link to="/text"> <Tab value="three" label="UseState" /></Link>
       <Link to="/form"> <Tab value="four" label="CustomHooks" /></Link>
      </Tabs>
    </Box>
  );
}
