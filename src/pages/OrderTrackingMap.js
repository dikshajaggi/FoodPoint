import React, { useEffect, useState } from 'react';
import { MapDiv, MapWrapper, Wrapper } from './styledComponents/OrderTrackingMap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderTrackingMap = () => {
    const [estimatedTime, setEstimatedTime] = useState(0); // State to hold the estimated time

    useEffect(() => {
        const startLocation = { lat: 28.5847449, lng: 77.0348151 }; // Replace with actual start location
        const endLocation = { lat: 28.591775, lng: 77.161548 }; // Replace with actual end location

        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: startLocation, // Center map at the start location
                zoom: 12 // Adjust zoom level as needed
            });

            const marker = new window.google.maps.Marker({
                position: startLocation,
                map: map,
                title: 'Order Location'
            });

            let step = 0;
            const numSteps = 100; // Change this value for smoother or slower animation
            const intervalTime = 1000; // Time between each animation step (milliseconds)

            const animate = () => {
                step += 1 / numSteps;
                if (step > 1) {
                    step = 1;
                }
                const interpolatedPosition = window.google.maps.geometry.spherical.interpolate(startLocation, endLocation, step);
                marker.setPosition(interpolatedPosition);

                // Calculate estimated time based on distance covered
                const totalDistance = window.google.maps.geometry.spherical.computeDistanceBetween(startLocation, endLocation);
                const currentLocation = marker.getPosition(); // Get the current position of the marker
                const distanceCovered = window.google.maps.geometry.spherical.computeDistanceBetween(startLocation, currentLocation);                
                const currentSpeed = 700; // Average speed in meters per minute (adjust as needed)
                const timeRemaining = (totalDistance - distanceCovered) / currentSpeed;
                setEstimatedTime(Math.ceil(timeRemaining)); // Update estimated time

                if (step < 1) {
                    setTimeout(animate, intervalTime);
                }
            };

            animate();
        };

        // Define the initMap function
        window.initMap = initMap;

        // Load the Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=geometry&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    console.log(estimatedTime, "estimatedTimeestimatedTime")
    return (
        <Wrapper>
            <Header />
            <MapWrapper>
                <h4>Order Tracking</h4>
                <p>Estimated Time Remaining: {estimatedTime} minutes</p> {/* Display estimated time */}
                <MapDiv id="map"></MapDiv>
            </MapWrapper>
            <Footer />
        </Wrapper>
    );
};

export default OrderTrackingMap;
