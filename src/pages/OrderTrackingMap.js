import React, { useContext, useEffect, useState } from 'react';
import { MapDiv, MapWrapper, Wrapper } from './styledComponents/OrderTrackingMap';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../utilities/context/Context';
import Header from '../components/Header';
import langConfig from "../config/langConfig.json"

const OrderTrackingMap = () => {
    const [estimatedTime, setEstimatedTime] = useState(0);
    const context = useContext(Context)

    useEffect(() => {
        if (context.orderStatus !== "delivery") return;
        const startLocation = { lat: 28.5847449, lng: 77.0348151 };
        const endLocation = { lat: 28.6231, lng: 77.0277 };

        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: startLocation,
                zoom: 12
            });

            const marker = new window.google.maps.Marker({
                position: startLocation,
                map: map,
                title: 'Order Location'
            });

            let step = 0;
            const numSteps = 200;
            const intervalTime = 55; // time between each animation step in ms

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.status]);

    return (
        <Wrapper>
            <Header />
            <MapWrapper>
                <h4>{context.language === "en" ? langConfig[0].checkout.order_tracking.en : langConfig[0].checkout.order_tracking.hn}</h4>
                <p>{context.language === "en" ? langConfig[0].checkout.eta.en : langConfig[0].checkout.eta.hn} {estimatedTime} minutes</p>
                <MapDiv id="map"></MapDiv>
            </MapWrapper>
            <Footer />
        </Wrapper>
    );
};

export default OrderTrackingMap;
