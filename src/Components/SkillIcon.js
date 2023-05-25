import React from 'react'

export default function SkillIcon(props) {
  return (
    <div className={'skill-icon'} style={{marginTop: '6px'}}>
        <div className="icon-border" alt={props.alt} title={props.title}>{props.icon}</div>
        <div style={{ position: 'absolute', top: '90px' }}>{props.title}</div>
    </div>
  )
}
