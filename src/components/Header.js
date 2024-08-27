import React from 'react'

const Header = () => {
  const changeTheme = () =>{
    document.body.classList.toggle('light-theme');
  }
  return (
    <div>
        <header className='header'>
            <div>
     <h1>Where in the world?</h1>
     </div>
     <div>
        <i class="fa-solid fa-moon"  onClick={changeTheme}>Dark Mode</i>
     </div>
        </header>
    </div>
  )
}

export default Header