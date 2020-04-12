import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../fishDB'

export default function IndividualSpecies(props) {

  const speciesName = data[props.match.params.id-1].name;

  return (
    <div className="container">
      <h1>This is the Individual Species Page!</h1>
      <h2>{speciesName}</h2>
      <img style={{width: '300px', height: '300px'}} src={require(`../img/${speciesName.replace(/ /g, '').concat('.jpg')}`)} />
    </div>
  )
}
