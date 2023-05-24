import React, { useEffect, useState } from 'react';
import AnalyticsCard from './AnalyticsCard';
import { Container, Row, Col } from 'react-bootstrap';
import '@nivo/core';
import '@nivo/line';

function Dashboard() {
  // Dummy data for demonstration
  const dummyData = {
    youtube: {
      platform: 'YouTube',
      views: 1000,
      watchTime: '10 hours',
      subscribers: 500,
      retention: '70%',
    },
    tiktok: {
      platform: 'TikTok',
      views: 2000,
      watchTime: '5 hours',
      followers: 1000,
      engagement: '80%',
      subscribers: 2000,
      retention: '90%',
    },
    instagram: {
      platform: 'Instagram',
      followers: 1500,
      likes: 3000,
      comments: 500,
      reach: '2000',
      watchTime: '2 hours',
      subscribers: 2000,
      retention: '90%',
    },
  };  
  

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid>
      <h1>Your Analytics Dashboard</h1>
      <Row>
        <Col lg={isSmallScreen ? 12 : 4}>
          <AnalyticsCard data={dummyData.youtube} />
        </Col>
        <Col lg={isSmallScreen ? 12 : 4}>
          <AnalyticsCard data={dummyData.tiktok} />
        </Col>
        <Col lg={isSmallScreen ? 12 : 4}>
          <AnalyticsCard data={dummyData.instagram} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
