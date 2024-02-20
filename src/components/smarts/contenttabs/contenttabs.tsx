import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {TabContext} from "@mui/lab";
import Receiver from "../receiver/receiver";
const Contenttabs: React.FC = () => {
    const [value, setValue] = React.useState('Invoker');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="Invoker" />
                        <Tab label="Item Two" value="receiver" />
                        <Tab label="Item Three" value="targer" />
                    </TabList>
                </Box>
                <TabPanel value="Invoker">Invoker</TabPanel>
                <TabPanel value="receiver">
                    <Receiver />
                </TabPanel>
                <TabPanel value="target">Target</TabPanel>
            </TabContext>
        </>
    );
};

export default Contenttabs;
