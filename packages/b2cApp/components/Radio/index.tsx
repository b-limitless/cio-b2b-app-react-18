'use client';
import { RadioGroup } from '@mui/material';
import RadioButton from './Radio';


export default function RadioButtonUniteGroup() {
    return (
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <RadioButton label='CM' value='cm'/>
            <RadioButton label='Feet' value='feet'/>
          </RadioGroup>
        
      );
}
