import React from 'react'
import {  BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/app/data'

const Grid = () => {
  return (
    <section id= "about">
        <BentoGrid>
            {gridItems.map((item)=>(
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                image= {item.img}
                imageClassName = {item.imgClassName}
                titleClassName={item.titleClassName}
                spareimg ={item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid