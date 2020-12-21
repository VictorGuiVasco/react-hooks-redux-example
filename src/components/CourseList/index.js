import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function CourseList() {

  const [text, setText] = useState('')

  const course = useSelector(state => state.data)
  const dispath = useDispatch()

  function addCourse() {
    dispath({ type: 'ADD_COURSE', title: text })
  }

  return (
    < >
      <ul>
       { course.map(course => <li key={course} >{course}</li>) }
      </ul>

      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />

      <button type='button' onClick={addCourse} >
        Adicionar curso
      </button>
    </ >
  );
}

export default CourseList;