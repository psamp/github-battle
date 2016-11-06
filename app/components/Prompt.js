import { PropTypes } from 'react'
import Skeleton from '../styles/skeleton.css'

function Prompt(props) {
    return (
        <div>
            <h1>props.header</h1>
            <div className={Skeleton['u-full-width']}>
                <form onSubmit={props.onSubmitUser}>
                    <div className={Skeleton.six + Skeleton.columns}>
                        <input type='text' onChange={props.onUpdateUser} placeholder='Github Username' value={props.username}/>
                    </div>
                    <div className='six columns'>
                        <button className={Skeleton['button-primary']} type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Prompt.propTypes = {
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default Prompt;
