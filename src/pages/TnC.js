import Footer from "../components/Footer"
import Header from "../components/Header"
import { Heading, TncWrapper, MainTncWrapper } from "./styledComponents/Privacy"

const TnC = () => {
    return (
        <MainTncWrapper>
            <Header />
            <TncWrapper>
                <Heading>Terms and Conditions</Heading>
                Last updated: March 3, 2024

                Welcome to FoodPoint!
                <br></br>
                These Terms and Conditions ("Terms") govern your use of the FoodPoint website, mobile application, and related services (collectively referred to as the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
                <br></br>
                <br></br>
                <h6 style={{ color: "white" }}>Use of the Service:</h6>

                You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you are at least 18 years old.
                You agree to use the Service only for lawful purposes and in accordance with these Terms and any applicable laws and regulations.
                <br></br>
                <br></br>
                <h6 style={{ color: "white" }}> Account Registration:</h6>

                In order to use certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary to keep it accurate, current, and complete.
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                <br></br>
                <br></br>

                <h6 style={{ color: "white" }}>Ordering and Payment:</h6>
                You may place orders for food and beverages through the Service. By placing an order, you agree to pay the full amount due for the order, including any applicable taxes, fees, and delivery charges.
                Payment processing services for orders placed through the Service are provided by third-party payment processors. By placing an order, you agree to be bound by the terms and conditions of the applicable payment processor.
                <br></br>
                <br></br>

                <h6 style={{ color: "white" }}>Delivery:</h6>
                We will make reasonable efforts to deliver your orders within the estimated delivery time provided at the time of order placement. However, delivery times may vary depending on factors such as traffic, weather, and order volume.
                You are responsible for providing accurate delivery instructions and ensuring that someone is present at the delivery address to receive the order.
                <br></br>
                <br></br>

                <h6 style={{ color: "white" }}>Intellectual Property:</h6>
                All content and materials available through the Service, including but not limited to text, graphics, logos, images, and software, are the property of FoodPoint or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                <br></br>
                <br></br>

                <h6 style={{ color: "white" }}>Limitation of Liability:</h6>
                To the fullest extent permitted by applicable law, FoodPoint and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.
                <br></br>
                <br></br>

                <h6 style={{ color: "white" }}>Changes to these Terms:</h6>
                We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on the Service. Your continued use of the Service after the posting of the revised Terms constitutes your acceptance of the changes.
                <br></br>
                <br></br>

                <h6 style={{ color: "white" }}>Governing Law:</h6>
                These Terms shall be governed by and construed in accordance with the laws of demo Jurisdiction, without regard to its conflict of law provisions.
                If you have any questions or concerns about these Terms, please contact us at FoodPoint.comDemo.

                By using FoodPoint, you agree to abide by these Terms and Conditions.
            </TncWrapper>
            <Footer />
        </MainTncWrapper>
    )
}

export default TnC