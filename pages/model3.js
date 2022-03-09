import React from 'react'
import HeaderWhite from '../Components/HeaderWhite'
 

function model3() {
    return (
        <div className="Model3">
           <div>
                <HeaderWhite/>
                <div className="Model3-Head-1" id="model3">
                    <h1 className="Model3-Head-1-h1">Model 3</h1>
                    <div className="Model3-Head-1-button">
                        <div className="Model3-Head-1-button-sidebar">
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1" href="#model3">Model 3</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1" href="#safety">Safety</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">performance</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">all-wheel drive</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">range</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">autopilot</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">interior</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">specs</a>
                            </div>
                            <div className="Model3-Head-1-button-sidebar2">
                                <a className="Model3-Head-1-button-sidebar1">order</a>
                            </div>
                        </div>
                        <div className="Model3-Head-1-button-box1">
                            <div className="Model3-Head-1-button-box1-b">
                                <div className="Model3-Head-1-button-box1-b-b">
                                    <div className="Model3-Head-1-button-box1-b-b-s">
                                        <img src="/images/speed1.svg" className="Model3-Head-1-button-box1-svg" />
                                        <h1 className="Model3-Head-1-button-box1-h1">3.1 s</h1>
                                    </div>
                                    <p className="Model3-Head-1-button-box1-b-b-p">0-60 mph*</p>
                                </div>
                                <div className="Model3-Head-1-button-box1-b-b" >
                                    <h1 className="Model3-Head-1-button-box1-h1" >358 mi</h1>
                                    <p className="Model3-Head-1-button-box1-b-b-p">Range (EPA est.)</p>
                                </div>
                                <div className="Model3-Head-1-button-box1-b-b" >
                                    <h1 className="Model3-Head-1-button-box1-h1" >AWD</h1>
                                    <p className="Model3-Head-1-button-box1-b-b-p">Dual Motor</p>
                                </div>
                                <button className="Model3-Head-1-button-box1-btn">order now</button>
                                <div className="ChatIcon" >
                                    <img src="/images/chat.png" className="Chat" alt="chat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Model3-Head-1-button-2" href="#safety">
                        <img src="/images/down-arrow.svg" className="Model3-Head-1-button-arrow" />
                    </div>
                </div>
            </div> 
            <div className="Model3-1" id="safety">
                <div className="Model3-1-text">
                    <div className="Model3-1-text-top">
                        <p className="Model3-1-text-top-p">Safety</p>
                        <h1 className="Model3-1-text-top-h1">Built for Safety</h1>
                    </div>
                    <div className="Model3-1-text-middle">
                        <p className="Model3-1-text-middle-p">Safety is the most important part of the<br/>overall Model 3 design. The metal<br/>structure is a combination of aluminum<br/>and steel, for maximum strength in every<br/>area. In a roof-crush test, Model 3 resisted<br/>four times its own mass, even with an all-<br/>glass roof: that's the same weight as two<br/>full-grown African elephants.</p>
                    </div>
                    <div className="Model3-1-text-button">
                        <button className="Model3-1-text-button-b1"><img src="/images/plus.svg" className="" /></button>
                        <p className="Model3-1-text-button-p">learn more</p>
                        <button className="Model3-1-text-button-b2">order now</button>
                    </div>
                </div>
                <div className="Model3-1-img">
                    
                </div>
                <div className="Model3-1-arr">
                    <img src="/images/arrow-up.svg" className="h-5 w-5" />
                </div>
            </div>
        </div>
    )
}

export default model3
