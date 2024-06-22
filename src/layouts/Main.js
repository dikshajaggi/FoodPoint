import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/RestCard';
import "../style.css";
import { Link, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import { Context } from '../utilities/context/Context';
import { CardWrapper, MainWrapper } from './styledComponents/Main';
import { useTheme } from 'styled-components';
import Footer from '../components/Footer';
import RestCard from "../shimmerUI/RestCard";
import Categories from '../components/Categories';

const Main = () => {
    const context = useContext(Context);
    const theme = useTheme();
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true);

    const changePageTitle = (title) => {
        document.title = title
    }

    useEffect(() => {
        console.log(context.filteredData, "context.filteredData", isLoading);
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.filteredData]);

    useEffect(() => {
        if (location.pathname === "/main") changePageTitle("FoodPoint")
    }, [location.pathname])

    return (
        <MainWrapper theme={theme}>
            <Header />
            <Categories />
            <CardWrapper>
                {isLoading ? (
                    // Render shimmer UI components while loading
                    context.filteredData?.map((item, index) => (
                        <RestCard key={index} />
                    ))
                ) : (
                    // Render actual cards wrapped in Link when data is loaded
                    context?.filteredData?.map((item) => (
                        <Link key={item.id} style={{ textDecoration: 'none' }} to={`/rest/${item._id}`}>
                            <Card {...item} />
                        </Link>
                    ))
                )}
            </CardWrapper>
            <Footer />
        </MainWrapper>
    );
}

export default Main;
