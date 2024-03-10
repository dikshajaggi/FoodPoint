import React, { useEffect } from 'react';
import { MapWrapper } from './styledComponents/OrderTrackingMap';

const OrderTrackingMap = () => {
    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 20.5937, lng: 78.9629 },
                zoom: 5
            });

            const startLocation = { lat: 28.5847449, lng: 77.0348151 }; // Replace with actual start location
            const endLocation = { lat: 28.591775, lng: 77.161548 }; // Replace with actual end location

            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(startLocation);
            bounds.extend(endLocation);

            map.fitBounds(bounds);

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
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDc7XMkdi8X_kEE8MNia8_K6fMiSqfu3QQ&libraries=geometry&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <MapWrapper>
            <h4>Order Tracking</h4>
            <div id="map" style={{ height: '400px', width: '800px' }}></div>
        </MapWrapper>
    );
};

export default OrderTrackingMap;
