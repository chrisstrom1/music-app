import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [online, setOnline] = useState(true); // Assuming online status is initially true
  const [volume, setVolume] = useState(50); // Assuming initial volume is 50
  const [quality, setQuality] = useState('medium'); // Assuming initial sound quality is medium
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Check and update notifications whenever online, volume, or quality changes
    updateNotifications();
  }, [online, volume, quality]);

  const updateNotifications = () => {
    const newNotifications = [];

    // Add notifications based on conditions
    if (!online) {
      newNotifications.push("Your application is offline. You won't be able to share or stream music to other devices.");
    }

    if (volume > 80) {
      newNotifications.push("Listening to music at a high volume could cause long-term hearing loss.");
    }

    if (quality === 'low') {
      newNotifications.push("Music quality is degraded. Increase quality if your connection allows it.");
    }

    // Update the state with new notifications
    setNotifications(newNotifications);
  };

  return (
    <div className="dashboard">
      <h2>System Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
      {/* Render other components and controls */}
    </div>
  );
};

export default Dashboard;