import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';


class MainPage extends React.Component {


    render() {
        return 	<body>
            <header className = "header">
                <div className = "inner">
                    <div className = "logo">
                        <a href = "https://www.choolab.com" id = "NS"><strong>Projected</strong> by NS</a>
                    </div>
                    <div id = "nav">
                        <a href = "main.html" id= "nav1"><strong>Home</strong></a>
                        <a href = "main.html" id= "nav1"><strong>Center</strong></a>
                        <a href = "main.html" id= "nav1"><strong>Footer</strong></a>
                    </div>

                </div>
                
            </header>
            <hr></hr>
            <section>
                <div id = "main">
                    HPL
                </div>
                <div id = "intro">
                    <div id = "qr">
                        <div id = "img"></div>
                        QRcode
                        <p>
                            QR코드를 이용해 간편하게 반려동물의 정보를 등록할 수 있습니다.
                        </p>
                    </div>
                    <div id = "chat">
                        <div id = "img"></div>
                        Chat
                        <p>
                            발견자와의 1:1 채팅이 가능합니다.
                        </p>
                    </div>
                    <div id = "push">
                        <div id = "img"></div>
                        Push
                        <p>
                            푸시알림을 통해 인근지역의 회원에게 알림메시지
                        </p>
                    </div>
                    
                    
                </div>
                
            </section>
            <footer>
                <div className = "StartBtn">
                    <a href="#" id="button">Get Started</a>
                </div>
            </footer>
            
        </body>
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));