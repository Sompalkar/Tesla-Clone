import React from 'react'

import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section

                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"

            />

            {/* <Section 

            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtntext="Existing Inventory"
        
        /> */}




            <Section

                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"

            />


            <Section

                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"

            />

            <Section

                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"

            />

            <Section

                title="Lowest Cost Solar Panels in America"
                description="Money Back Gaurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtntext="Learn More"

            />

            <Section

                title="Solar for New Roofs "
                description="Solar Roof Costs Less Than a New Roof Plus Solar Pannels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtntext="Learn More"

            />

            <Section

                title="Accessories "
                description=" "
                backgroundImg="accessories.jpg"
                leftBtnText="Order Now" 

            />

        </Container>
    )
}

export default Home


const Container = styled.div`

     height:100vh;


  `
