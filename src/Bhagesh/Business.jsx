import React from 'react'
import { useState, useEffect} from 'react';
import './business.css'
import {Link} from 'react-router-dom'

export const Business = () => {
    const [todos, setTodos] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

    useEffect(() => {

        const getData=()=>{
            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a8530012bbc645868253c7c02779232f`)
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                // console.log(data)
                let bhagData=data.articles;
                localStorage.setItem("dnadata",JSON.stringify(bhagData))
                // console.log(aditya)
                setTodos(bhagData)
            })
        }
        // async function getData() {
        //   const response = await fetch(
        //     `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a8530012bbc645868253c7c02779232f`
        //   )
        //   let actualData = await response.json();
        //   let databb = actualData.articles;
        // //   console.log(actualData.articles) 
        //   console.log(databb)
        //   localStorage.setItem("data111",JSON.stringify(actualData.articles))
        //   setTodos(databb)
        
        // }
        getData()
      }, [])
      
  return <div>
         <h1>BUSINESS</h1>
        {todos.map((todo,index) =>(
            <div className='world11' key={todo.title}>
                <div><img style={{width:"160px", height:"95px"}} src={todo.urlToImage}/></div>
                <div><Link to={`/${index}`}><p style={{underline:"none"}}>{todo.title}</p></Link></div>
            </div>
            
        ))}
    </div>
  
}