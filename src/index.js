import React from "react";
import ReactDOM from "react-dom/client"

const people ={
  no:1,
  level: '1단계',
  room: 'A강의실'
}


function Header(){
  return (
    <header>
      <h1>{`React Welcome + ${1 + 2}`}</h1>
    </header>
  );
}

function Content(){
  return (
    <>
    <ul className="main" name={5}>
      <li>{people.no}</li>
      <li>{people.level}</li>
      <li>{people.room}</li>
    </ul>
    <p> 
      <span>react 컴포넌트 내용</span>
      <label htmlFor="userName">네임</label>
      <input type="text" id="userName" />
    </p>
    </>
  );
}

function Footer(){
  return (
    <footer>
      <small>저작권정보</small>
    </footer>
  );
}


function App(){
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

// export
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)