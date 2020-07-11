import React from 'react'

function TitltPage(){
    return (
        <div>
            Ini adalah final project kelas ReactJS batch Juni Sanbercode Code 2020.
            <br />
        </div>
    )
}

function Sosmed() {
    return (
        <div>
            Terhubung dengan saya di : <br />
            <div className="social-media">
                <a href="https://www.linkedin.com/in/ucims"><i className="fa fa-linkedin"></i ></a>
                <a href="https://www.github.com/ucims"><i className="fa fa-github"></i></a>
                <a href="https://www.gitlab.com/ucims"><i className="fa fa-gitlab"></i></a>
            </div>
        </div>
    )
}
export default class About extends React.Component{
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <TitltPage />
                    <Sosmed />
                </header>
            </div>
        )
    }
}