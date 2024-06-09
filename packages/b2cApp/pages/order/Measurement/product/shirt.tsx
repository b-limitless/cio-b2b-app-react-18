import Input from 'components/Input';
import InputWithTooltip from 'components/Input/InputWithToltip';
import { IShirtMeasurement } from 'interface/IShirtMeasurement';
import styles from '../measurement.module.scss';
import { IInputWithTooltip } from 'components/Input/input.interface';
import { shirtMeasurementGuide } from 'guide/shirt-measurement';

interface INumberInputFieldWithToltip extends IInputWithTooltip {

}
export const NumberInputField = ({ ...rest }) => {
    return <Input
        {...rest}
        type='number'
    />;
}
export const NumberInputFieldWithToltip = ({toltip, toltipText, ...rest }:INumberInputFieldWithToltip) => {
    return <InputWithTooltip
        toltip={toltip}
        toltipText={toltipText}
        {...rest}
        type='number'
    />;
}

interface IProductShirt {

    measurement: IShirtMeasurement;
    errors: IShirtMeasurement;
    onMouseLeaveEventHandler: Function;
    onChangeHandler: Function;
}




export default function ProductShirt({ errors, measurement, onMouseLeaveEventHandler, onChangeHandler }: IProductShirt) {
    return (
        <>
            <div className={styles.form__row}>
                <NumberInputFieldWithToltip

                    name='neck'
                    label='Neck'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={measurement?.neck ?? ''}
                    error={errors?.neck}
                    onBlur={() => onMouseLeaveEventHandler('neck', measurement.neck)}
                    helperText={errors?.neck}
                    toltip
                    toltipText={<span>{shirtMeasurementGuide.neck.instructions} <a href='#'>Watch video</a></span>}
                />
                <NumberInputFieldWithToltip
                    name='sleevLength'
                    label='Sleev Length'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={measurement?.sleevLength ?? ''}
                    error={errors?.sleevLength}
                    onBlur={() => onMouseLeaveEventHandler('sleevLength', measurement.sleevLength)}
                    helperText={errors?.sleevLength}
                    toltip
                    toltipText={<span>{shirtMeasurementGuide.sleeveLength.instructions} <a href='#'>Watch video</a></span>}
                />
                <NumberInputFieldWithToltip 
                   name='shoulderWidth'
                    label='Solder Width'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={measurement?.shoulderWidth ?? ''}
                    error={errors?.shoulderWidth}
                    onBlur={() => onMouseLeaveEventHandler('shoulderWidth', measurement.shoulderWidth)}
                    helperText={errors?.shoulderWidth}
                    toltip
                    toltipText={<span>{shirtMeasurementGuide.shoulderWidth.instructions} <a href='#'>Watch video</a></span>}
                />

            </div>
            <div className={styles.form__row}>
                <NumberInputFieldWithToltip name='chestAround'
                    label='Chest Around'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={measurement?.chestAround ?? ''}
                    error={errors?.chestAround}
                    onBlur={() => onMouseLeaveEventHandler('chestAround', measurement.chestAround)}
                    helperText={errors?.chestAround}
                    toltip
                    toltipText={<span>{shirtMeasurementGuide.chestAround.instructions} <a href='#'>Watch video</a></span>}
                />
                <NumberInputFieldWithToltip
                    name='stomach'
                    label='Stomach'
                    onChange={(e: any) => onChangeHandler(e)}
                    value={measurement?.stomach ?? ''}
                    error={errors?.stomach}
                    onBlur={() => onMouseLeaveEventHandler('stomach', measurement.stomach)}
                    helperText={errors?.stomach}
                    toltip
                    toltipText={<span>{shirtMeasurementGuide.stomach.instructions} <a href='#'>Watch video</a></span>}
                />
                {/* Add rest of the component with NumberInputFieldWithToltip if required overally functionality will be get affected*/}
                <NumberInputField
                    name='bicepAround'
                    onChange={(e: any) => onChangeHandler(e)}
                    label='Bicep Around'
                    value={measurement?.bicepAround ?? ''}
                    error={errors?.bicepAround}
                    onBlur={() => onMouseLeaveEventHandler('bicepAround', measurement.bicepAround)}
                    helperText={errors?.bicepAround}
                />

            </div>
            <div className={styles.form__row}>
                <NumberInputField
                   onChange={(e: any) => onChangeHandler(e)}
                    name='torsoLength'
                    label='Troso Length'
                    value={measurement?.torsoLength ?? ''}
                    error={errors?.torsoLength}
                    onBlur={() => onMouseLeaveEventHandler('torsoLength', measurement.torsoLength)}
                    helperText={errors?.torsoLength}
                />
                <NumberInputField 
                onChange={(e: any) => onChangeHandler(e)}
                name='hips' 
                label='Hips' 
                value={measurement?.hips ?? ''}
                error={errors?.hips}
                onBlur={() => onMouseLeaveEventHandler('hips', measurement.hips)}
                helperText={errors?.hips}
                />
                <NumberInputField 
                   onChange={(e: any) => onChangeHandler(e)}
                    name='wrist' 
                    label='Wrist' 
                    value={measurement?.wrist ?? ''}
                    error={errors?.wrist}
                    onBlur={() => onMouseLeaveEventHandler('wrist', measurement.wrist)}
                    helperText={errors?.wrist}
                />

            </div>
            <div className={styles.form__row}>
                {/* <InputIcon/>
                <InputIcon/>
                <InputIcon/> */}
                {/* <InputWithTooltip label='neck' toltip toltipText={LongText}/> */}
            </div>



        </>

    )
}
