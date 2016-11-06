import React from 'react'
import Prompt from '../components/Prompt'

export default class PromptContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: ''
      }
      console.log(this.props)
    }

    contextTypes : {
        router: React.PropTypes.object.isRequired
    }

    handleSubmitUser(e) {
        e.preventDefault()

        let username = this.state.username
        this.setState({username: ''});
        let playerOne = this.props.routeParams.playerOne

        if (playerOne) {
            let url = {
                pathname: '/battle',
                query: {
                    playerOne: playerOne,
                    playerTwo: this.state.username
                }
            }
            this.props.router.push(url)
        } else {
            this.props.router.push(`/playerTwo/${this.state.username}`)
        }
    }

    handleUpdateUser(event) {
        let newState = {
            username: event.target.value
        }
        this.setState(newState)
    }

    render() {
        return (<Prompt onSubmitUser={this.handleSubmitUser.bind(this)} onUpdateUser={this.handleUpdateUser.bind(this)} header={this.props.route.header} username={this.state.username}/>)
    }
}
