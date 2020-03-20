import React from 'react';
import ReactDOM from 'react-dom';

import '../webapp/css/App.css';

class Login extends React.Component {
 
  render(){
   
    return <body>
        <div className = "wall">

          <header>
              <h1>
                <a href ="/" className="header">HPL</a>
              </h1>
          </header>
            <br></br>
            <h2>로그인</h2>
          
          <section>
            
            <input type ="email" className="blank" placeholder="id"></input>
            <br></br>
            <br></br>
            <input type = "password" className = "blank" placeholder="password"></input>
            <br></br>
            <br></br>
            <button id = "button1">로그인</button>
            <hr></hr>
            <div className="BG">
            <button className = "button2">회원가입</button>
            <button className = "button3">아이디 찾기</button>
            <button className = "button4">비밀번호 찾기</button>
            </div>
          </section>
        </div>
      </body>
    
  }
}

ReactDOM.render(<Login/>, document.getElementById('root'));