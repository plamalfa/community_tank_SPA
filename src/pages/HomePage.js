import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>This is the HomePage!</h1>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/species">Species</Link>
    </div>
  )
}
