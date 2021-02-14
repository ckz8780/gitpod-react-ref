import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      apiResponse: null,
    }
  }


  postToApi = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Hello world!',
      body: 'It works!',
      userId: 123,
    }).then(response => {
      this.setState({
        apiResponse: JSON.stringify(response.data)
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
        <p>Response: {this.state.apiResponse}</p>
      </div>
    )
  }
}

export default HTTPPost
