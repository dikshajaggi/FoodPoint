import Footer from "../components/Footer"
import Header from "../components/Header"
import { Heading, MainDisclaimerWrapper, Wrapper } from "./styledComponents/Privacy"

const Disclaimer = () => {
    return (
        <MainDisclaimerWrapper>
            <Header />
            <Wrapper>
                <Heading>Disclaimer</Heading>
                <div>
                    Last updated: March 3, 2024

                    Welcome to FoodPoint! Please read this disclaimer carefully before using our website or mobile application (collectively referred to as the "Service").

                    <br></br>
                    <br></br>
                    <h6>Accuracy of Information:</h6>

                    While we strive to provide accurate and up-to-date information on our website and mobile application, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Service for any purpose.
                    <br></br>
                    <br></br>
                    <h6> Food Allergies and Dietary Restrictions:</h6>


                    We make every effort to accurately display ingredients and allergen information for the food items available through the Service. However, please be aware that our menu items may contain or come into contact with common allergens, including but not limited to peanuts, tree nuts, wheat, soy, milk, eggs, fish, and shellfish. We cannot guarantee that our food is free from allergens or suitable for individuals with specific dietary restrictions. It is your responsibility to review the ingredients and allergen information provided and to make informed choices based on your dietary needs.
                    <br></br>
                    <br></br>
                    <h6>Availability of Products and Services:</h6>


                    We reserve the right to change, suspend, or discontinue any aspect of the Service, including the availability of menu items, at any time without prior notice. We do not guarantee the availability of any particular product or service through the Service.
                    <br></br>
                    <br></br>
                    <h6>Limitation of Liability:</h6>

                    Our Service may contain links to third-party websites or resources. These links are provided for your convenience only and do not imply any endorsement or recommendation by FoodPoint. We have no control over the content, privacy policies, or practices of third-party websites and shall not be responsible for any damages or losses arising from your use of or reliance on any third-party content, products, or services.


                    To the fullest extent permitted by applicable law, FoodPoint and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.
                    <br></br>
                    <br></br>
                    <h6> Changes to this Disclaimer:</h6>


                    We reserve the right to modify or update this disclaimer at any time without prior notice. Any changes will be effective immediately upon posting the revised disclaimer on the Service. Your continued use of the Service after the posting of the revised disclaimer constitutes your acceptance of the changes.
                    If you have any questions or concerns about this disclaimer, please contact us at FoodPoint.comDemo.

                    By using FoodPoint, you acknowledge and agree to abide by this disclaimer.
                </div>
            </Wrapper>
            <Footer />
        </MainDisclaimerWrapper>
    )
}

export default Disclaimer