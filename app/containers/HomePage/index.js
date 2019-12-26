/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Todos from '../Todos';

export default function HomePage() {
  return (
    <div>
      <Todos />
    </div>
  );
}
