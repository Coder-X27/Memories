import React, { useEffect } from 'react'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import memories from './images/memories.png'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'
import './App.css'
const App = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  
  return (
    <>
      <div className="upper">
        <div className="memoriesContainer">
          <h3 className='introTitle'>Memories</h3>
          <img src={memories} alt="" />
        </div>
      </div>
      <div className="lower">
        <div className="postsContainer">
          <Posts/>
        </div>
        <div className="formContainer">
          <Form/>
        </div>
      </div>
    </>
  )
}

export default App