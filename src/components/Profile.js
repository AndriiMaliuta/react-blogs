import React, { useState, useEffect } from 'react';
import getProfileInfo from '../api/ProfileApi';

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    setProfileData(getProfileInfo());
  }, []);

  return (
    <div className='profile-page'>
      <h2>
        Profile of {profileData.firstName} {profileData.lastName}
      </h2>
      <div>
        <p>
          <b>Login:</b> {profileData.login}
        </p>
        <p>
          <b>First Name:</b> {profileData.firstName}
        </p>
        <p>
          <b>Last name:</b> {profileData.lastName}
        </p>
      </div>
    </div>
  );
};

export default Profile;
