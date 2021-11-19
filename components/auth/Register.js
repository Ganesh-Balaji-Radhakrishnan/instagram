import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export class Register extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  onSignUp = () => {
    console.log('pressed')
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChange={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChange={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChange={(password) => this.setState({ password })}
        />
        <Button title="Signup" onPress={this.onSignUp} />
      </View>
    )
  }
}

export default Register
