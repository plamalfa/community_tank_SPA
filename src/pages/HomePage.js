import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

export default function Homepage() {
  return (
    <div class='container-sm'>
      <nav class='navbar fixed-top'>
        <h3 class=''>Pete's Aquarium Guide</h3>
        <Link to="/gettingStarted">Getting Started</Link><Link to="/species">Fish</Link><Link to="/species">Fish</Link><Link to="/species">Fish</Link>
      </nav>
      <section>
        <p>Welcome! Whether you are brand new to the fishkeeping hobby or returning after a few years, this guide is a great resource for learning how to care for your aquatic friends. A community tank is a great option for people who want to enjoy a variety of different fish. In addition to covering tank setup and maintenance, I’ve focused on a handful of popular fish species known for their peaceful nature and heartiness - perfect for a beginner. With the right knowledge and a little patience, fishkeeping can be extremely fun and rewarding.</p>
      </section>
      <section>
        <p>Welcome! Whether you are brand new to the fishkeeping hobby or returning after a few years, this guide is a great resource for learning how to care for your aquatic friends. A community tank is a great option for people who want to enjoy a variety of different fish. In addition to covering tank setup and maintenance, I’ve focused on a handful of popular fish species known for their peaceful nature and heartiness - perfect for a beginner. With the right knowledge and a little patience, fishkeeping can be extremely fun and rewarding.</p>
      </section>
      <section>
        <p>Welcome! Whether you are brand new to the fishkeeping hobby or returning after a few years, this guide is a great resource for learning how to care for your aquatic friends. A community tank is a great option for people who want to enjoy a variety of different fish. In addition to covering tank setup and maintenance, I’ve focused on a handful of popular fish species known for their peaceful nature and heartiness - perfect for a beginner. With the right knowledge and a little patience, fishkeeping can be extremely fun and rewarding.</p>
      </section>
      <section>
        <p>Welcome! Whether you are brand new to the fishkeeping hobby or returning after a few years, this guide is a great resource for learning how to care for your aquatic friends. A community tank is a great option for people who want to enjoy a variety of different fish. In addition to covering tank setup and maintenance, I’ve focused on a handful of popular fish species known for their peaceful nature and heartiness - perfect for a beginner. With the right knowledge and a little patience, fishkeeping can be extremely fun and rewarding.</p>
      </section>
    </div>
  )
}
