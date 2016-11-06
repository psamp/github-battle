import React from 'react'
import { Link } from 'react-router'
import Skeleton from '../styles/skeleton.css'

export default () => {
  return (
    <div className={Skeleton['u-full-width']}>
      <h1>Github Battle</h1>
      <p>ES6, suckas</p>

      <Link to='/playerOne'>
        <button className={Skeleton['button-primary']}>Get started</button>
      </Link>
    </div>
  )
}
