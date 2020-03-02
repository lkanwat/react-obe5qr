import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [])

const ScrollDemo = () => {
	const myRef = useRef(null)

	useMountEffect(() => scrollToRef(myRef)) // Scroll on mount

	return (
    <> {/* React.Fragment*/}
      <div style={{height:600}} />	{/* just to demonstrate scroll*/}
      <div ref={myRef}>I wanna be seen</div> 
      {/* Attach ref object to a dom element */}
      <div style={{height:1500}} />	{/* just to demonstrate scroll*/}
      <button onClick={()=>scrollToRef(myRef)} >Click to scroll </button> 
      {/* Scroll on click */}
    </>
	)

}

render(<ScrollDemo />, document.getElementById('root'));
