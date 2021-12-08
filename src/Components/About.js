import React, { useState } from 'react'

export default function About() {
    const [myStyle, newStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, newBtnText] = useState("Enable Dark Mode");
    const ToggleStyle = () => {
        if (myStyle.color === "black") {
            newStyle({
                color: 'white',
                backgroundColor: 'Black'
            })
            newBtnText("Enable Light Mode")
        } else {
            newStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            newBtnText("Enable Light Mode")
        }
    }
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome To WriteMight</h2>
                            <p>A Place To Show Your Creativity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3 " style={myStyle}>
                <div className="row">
                    <div className="col-md-5" style={myStyle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis magni ex necessitatibus maxime saepe, vero sit aliquam vitae explicabo numquam aperiam esse tempora voluptas. Esse distinctio, molestias laborum rem corporis ex explicabo debitis repellendus minima facilis, numquam expedita asperiores?
                    </div>
                    <div className="col-md-7" style={myStyle}>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos tempore quos nisi eius perspiciatis? Dolorum, aperiam! Aliquid, sapiente dignissimos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nemo!
                        </div>
                        <button className="btn-sm btn-primary mx-2 my-2" onClick={ToggleStyle}>{btnText}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
