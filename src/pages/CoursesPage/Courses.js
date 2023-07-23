import React from 'react'
import Course from './Course'
import './Courses.css'
import ml from "./3222625.png"
import web from "./software-development_8083324.png"
import ai from './ai_1693746.png'
import da from './monitor_2782058.png'
export default function () {
  return (
    <div className='Courses'>
    
    <Course 
    title= "Machine Learning" 
    about=' "Machine Learning" by Andrew Ng is one of the most well-known and highly recommended online courses. It covers the fundamentals of machine learning and provides hands-on experience with programming assignments." ' 
    icon ={ml}/>

<Course 
    title= "Web Development" 
    about=' "Machine Learning" by Andrew Ng is one of the most well-known and highly recommended online courses. It covers the fundamentals of machine learning and provides hands-on experience with programming assignments." ' 
    icon ={web}/>

<Course 
    title= "Data Analytics" 
    about=' "Machine Learning" by Andrew Ng is one of the most well-known and highly recommended online courses. It covers the fundamentals of machine learning and provides hands-on experience with programming assignments." ' 
    icon ={da}/>

<Course 
    title= "Artitficial Intelligence" 
    about=' "Machine Learning" by Andrew Ng is one of the most well-known and highly recommended online courses. It covers the fundamentals of machine learning and provides hands-on experience with programming assignments." ' 
    icon ={ai}/>
    </div>
  )
}
