import React from 'react'
import {PropTypes} from 'react'
import Skeleton from '../styles/skeleton.css'

export default class Prompt extends React.Component {
    propTypes : {
        onSubmitUser: PropTypes.func.isRequired,
        onUpdateUser: PropTypes.func.isRequired,
        header: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <div className={Skeleton['u-full-width']}>
                    <form onSubmit={this.props.onSubmitUser}>
                        <div className={Skeleton.six + Skeleton.columns}>
                            <input type='text' onChange={this.props.onUpdateUser} placeholder='Github Username' value={this.props.username}/>
                        </div>
                        <div className='six columns'>
                            <button className={Skeleton['button-primary']} type='submit'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
