import React from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import MessageIcon from '@material-ui/icons/Message';
import Footer from '../Components/Footer';

function models() {
    return (
        <div>
            <Header/>
            <div className="modelsHead">
                <div className="ModelsHeader">
                    <h1>Model s</h1>
                    <p>Plaid</p>
                </div>
                <div className="flex flex-col">
                    <div className="chathead">
                        <div className="chatIcon" >
                            <img src="/images/chat.png" className="chat" alt="chat"/>
                        </div>
                    </div>
                    <div className="ModelsBottom">
                        <div>
                            <p className="ModelsText">396<span className="ModelsText1">mi</span></p>
                            <p className="ModelsTextp">Range (EPA est.)</p>
                        </div>
                        <div>
                            <p className="ModelsText">1.99<span className="ModelsText1">s</span></p>
                            <p  className="ModelsTextp">0-60 mph*</p>
                        </div>
                        <div>
                            <p className="ModelsText">200<span className="ModelsText1">mph</span></p>
                            <p  className="ModelsTextp">Top speed*</p>
                        </div>
                        <div>
                            <p className="ModelsText">1,020<span className="ModelsText1">hp</span></p>
                            <p  className="ModelsTextp">Peak Power</p>
                        </div>
                        <div className="ModelButton">
                            <button className="ModelButtonText">ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ModelsHead2">
                <h1 className="ModelsHead2H1">All-New Interior</h1>
            </div>
            <div className="BlackSpade">

            </div>
            <div className="ModelsHead3">
                <div className="ModelsHead3Image">
                    <div className="ImageSlider">
                        <div className="ImageSliderBorder">
                            <img className="ImageSliderIcon" src="/images/left-arrow.png" />
                        </div>
                        <div className="ImageSliderBorder">
                            <img className="ImageSliderIcon" src="/images/right-arrow.png" />
                        </div>
                    </div>
                </div>
                <div className="ModelsHead3Desc">
                    <h1 className="Models-Head3-h1">17'' Cinematic Display</h1>
                    <p className="Models-Head3-p">With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best<br/>screen to watch anywhere.</p>
                </div>
            </div>
            <div className="Models-Head-4">
                <div className="Modes-Head-4-colums">
                    <div>
                        <div className="Models-Head-4-colums1">
                            <img src="/images/game.jpg" />
                        </div>
                    </div>
                    <div className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text">
                            <h1 className="Models-head-4-Row-h1">Stay Connected</h1>
                            <p className="Models-head-4-Row-p">Multi-device Bluetooth, wireless and USB-C charging<br/>for every passenger, with enough power to fast-charge<br/>your tablets and laptop.</p>
                        </div>
                    </div>
                    <div className="Models-Head-4-colums1">
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c49862d9-6501-4d04-8d39-1929fa019bc5/bvlatuR/std/840x472/MS-Interior-Grid-C-Mobile"/>
                    </div>
                    <div  className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text">
                            <h1 className="Models-head-4-Row-h1">Real Storage</h1>
                            <p className="Models-head-4-Row-p">With front and rear trunks and fold-flat seats, Model S<br/>is a luxury car where you can fit your bike without<br/>taking the wheel off, and your luggage too.</p>
                        </div>
                    </div>
                </div>
                <div className="Modes-Head-4-colums">
                    <div className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text-2">
                            <h1 className="Models-Head-4-Row-h1-2">Game from Anywhere</h1>
                            <p className="Models-Head-4-Row-p-2">Up to 10 teraflops of processing power enables in-car<br/>gaming on-par with today’s newest consoles. Wireless<br/>controller compatibility lets you game from any seat.</p>
                        </div>
                    </div>
                    <div className="Models-Head-4-colums1">
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop"/>
                    </div>
                    <div  className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text-2">
                            <h1 className="Models-Head-4-Row-h1-2">Your Best Audio System</h1>
                            <p className="Models-Head-4-Row-p-2">A 22-speaker, 960-watt audio system with Active Road<br/>Noise Reduction offers the best listening experience<br/>wherever you are.</p>
                        </div>
                    </div>
                    <div className="Models-Head-4-colums1" >
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop" />
                    </div>
                </div>
            </div>
            <div className="Models-Head-5">
                <div className="Models-Head-5-Text">
                    <div className="Models-Head-5-Text-box">
                        <h1 className="Models-Head-5-Text-box-h1">1,020<span className="Models-Head-5-Text-span">hp</span></h1>
                        <p className="Models-Head-5-p">Peak power</p>
                    </div>
                    <div Models-Head-5-Text-box>
                        <h1 className="Models-Head-5-Text-box-h1">9.23<span className="Models-Head-5-Text-span">s</span></h1>
                        <p className="Models-Head-5-p">@155 mph 1/4 mile</p>
                    </div>
                    <div Models-Head-5-Text-box>
                        <h1 className="Models-Head-5-Text-box-h1">1.99<span className="Models-Head-5-Text-span">s</span></h1>
                        <p className="Models-Head-5-p">0-60 mph*</p>
                    </div>
                </div>
            </div>
            <div className="Modesl-Head-6">
                <div className="Models-head-6-box">
                    <p className="Models-Head-6-p">Plaid</p>
                    <h1 className="Models-Head-6-h1">Beyond Ludicrous</h1>
                    <button className="Models-Head-6-Button">order now</button>
                </div>
                <div className="Models-Head-6-Box2">
                    <p className="Models-Head-6-Box2-p">With the longest range and quickest acceleration of any electric vehicle in<br/>production, Model S Plaid is the highest performing sedan ever built. All Model S<br/>powertrains, with updated battery architecture, are capable of back-to-back,<br/>consistent 1/4 mile runs.</p>
                </div>
            </div>
            <div className="Models-Head-7">
                <div className="Models-Head-7-box1">
                    <h1 className="Models-Head-7-box1-h1">Electric Powertrain</h1>
                    <p className="Models-Head-7-box1-p">Model S platforms unite powertrain and battery technologies for unrivaled performance, range and<br/>efficiency. New module and pack thermal architecture allows faster charging and gives you more power<br/>and endurance in all conditions</p>
                </div>
                <div className="Models-Head-7-box2">
                    <div className="Models-Head-7-box2-image">

                    </div>
                </div>
                <div className="Models-Head-7-box3">
                        <div className="Models-Head-7-box3-box1">
                            <h1 className="Models-Head-7-box3-box1-h1">Model s</h1>
                            <p className="Models-Head-7-box3-box1-p">Dual Motor All-Wheel Drive platform allows for the<br/>longest range, and now delivers insane power and<br/>acceleration</p>
                            <div className="Models-Head-box3-box1-class">
                                <div>
                                    <h1 className="Models-Head-box3-box1-class-h1">3.1 <span>s</span></h1>
                                    <p>0-60 mph</p>
                                </div>
                                <div>
                                    <h1 className="Models-Head-box3-box1-class-h1">405 <span>mi</span></h1>
                                    <p>range (est.)</p>
                                </div>
                                <div>
                                    <h1 className="Models-Head-box3-box1-class-h1">670 <span>hp</span></h1>
                                    <p>peak power</p>
                                </div>
                            </div>
                        </div>
                        <div className="Models-Head-7-box3-box2">
                            <h1 className="Models-Head-7-box3-box1-h1">Model s Plaid</h1>
                            <p className="Models-Head-7-box3-box1-p">Tri Motor All-Wheel Drive platform with torque<br/>vectoring features three independent motors, each with<br/>a carbon-sleeved rotor that maintains peak power<br/>output all the way to top speed</p>
                            <div className="Models-Head-box3-box1-class-2">
                                <div>
                                    <h1 className="Models-Head-box3-box1-class-h1">1.99 <span>s*</span></h1>
                                    <p>0-60 mph</p>
                                </div>
                                <div>
                                    <h1 className="Models-Head-box3-box1-class-h1">396 <span>mi</span></h1>
                                    <p >range (EPA est.)</p>
                                </div>
                                <div>
                                    <h1 className="Models-Head-box3-box1-class-h1">1020 <span>hp</span></h1>
                                    <p>peak power</p>
                                </div>
                            </div>
                        </div>
                </div>
                <p className="Models-Head-7-p">* With rollout subtracted</p>
            </div>
            <div className="Models-Head-5-2">
                <div className="Models-Head-5-Text">
                    <div className="Models-Head-5-Text-box">
                        <p className="Models-Head-5-p">Performance-focused chassis</p>
                    </div>
                    <div Models-Head-5-Text-box>
                        <h1 className="Models-Head-5-Text-box-h1">0.208<cite className="Models-Head-5-Text-span">cd</cite></h1>
                        <p className="Models-Head-5-p">Lowest-drag car on Earth</p>
                    </div>
                    <div Models-Head-5-Text-box>
                        <p className="Models-Head-5-p">Refined exterior styling</p>
                    </div>
                </div>
            </div>
            <div className="Modesl-Head-6">
                <div className="Models-head-6-box">
                    <p className="Models-Head-6-p">Exterior</p>
                    <h1 className="Models-Head-6-h1">Designed for Efficiency</h1>
                    <button className="Models-Head-6-Button">order now</button>
                </div>
                <div className="Models-Head-6-Box2">
                    <p className="Models-Head-6-Box2-p">With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built<br/>for speed and range. Together with a wider body and chassis, these elements help<br/>you go down the straight or around corners quicker than ever.</p>
                </div>
            </div>
            <div className="Models-Head-8">
                <div className="Modes-Head-8-colums">
                    <div className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text">
                            <h1 className="Models-head-4-Row-h1">Responsive Performance</h1>
                            <p className="Models-head-4-Row-p">Staggered, performance-focused wheels and tires keep<br/>the car planted and transfer even more power down to<br/>the road.</p>
                        </div>
                    </div>
                    <div>
                        <div className="Models-Head-8-colums1">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5207af00-08c6-4b97-83c2-72b82e429977/bvlatuR/std/1040x584/MS-Exterior-Grid-A-Desktop" />
                        </div>
                    </div>
                    <div  className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text">
                            <h1 className="Models-head-4-Row-h1">Refined Styling</h1>
                            <p className="Models-head-4-Row-p">Exterior design combines an iconic look with elegant<br/>proportions.</p>
                        </div>
                    </div>
                     
                </div>
                <div className="Modes-Head-4-colums">
                    <div className="Models-Head-4-colums1">
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dc359148-9ac3-4820-970c-ee6b2fa0a2ce/bvlatuR/std/840x472/MS-Exterior-Grid-B-Mobile"/>
                    </div>
                    <div className="Models-Head-4-Row">
                        <div className="Models-head-4-Row-Text-2">
                            <h1 className="Models-Head-4-Row-h1-2">Optimized Aerodynamics</h1>
                            <p className="Models-Head-4-Row-p-2">Attention to detail on all exterior surfaces makes Model<br/>S the most aerodynamic production car on Earth.</p>
                        </div>
                    </div>
                    <div className="Models-Head-4-colums1" >
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/86834280-62f6-44ce-83f0-c0748021fb78/bvlatuR/std/840x472/MS-Exterior-Grid-C-Mobile" />
                    </div>
                    
                </div>
            </div>
            <div className="Models-Head-9-Head">
                <div className="Models-Head-9">
                    <div className="Models-Head-5-Text">
                        <div className="Models-Head-5-Text-box">
                            <h1 className="Models-Head-5-Text-box-h1">405<span className="Models-Head-5-Text-span">mi</span></h1>
                            <p className="Models-Head-5-p">Go anywhere with up to 405 miles of<br/>estimated range on a single charge</p>
                        </div>
                        <div Models-Head-5-Text-box>
                            <h1 className="Models-Head-5-Text-box-h1">200<span className="Models-Head-5-Text-span">mi</span></h1>
                            <p className="Models-Head-5-p">Supercharge up to 200 miles in 15<br/>minutes</p>
                        </div>
                        <div Models-Head-5-Text-box>
                            <h1 className="Models-Head-5-Text-box-h1">25,000<span className="Models-Head-5-Text-span">+</span></h1>
                            <p className="Models-Head-5-p">Superchargers placed along popular<br/>routes</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Models-Head-9-box2">
                        <p className="Models-Head-9-box2-p">Range</p>
                        <h1 className="Models-Head-9-box2-h1">Go Anywhere</h1>
                        <p className="Models-Head-box2-p-p">Travel farther on a single charge than any other<br/>electric vehicle—and keep going with access to<br/>25,000+ Superchargers globally. By combining<br/>up to 405 miles of estimated range with Tesla<br/>fast charging technology, you’ll spend less time<br/>charging and even more time on the road.</p>
                        <button className="Models-Head-9-box2-button">order now</button>
                    </div>
                </div>
           </div>
           <div className="Models-Head-10">
               <div className="Models-Head-10-Text-Fild">
                    <h1 className="Models-Head-Text-Field-h1">Freedom to Travel</h1>
                    <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with<br/>Superchargers along the way.</p>
               </div>
               <div className="Models-Head-10-Image-Field">

               </div>
               <div className="Models-Head-10-Futter-Field">
                    <div className="Models-Head-10-Futter-Field-1">
                        <h1>San Jose to Los<br/>Angeles</h1>
                        <h2 className="Models-Head-10-Futter-field-h2">340 <span>miles</span></h2>
                    </div>
                    <div className="Models-Head-10-Futter-Field-1">
                        <h1>Berkeley to Lake<br/>Tahoe</h1>
                        <h2 className="Models-Head-10-Futter-field-h2">178 <span>miles</span></h2>
                    </div>
                    <div className="Models-Head-10-Futter-Field-1">
                        <h1>Manhattan to<br/>Boston</h1>
                        <h2 className="Models-Head-10-Futter-field-h2">211 <span>miles</span></h2>
                    </div>
                    <div className="Models-Head-10-Futter-Field-1">
                        <h1>Fort Lauderdale<br/>to Orlando</h1>
                        <h2 className="Models-Head-10-Futter-field-h2">195 <span>miles</span></h2>
                    </div>
               </div>
               <div className="Models-Head-10-Futter-Field-Button">
                   <button className="Models-Head-10-Futter-Field-Button-btn">learn more</button>
               </div>
           </div>
           <div className="Models-Head-11">
               <div className="Models-Head-11-Text-Field">
                    <h2 className="Models-Head-11-Text-Field-h2">Safety</h2>
                    <h1 className="Models-Head-11-Text-Field-h1">High Impact Protection</h1>
                    <p className="Models-Head-11-Text-Field-p">Model S is built from the ground up as an,<br/>electric vehicle, with a high-strength<br/>architecture and floor-mounted battery<br/>pack for incredible occupant protection<br/>and low rollover risk. Every Model S<br/>includes Tesla’s latest active safety<br/>features, such as Automatic Emergency<br/>Braking, at no extra cost.</p>
                    <button className="Models-Head-11-Text-Field-btn">order now</button>
               </div>
               <div className="Models-Head-11-Image-Field">
                    <div className="Models-Head-11-Image-Field-line1">
                        <p className="Models-Head-11-Image-Field-line1-p">Side-Impact Protection</p>
                    </div>
                    <div className="Models-Head-11-Image-Field-line2">
                        <p className="Models-Head11-Image-Field-line2-p">Front-Impact Protection</p>
                    </div>
                    <div className="Models-Head-11-Image-Field-line3">
                        <p className="Models-Head-11-Image-Field-line3-p">Very Low Rollover Risk</p>
                    </div>
               </div>
           </div>
           <div className="Models-Head-12">
                 <div className="Models-Head-12-Text-Container">
                     <div className="Models-Head-12-Text-Container-box1">
                         <h1 className="Models-Head-12-Text-Container-box1-h1">360°</h1>
                         <p className="Models-Head-12-Text-Container-box1-p">Rear, side and forward-facing cameras<br/>provide maximum visibility</p>
                     </div>
                     <div className="Models-Head-12-Text-Container-box1">
                         <h1 className="Models-Head-12-Text-Container-box1-h1">250m</h1>
                         <p className="Models-Head-12-Text-Container-box1-p">Powerful visual processing at up to 250<br/>meters of range</p>
                     </div>
                     <div className="Models-Head-12-Text-Container-box1">
                         <div className="Models-Head-12-Text-Container-box-box">
                             <div className="Models-Head-12-Text-Container-box-box-h1">
                                 <h1>12</h1>
                             </div>
                             <p className="Models-Head-12-Text-Container-box-box-p">Ultrasonic<br/>Sensors</p>
                         </div>
                         <p className="Models-Head-12-Text-Container-box1-p">Detects nearby cars, helps prevent<br/>potential collisions and assists with<br/>parking</p>
                     </div>
                 </div>
           </div>
           <div className="Models-Head-13">
               <div className="Models-Head-13-left">
                    <p className="Models-Head-13-left-p">Autopilot</p>
                    <h1 className="Models-Head-13-left-h1">Future of Driving</h1>
                    <button className="Models-Head-13-left-btn">order now</button>
               </div>
               <div className="Models-Head-13-right">
                    <p className="Models-Head-13-right-p">Autopilot enables your car to steer, accelerate and brake automatically within its<br/>lane under your active supervision, assisting with the most burdensome parts of<br/>driving. With over-the-air software updates, the latest enhancements are available<br/>instantly.</p>
               </div>
           </div>
           <div className="Models-Head-14">
               <div className="Models-Head-14-fea">
                    <h1 className="Models-Head-14-fea-h1">Features</h1>
                    <p className="Models-Head-14-fea-p">Full Self-Driving Capability introduces additional features and improves existing functionality to make your<br/>car more capable over time including:</p>
               </div>
               <div className="Models-Head-14-gif">

               </div>
               <div className="Models-Head-14-box">
                    <div className="Models-Head-14-box-nav">
                        <h1 className="Models-Head-14-box-nav-h1">Navigate on<br/>Autopilot</h1>
                        <p className="Models-Head-14-box-nav-p">Active guidance from<br/>on-ramp to off-ramp</p>
                    </div>
                    <div className="Models-Head-14-box-nav">
                        <h1 className="Models-Head-14-box-nav-h1">Auto Lane<br/>Change</h1>
                        <p className="Models-Head-14-box-nav-p">Automatically change lanes<br/>while driving on the highway</p>
                    </div>
                    <div className="Models-Head-14-box-nav">
                        <h1 className="Models-Head-14-box-nav-h1">Summon<br/> </h1>
                        <p className="Models-Head-14-box-nav-p">Automatically retrieve<br/>your car</p>
                    </div>
                    <div className="Models-Head-14-box-nav">
                        <h1 className="Models-Head-14-box-nav-h1">Autopark<br/> </h1>
                        <p className="Models-Head-14-box-nav-p">Parallel and<br/>perpendicular parking<br/>with a single touch</p>
                    </div>
               </div>
           </div>
           <div className="Models-Head-15">
               <div className="Models-Head-15-img">

               </div>
               <div className="Models-Head-15-txt">
                   <div className="Models-Head-15-text-head">
                        <h1 className="Models-Head-15-txt-h1">Model S</h1>
                        <span className="Models-Head-15-txt-span">Specs</span>
                   </div>
                   <div className="Models-Head-15-txt-btn">
                       <button className="Models-Head-15-txt-btn-1">Model S Plaid</button>
                       <button className="Models-Head-15-txt-btn-2">Model S</button>
                   </div>
                   <div className="Models-Head-15-txt-bt">
                       <div className="Models-Head-15-txt-bt1">
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Range</h1>
                                <p className="Models-Head-15-txt-bt-box-p">396 mi (EPA est.)</p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">1/4 Mile</h1>
                                <p className="Models-Head-15-txt-bt-box-p">9.23@155 mph trap speed</p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Peak Power</h1>
                                <p className="Models-Head-15-txt-bt-box-p">1,020 hp</p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Wheels</h1>
                                <p className="Models-Head-15-txt-bt-box-p">19" or 21"</p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Cargo</h1>
                                <p className="Models-Head-15-txt-bt-box-p">28 cu ft</p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Weight</h1>
                                <p className="Models-Head-15-txt-bt-box-p">4,766 lbs</p>
                            </div>
                       </div>
                       <div className="Models-Head-15-txt-bt-2">
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Acceleration</h1>
                                <p className="Models-Head-15-txt-bt-box-p">1.99 s 0-60 mph*<br/><cite className="Models-Head-15-txt-bt-box-p">*with rollout subtracted</cite></p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Top Speed</h1>
                                <p className="Models-Head-15-txt-bt-box-p">200 mph†<br/><cite className="Models-Head-15-txt-bt-box-p">†when equipped with the<br/>proper wheels and tires<br/>(available fall 2021)</cite></p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Drag Coefficient</h1>
                                <p className="Models-Head-15-txt-bt-box-p">0.208 <cite className="Models-Head-15-txt-bt-box-p">Cd</cite></p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Powertrain</h1>
                                <p className="Models-Head-15-txt-bt-box-p">Tri Motor</p>
                            </div>
                            <div className="Models-Head-15-txt-bt-box">
                                <p className="Models-Head-15-txt-bt-box-p1"></p>
                                <h1 className="Models-Head-15-txt-bt-box-h1">Supercharging Max</h1>
                                <p className="Models-Head-15-txt-bt-box-p">250 kW</p>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="Models-Head-16">
               <div className="Models-Head-16-text">
                    <h1 className="Models-Head-16-text-h1">Model S</h1>
                     <div className="Models-Head-16-text-bg">
                         <button className="Models-Head-16-text-bg-bt">order now</button>
                         <button className="Models-Head-16-text-bg-bt1">compare</button>
                     </div>
               </div>
               <div className="Models-Head-16-img">

               </div>
           </div>
           <Footer/>
        </div>
    )
}

export default models


 
