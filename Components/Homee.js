import Section from "./Section"
import styled from "styled-components"
import React from "react"
import Footer from "./Footer"
function Homee() {
    return (
        <Container>
            <Section
                title="model s"
                ptext="Order Online for"
                spantext="Techless Delivery"
                leftButton="custom order"
                rightButton="existing inventory"
                backgroundImg="model-s.jpg"
            />
            <Section
                title="model y"
                ptext="Order Online for"
                spantext="Techless Delivery"
                leftButton="custom order"
                rightButton="existing inventory"
                backgroundImg="model-y.jpg"
            />
            <Section
                title="model 3"
                ptext="Order Online for"
                spantext="Techless Delivery"
                leftButton="custom order"
                rightButton="existing inventory"
                backgroundImg="model-3.jpg"
            />
            <Section
                title="model x"
                ptext="Order Online for"
                spantext="Techless Delivery"
                leftButton="custom order"
                rightButton="existing inventory"
                backgroundImg="model-x.jpg"
            />
            <Section
                title="solar panels"
                ptext="Lowest Cost Solar Panels In America"
                spantext=""
                leftButton="order now"
                rightButton="learn more"
                backgroundImg="solar-panel.jpg"
            />
            <Section
                title="solar roof"
                ptext="Product Clean Energy From Your Roof"
                spantext=""
                leftButton="order now"
                rightButton="learn more"
                backgroundImg="solar-roof.jpg"
            />
            <Section
                title="Accessories"
                ptext=" "
                spantext=""
                leftButton="order now"
                backgroundImg="accessories.jpg"
            />
            <Footer/>
        </Container>
    )
}

export default Homee


const Container = styled.div`
    height: 100vh;
`