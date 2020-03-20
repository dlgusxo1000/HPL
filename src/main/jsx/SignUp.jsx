import '../webapp/css/SignUp.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
 
class SignUp extends React.Component {
 
    render() {

        return <body>
          <div className = "div">

          <header>
              <h1>
                <a href ="/" className="header">HPL</a>
              </h1>
          </header>
          <section>
            <h2>회원가입</h2>
            
              <div>아이디<br></br>
        <input type="text" placeholder="아이디"></input>
        </div>
        <div>비밀번호<br></br>
        <input type="password" placeholder="비밀번호"></input>
        </div>
        <div>비밀번호확인<br></br>
        <input type="password" placeholder= "비밀번호확인"></input>
        </div>
        <div>이름<br></br>
        <input type="text" placeholder="이름"></input></div>
        <div>휴대전화<br></br>
        <input type="text" placeholder="휴대전화"></input>
        </div>
        <div>주소<br></br>
        <input type="text" placeholder="동까지만 입력하세요."></input>
        </div>
        <div>
        <br></br>
        <button id = "button1">가입하기</button>
        </div>
        <div className ="a">
          <a href ="/">로그인</a>
        </div>
        </section>
        </div>
        </body>
      
    }
}
ReactDOM.render(<SignUp/>, document.getElementById('root'));