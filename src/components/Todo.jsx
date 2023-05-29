import React from 'react'
import { useState } from 'react';
import { addTodo, deletTodo, removeTodo } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
function Todo() {
    const [inputdata, setinputdata] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
        <div className='maindiv'>
            <h1>Add Your List Here ✌️</h1>
            <div className="addItems">
                <input type="text" className="input" placeholder=" ✍️ type the text" value={inputdata} onChange={(event) => setinputdata(event.target.value)}></input>
                <i className="fa fa-plus add-btn" style={{ color: "red" }} onClick={() => dispatch(addTodo(inputdata), setinputdata(''))}></i>
            </div>
            <br></br>
            <div className='addmultipleItems'>
                {
                    list.map((ele) => {
                        return (
                            <div className='eachItems' key={ele.id} style={{display:"flex"}}>
                                <h3 className='h3' style={{ marginBottom: "60px" }}>{ele.data}</h3>
                                <div className='todo-btn'>
                                 <i className="far fa-trash-alt  add-btn" title="Delete Item" style={{ color: "red" }} onClick={() => dispatch(deletTodo(ele.id))}></i>

                                </div>
                            </div>
                            
                        )

                    })
                }

            </div>
           
          </div>
        <button className='btn' hover="CLICK ME" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
        </>
    )
}

export default Todo