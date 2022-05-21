import React from 'react'
import './styles.css'


  const items = [
    {
      title: "Garimpo",
      icon: "garimpo.jpg",
      description:"new"
    },
    {
      title: "Publicar Projecto",
      icon: "primary-bg.jpg",
      description:"new"
    },
    {
      title: "Publicar Projecto",
      icon: "primary-bg.jpg",
      description:"new"
    },
    {
      title: "Publicar Projecto",
      icon: "primary-bg.jpg",
      description:"new"
    },
  ]

const Card = () => {
  return (
    <>
    {items.map((item,index)=>(
      <div className='card'>
      <img src={`images/${item.icon}`} alt={item.icon} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
    ))}
    </>
  )
}

export default Card
