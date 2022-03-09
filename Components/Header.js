import styled from "styled-components"
import Link from "next/link"
import MenuIcon from "@material-ui/icons/menu"
import CloseMenu from "@material-ui/icons/Close"
import LanguageIcon from '@material-ui/icons/Language';
import { useState } from "react"
import React from "react"
function Header() {
    const [burgarStatus, setBurgerSatus] = useState(false);
    return (
        <Container>
             <a>
                 <img src="/images/logo.svg"/>
             </a>
             <Menu>
                 <Link href="/models">model s</Link>
                 <Link href="/model3">model 3</Link>
                 <Link href="/">model x</Link>
                 <Link href="/">model y</Link>
                 <Link href="/">solar roof</Link>
                 <Link href="/">solar panes</Link>
             </Menu>
             <RightMenu>
                 <Link href="/">shop</Link>
                 <Link href="/">account</Link>
                 <CustomMenu onClick={()=>setBurgerSatus(true)} />
             </RightMenu>
             <BurgarNav show={burgarStatus}>
                <CloseWrapper>
                    <CloseMenu onClick={()=>setBurgerSatus(false)}/>
                </CloseWrapper>
                <li><Link href="/">MODEL S</Link></li>
                <li><Link href="/">MODEL Y</Link></li>
                <li><Link href="/">MODEL 3</Link></li>
                <li><Link href="/">MODEL X</Link></li>
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
            </BurgarNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 25px;
    padding-left: 15px;
    padding-right: 15px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 15px;
    color: black;
    font-weight: 600;
    flex-wrap: nowrap;
    @media (max-width : 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    color: #1a1818;
    font-weight: 600;
    gap: 15px;
    text-transform: uppercase;
`

const BurgarNav = styled.div`
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

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`