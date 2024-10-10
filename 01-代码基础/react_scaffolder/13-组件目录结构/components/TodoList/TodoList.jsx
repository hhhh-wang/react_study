import React, { Component } from 'react'
import Header from '../Header'
import Main from '../Main/Main'
import './index.css'
export default class TodoList extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
      </>
    )
  }
}
