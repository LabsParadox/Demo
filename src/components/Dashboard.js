import React from 'react';
import AnalyticsCard from './AnalyticsCard';
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

  return (
    <div>
      <h1>Creator Stats Home</h1>
          <AnalyticsCard data={dummyData.youtube} />
          <AnalyticsCard data={dummyData.tiktok} />
          <AnalyticsCard data={dummyData.instagram} />
    </div>
  );
}

export default Dashboard;
