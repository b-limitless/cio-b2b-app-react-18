import { Button } from 'components/Button'
import Input from 'components/Input'
import React from 'react';
import styles from './credit-card.module.scss';
import InputAdornments from 'components/Input/InputAdorments';
import Image from 'next/image';
import Select from 'components/Select';
import { countries } from 'config/countries';
import { Base } from 'types/common.interface';



export default function CreditCard({nextStageHandler}: Base) {
  return (
    <div className={styles.credit__card}>
      <div className={styles.card__infomration}>
        <div className={styles.form__row}>
          <Input label='Email address' />

        </div>

        <div className={styles.form__row}>
          <Input label='Name on the card' />

        </div>

        <div className={styles.form__row__grid}>
          {/* <Input label='Card Number' /> */}
          <InputAdornments icon={<Image src='/icon/master-card.svg' width={20} height={20} alt='' />} />
          <Input label='CCV' />
          <Input label='Expiry' />
        </div>
      </div>

      <div className={styles.title}>Billing Address</div>


      <div className={styles.billing}>
        <div className={styles.form__row}>
          <Input label='Street'></Input>
        </div>
        <div className={styles.form__row}>
          <Input label='City'></Input>
        </div>
        <div className={styles.form__row}>
          <Input label='State/Province'></Input>
          <Input label='Zip Code'></Input>
        </div>
        <div className={styles.form__row}>
          <Select label='Country' options={countries} value='' onChange={() => {}}></Select>

        </div>
      </div>
      .


      <div className={styles.button__row}>
        <Button variant='primary' type='square' onClick={() => nextStageHandler()}>
          Complete Payment - $10
        </Button>
      </div>

    </div>
  )
}
