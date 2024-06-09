import { Button } from 'components/Button';
import Input from 'components/Input';
import CountrySelect from 'components/Select/CountrySelect';
import { IShippingFrom } from 'types/common.interface';
import FormTemplate from '../template/form';
import styles from 'style-module/shipping.module.scss';
import Loader from 'components/Loader';

const extraStyles = {
  display:'grid',
  height: 'calc(100vh - (111px + 1rem))',
  placeItems: 'center'
}

export default function Shipping({ measurementJourney,

  nextStageHandler,
  shipping,
  onMouseLeaveEventHandler,
  onChangeHandler,
  handleOptionChange,
  selectedCountry,
  fetching
}: IShippingFrom) {
  return (
    <FormTemplate extraStyles={ extraStyles}>
      {fetching && <Loader />}

      {!fetching && <div className={styles.shipping}>
        <div className={styles.form__row}>
          <CountrySelect
            value={selectedCountry}
            set={handleOptionChange}
            sx={{ minHeight: '78.9px' }}
            name='country'
            label='Select country'
          />
        </div>
        <div className={styles.form__row}>
          <Input label='First Name'
            name='firstName'
            value={shipping?.data?.firstName ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.firstName}
            helperText={shipping?.errors?.firstName}
            onBlur={() => onMouseLeaveEventHandler('firstName', shipping?.data?.firstName)}
          />
          <Input label='Last Name'
            name='lastName'
            value={shipping?.data?.lastName ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.lastName}
            helperText={shipping?.errors?.lastName}
            onBlur={() => onMouseLeaveEventHandler('lastName', shipping?.data?.lastName)}
          />
        </div>
        <div className={styles.form__row}>
          <Input
            label='Street address, house/apartement/unit*'
            name='addressLine1'
            value={shipping?.data?.addressLine1 ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.addressLine1}
            helperText={shipping?.errors?.addressLine1}
            onBlur={() => onMouseLeaveEventHandler('addressLine1', shipping?.data?.addressLine1)}
          />
        </div>
        <div className={styles.form__row}>
          <Input
            label='Address line 2'
            name='addressLine2'
            value={shipping?.data?.addressLine2 ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.addressLine2}
            helperText={shipping?.errors?.addressLine2}
            onBlur={() => onMouseLeaveEventHandler('addressLine2', shipping?.data?.addressLine2)}
          />
        </div>

        <div className={styles.form__row_col_1_2}>
          <Input
            label='Country code'
            name='countryCode'
            value={shipping?.data?.countryCode ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.countryCode}
            helperText={shipping?.errors?.countryCode}
            onBlur={() => onMouseLeaveEventHandler('countryCode', shipping?.data?.countryCode)}
            InputProps={{
              startAdornment: (
                <span>+</span>
              ),
            }}

          />
          <Input label='Phone number'
            name='phoneNumber'
            value={shipping?.data?.phoneNumber ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.phoneNumber}
            helperText={shipping?.errors?.phoneNumber}
            onBlur={() => onMouseLeaveEventHandler('phoneNumber', shipping?.data?.phoneNumber)}
          />
        </div>
        <div className={styles.form__row}>
          <Input
            label='Town/City'
            name='city'
            value={shipping?.data?.city ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.city}
            helperText={shipping?.errors?.city}
            onBlur={() => onMouseLeaveEventHandler('city', shipping?.data?.city)}

          />
          <Input label='State'
            name='state'
            value={shipping?.data?.state ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.state}
            helperText={shipping?.errors?.state}
            onBlur={() => onMouseLeaveEventHandler('state', shipping?.data?.state)}


          />
          <Input label='Post/Zip'
            name='postalCode'
            value={shipping?.data?.postalCode ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.postalCode}
            helperText={shipping?.errors?.postalCode}
            onBlur={() => onMouseLeaveEventHandler('postalCode', shipping?.data?.postalCode)}
          />
        </div>

        <div className={styles.form__row}>
          <Input
            label='Email address'
            type='email'
            name='email'
            value={shipping?.data?.email ?? ''}
            onChange={onChangeHandler}
            error={shipping?.errors?.email}
            helperText={shipping?.errors?.email}
            onBlur={() => onMouseLeaveEventHandler('email', shipping?.data?.email)}
          />

        </div>
        <div className={styles.form__row}>
          <Button variant='primary' type='square' onClick={() => nextStageHandler()}>
            Continue to payment
          </Button>
        </div>
      </div>}

    </FormTemplate>


  )
}
