import React from 'react'
import { Heading, PPWrapper, PrivacyWrapper } from "./styledComponents/Privacy"
import Footer from '../components/Footer'
import Header from '../components/Header'

const PrivacyPolicy = () => {
    return (
        <PPWrapper>
            <Header />
            <Heading>Privacy Policy</Heading>
            <PrivacyWrapper>
                Last updated: March 3, 2024
                This Privacy Policy explains how FoodPoint collects, uses, and protects the personal information you provide when you use our food ordering application.

                Information we collect:

                <h6 style={{ color: "white" }}>Personal Information: </h6>When you create an account with us, we collect personal information such as your name, email address, phone number, and delivery address.
                Order Information: When you place an order through our application, we collect information about the items you order, payment details, and delivery preferences.
                Device Information: We may collect information about the device you use to access our application, including your device's unique identifier, IP address, and operating system.
                Location Information: With your consent, we may collect your precise or approximate location information to provide you with relevant services such as locating nearby restaurants or estimating delivery times.
                How we use your information:

                <h6 style={{ color: "white" }}>Personalization:</h6> We use your information to personalize your experience on our application, including recommending restaurants and menu items based on your preferences.
                Order Fulfillment: We use your information to process and fulfill your orders, communicate with you about your order status, and facilitate delivery.
                Analytics: We may use your information for analytics purposes to improve our application, services, and user experience.
                Marketing: With your consent, we may send you promotional emails or notifications about special offers, discounts, or new features.
                Data Sharing:

                <h6 style={{ color: "white" }}>Service Providers:</h6> We may share your information with third-party service providers who help us operate our application, process payments, or deliver orders.
                Legal Compliance: We may disclose your information if required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.
                Data Security:

                We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
                However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                <h6 style={{ color: "white" }}>Your Choices:</h6>

                You can review and update your account information at any time by logging into your account on our application.
                You can opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in the communication or by contacting us directly.
                <h6 style={{ color: "white" }}>Children's Privacy:</h6>
                Our application is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                Changes to this Privacy Policy:

                We may update this Privacy Policy from time to time by posting the revised version on our application. The updated Privacy Policy will take effect immediately upon posting.
                <h6 style={{ color: "white" }}>Contact Us:</h6>

                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [contact email or address].
                By using our food ordering application, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
            </PrivacyWrapper>
            <Footer />
        </PPWrapper>

    )
}

export default PrivacyPolicy
