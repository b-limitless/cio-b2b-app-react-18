import { RadioGroup } from '@mui/material';
import Input from 'components/Input';

import RadioButton from 'components/Radio/Radio';
import Select from 'components/Select';
import { IMeasurementBase } from 'interface/IMeasurementBase';
import dynamic from 'next/dynamic';
import styles from '../measurement.module.scss';
const countEleven = new Array(10).fill(0);

const inches = countEleven.map((item, i) => {
    return { name: i, code: i }
})


interface IBaseProductMeasurementForm {
    onChangeHandler: Function;
    formData: IMeasurementBase;
    errors: IMeasurementBase;
    onMouseLeaveEventHandler: Function;
}
function BaseProductMeasurementForm({ onChangeHandler, formData, errors, onMouseLeaveEventHandler }: IBaseProductMeasurementForm) {

    return (
        <>
            <div className={styles.form__row}>
            <Input label='First Name'
                    name='firstName'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={formData?.firstName ?? ''}
                    error={errors?.firstName}
                    onBlur={() => onMouseLeaveEventHandler('firstName', formData.firstName)}
                    helperText={errors?.firstName}
                />

<Input label='Last Name'
                    name='lastName'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={formData?.lastName ?? ''}
                    error={errors?.lastName}
                    onBlur={() => onMouseLeaveEventHandler('lastName', formData.lastName)}
                    helperText={errors?.lastName}
                />
            </div>
            <p className={styles.unite}>
                <div>
                    Change Unite feet/lb or cm/kg
                </div>

                <RadioGroup
                    row
                    aria-labelledby="rg-group"
                    name="unite"
                >
                    <RadioButton
                        label='Feet'

                        value={'feet'}
                        onChange={onChangeHandler}
                        checked={formData.unite === 'feet'}
                    />
                    <RadioButton
                        label='CM'
                        value={'cm'}
                        onChange={onChangeHandler}
                        checked={formData.unite === 'cm'}
                    />
                </RadioGroup>

            </p>
            <div className={styles.form__row}>
                <Input
                    // options={height}
                    // options={height}
                    type='number'
                    name={'height'}
                    value={formData.height ?? 0}
                    label={`Height in ${formData.unite}`}
                    onChange={onChangeHandler}
                    error={errors.height}
                    helperText={errors?.height}
                    onBlur={() => onMouseLeaveEventHandler('height', formData.height)}

                />
                {formData.unite === 'feet' && <Select
                    name='inch'
                    options={inches}
                    value={formData.inch ?? 0}
                    label='inch'
                    onChange={onChangeHandler}
                    error={errors?.inch}
                    helperText={errors?.inch}
                    onBlur={() => onMouseLeaveEventHandler('inch', formData.inch)}
                />
                }
                <Input
                    name='weight'
                    type='number'
                    value={formData.weight ?? 0}
                    label={`Weight in ${formData.unite === 'feet' ? 'LB' : 'KG'}`}
                    onChange={onChangeHandler}
                    error={errors?.weight}
                    helperText={errors?.weight}
                    onBlur={() => onMouseLeaveEventHandler('weight', formData.weight)}
                />

               
                <Input
                    value={formData.age ?? 0}
                    name='age'
                    label='Age'
                    type='number'
                    onChange={onChangeHandler}
                    error={errors?.age}
                    helperText={errors?.age}
                    onBlur={() => onMouseLeaveEventHandler('age', formData.age)}
                />
            </div>
            <p className={styles.accurate}>
                The more accurate you give your height and weight, the better the system will help you take your measurements.
            </p>

        </>
    )
}


export default dynamic(() => Promise.resolve(BaseProductMeasurementForm), { ssr: false });