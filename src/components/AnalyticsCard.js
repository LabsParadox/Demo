import React from 'react';
import { Card } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line';

const AnalyticsCard = ({ data }) => {
  const { platform, views, watchTime, subscribers, retention, followers, engagement, likes, comments, reach } = data;

  const chartData = [
    {
      id: 'Views',
      data: [
        { x: 'Jan', y: 100 },
        { x: 'Feb', y: 200 },
        { x: 'Mar', y: 300 },
        { x: 'Apr', y: 400 },
        { x: 'May', y: 500 },
        // Add more data points as needed
      ],
    },
  ];

  return (
    <Card>
      <Card.Header>{platform}</Card.Header>
      <Card.Body>
        <Card.Title>{platform} Analytics</Card.Title>
        <div style={{ height: '300px', marginBottom: '20px', backgroundColor: '#222222' }}>
          {/* Set the background color of the graph to a darker color */}
          <ResponsiveLine
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
            axisBottom={{
              legend: 'Month',
              legendOffset: 36,
              legendPosition: 'middle',
              tickTextColor: '#ffffff',
            }}
            axisLeft={{
              legend: 'Count',
              legendOffset: -40,
              legendPosition: 'middle',
              tickTextColor: '#ffffff',
            }}
            colors={['rgba(255, 0, 0, 0.6)']} // Set a faded red color for the line
            enablePoints={false}
            enableGridX={false}
            enableGridY={false}
            lineWidth={2}
            pointSize={4}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enableArea={true}
            areaOpacity={0.2}
            enableSlices="x"
            theme={{
              textColor: '#ffffff',
              axis: {
                ticks: {
                  lineColor: '#ffffff',
                },
              },
              grid: {
                line: {
                  stroke: '#888888',
                  strokeWidth: 1,
                },
              },
              crosshair: {
                line: {
                  stroke: '#ffffff',
                  strokeWidth: 1,
                },
              },
              tooltip: {
                container: {
                  background: '#222222',
                  color: '#ffffff', // Set the text color of the tooltip
                },
              },
            }}
          />
        </div>
        <hr className="my-4" style={{ backgroundColor: '#555' }} />
        <div className="metrics-container">
          <Card.Text style={{ color: '#ffffff' }}>
            <strong>Views:</strong> {views}
            <br />
            <strong>Watch Time:</strong> {watchTime}
            <br />
            {platform === 'YouTube' && (
              <>
                <strong>Subscribers:</strong> {subscribers}
                <br />
                <strong>Retention:</strong> {retention}
                <br />
              </>
            )}
            {platform === 'TikTok' && (
              <>
                <strong>Followers:</strong> {followers}
                <br />
                <strong>Engagement:</strong> {engagement}
                <br />
                <strong>Subscribers:</strong> {subscribers}
                <br />
                <strong>Retention:</strong> {retention}
                <br />
              </>
            )}
            {platform === 'Instagram' && (
              <>
                <strong>Likes:</strong> {likes}
                <br />
                <strong>Comments:</strong> {comments}
                <br />
                <strong>Reach:</strong> {reach}
                <br />
              </>
            )}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AnalyticsCard;
