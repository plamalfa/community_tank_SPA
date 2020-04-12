import React, { Component } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import '../styles/Homepage.css'

export default function Homepage() {
  return (
    <div className="container">
      <h1>Freshwater Aquarium Guide for Beginners</h1>
      <header>
        <Link to="/gettingStarted">Getting Started </Link> | <Link to="/species">Fish</Link>
      </header>
      <br />
      Welcome! Whether you are brand new to the fishkeeping hobby or returning after a few years, this guide is a great resource for learning how to care for your aquatic friends. A community tank is a great option for people who want to enjoy a variety of different fish. In addition to covering tank setup and maintenance, I’ve focused on a handful of popular fish species known for their peaceful nature and heartiness - perfect for a beginner. With the right knowledge and a little patience, fishkeeping can be extremely fun and rewarding.
=======

export default function HomePage() {
  return (
    <div className="container">
      <h1>This is the HomePage!</h1>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/species">Species</Link>
>>>>>>> 56185e96dcf11440d1048f5a8bddfeb5f5cf94ec
    </div>
  )
}
