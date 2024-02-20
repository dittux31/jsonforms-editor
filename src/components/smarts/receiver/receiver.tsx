import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {RTTVService} from "../../../types/service.types";

const Receiver: React.FC = () => {

    const [selectedService, setSelectedService] = useState('');

    const services: RTTVService[] = [
        {
            key: 'S3',
            displayName: 'AWS S3'
        },
        {
            key: 'eventBridge',
            displayName: 'Event Bridge'
        },
        {
            key: 'DynamoDB',
            displayName: 'dynamodb'
        },
        {
            key: 'sns',
            displayName: 'AWS SNS',
        },
        {
            key: 'sqs',
            displayName: 'AWS SQS'
        }
    ];

    const handleChange = (event: any) => {
        console.log('EVENT CHANGE  VALUE ', event);
        setSelectedService(event.target.value);
    }

 return (
  <>
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Services</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedService}
              label="Services"
              onChange={handleChange}
          >
              {services.map((service) =>
                  (<MenuItem value={service.key}>{service.displayName}</MenuItem>))}
          </Select>
      </FormControl>
  </>
 );
};

export default Receiver;
