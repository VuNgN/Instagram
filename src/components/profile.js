import React from 'react';
import { Container,} from 'reactstrap'; 

function Profile() {
  return (
    <div className="Profile">
      <Container>
        <div className="container_custom">
          <div className="profile__info">

          </div>
          <div className="profile__content">
            <div className="profile_tabs">
              <div className="profile-tabs__posts">
                <p>POSTS</p>
              </div>
              <div className="profile-tabs__igtv">
                <p>IGTV</p>
              </div>
              <div className="profile-tabs__saved">
                <p>SAVED</p>
              </div>
              <div className="profile-tabs__tagged">
                <p>TAGGED</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
