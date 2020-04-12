import React, { Component } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import data from '../fishDB'
=======
>>>>>>> 56185e96dcf11440d1048f5a8bddfeb5f5cf94ec

export default function Species() {
  return (
    <div className="container">
      <h1>This is the Species Page!</h1>
<<<<<<< HEAD
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
=======
>>>>>>> 56185e96dcf11440d1048f5a8bddfeb5f5cf94ec
    </div>
  )
}
