import React from 'react'
import styled from "styled-components"
import Link from "next/link"
import MenuIcon1 from "@material-ui/icons/menu"
import CloseMenu1 from "@material-ui/icons/Close"
import LanguageIcon from '@material-ui/icons/Language';
import { useState } from "react"

function HeaderWhite() {
    const [burgarStatus, setBurgerSatus] = useState(false);
    return (
        <Container1>
             <img src="/images/logoWhite.svg" className=""/>
            <Menu1>
                <Link href="/models">model s</Link>
                <Link href="/model3">model 3</Link>
                <Link href="/">model x</Link>
                <Link href="/">model y</Link>
                <Link href="/">solar roof</Link>
                <Link href="/">solar panes</Link>
            </Menu1>
            <RightMenu1>
                <Link href="/">shop</Link>
                <Link href="/">account</Link>
                <h1 onClick={()=>setBurgerSatus(true)} className="RightMenu1-h1">Menu</h1>
            </RightMenu1>
            <BurgarNav1 show={burgarStatus}>
                <CloseWrapper1>
                    <CloseMenu1 onClick={()=>setBurgerSatus(false)}/>
                </CloseWrapper1>
                {/* <li><Link href="/">MODEL S</Link></li>
                <li><Link href="/">MODEL Y</Link></li>
                <li><Link href="/">MODEL 3</Link></li>
                <li><Link href="/">MODEL X</Link></li> */}
                <li><Link href="/">Existing Inventory</Link></li>
                <li><Link href="/">Use Inventory</Link></li>
                <li><Link href="/">Trede-in</Link></li>
                <li><Link href="/">Cybertrack</Link></li>
                <li><Link href="/">Roadaster</Link></li>
                <li><Link href="/">Semi</Link></li>
                <li><Link href="/">Charging</Link></li>
                <li><Link href="/">Powerwall</Link></li>
                <li><Link href="/">Commercial Energy</Link></li>
                <li><Link href="/">Utilities</Link></li>
                <li><Link href="/">Find Us</Link></li>
                <li><Link href="/">Support</Link></li>
                <li><Link href="/">Investor Relations</Link></li>
                <li><Link href="/"><div className="sidebarbuttom"><LanguageIcon/><div><h1 className="sidebarbuttomh1">United State</h1><p className="sidebarbuttomp">English</p></div></div></Link></li>
            </BurgarNav1>
   </Container1>
    )
}

export default HeaderWhite


const Container1 = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 25px;
    padding-left: 15px;
    padding-right: 15px;
`

const Menu1 = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 15px;
    color: white;
    font-weight: 600;
    opacity: 0.9;
    flex-wrap: nowrap;
    @media (max-width : 768px) {
        display: none;
    }
`

const RightMenu1 = styled.div`
    display: flex;
    align-items: center;
    color: white;
    opacity: 0.9;
    font-weight: 600;
    gap: 15px;
    text-transform: uppercase;
`

const BurgarNav1 = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    list-style: none;
    width: 300px;
    padding-top: 25px;
    padding-right: 15px;
    padding-left: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    scroll-behavior: smooth;
    overflow-y: auto;
    z-index: 100;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transfrom 0.2s;
    li {
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
            font-size: 14px;
            font-weight: 600;
        }
    }
`

const CustomMenu1 = styled(MenuIcon1)`
    cursor: pointer;
    
`
const CloseWrapper1 = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`