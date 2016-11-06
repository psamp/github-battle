import React from 'react'
import Skeleton from '../styles/skeleton.css'

export default class Main extends React.Component {
  render() {
    return (
      <div className={Skeleton.container}>
        {this.props.children}
      </div>
    )
  }
}
