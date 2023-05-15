import React from 'react'

export default function ProjectCard(props) {
  return (
    <div>
        {props.title}
        {props.image}
        {props.description}
        {props.link}
        {props.logos}
    </div>
  )
  }