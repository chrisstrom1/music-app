import React from 'react';
import Switch from './Switch';
import Slider from './Slider';
import Select from './Select';

const MusicCard = ({ type }) => {
  const renderCardContent = () => {
    switch (type) {
      case 'online-mode':
        return <Switch label="Online Mode" />;
      case 'master-volume':
        return <Slider label="Master Volume" />;
      case 'sound-quality':
        return (
          <Select
            label="Sound Quality"
            options={[
              { label: 'Low', value: 'low' },
              { label: 'Medium', value: 'medium' },
              { label: 'High', value: 'high' }
            ]}
            defaultValue="low"
            onChange={(value) => console.log('Selected:', value)} // Placeholder onChange handler
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="music-card">
      {renderCardContent()}
    </div>
  );
};

export default MusicCard;