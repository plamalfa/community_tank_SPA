import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../fishDB'

export default function Species() {
  return (
    <div className="container">
      <h1>This is the Species Page!</h1>
      <ul>
        {
        data.map(species => (
          <div>
            <Link to={`/species/${species.id}`}>
              {species.name}
            <br></br>
            </Link>
            <img style={{width: '300px', height: '300px'}} src={require(`../img/${species.name.replace(/ /g, '').concat('.jpg')}`)} />
          </div>
        ))}
      </ul>
    </div>
  )
}
