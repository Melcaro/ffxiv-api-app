import React, { Component } from 'react';

import { MembersList } from './MembersList';
import { ActivitiesFeed } from './ActivitiesFeed';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <ActivitiesFeed />
        <MembersList />
      </div>
    );
  }
}
