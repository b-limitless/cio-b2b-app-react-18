import React from 'react'
import './loader.scss';

type Props = {}

export default function PleaseWait({}: Props) {
  return (
    <div className='loader'>Please wait, loading...</div>
  )
}