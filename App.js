import React from 'react';
import { createServer } from 'miragejs';
import MainNavigation from './App/navigation/MainNavigation';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    let fans = [
      { id: 1, emailAddress: 'a@a.com', mobileNumber: '07970676426' },
      { id: 2, emailAddress: 'b@b.com', mobileNumber: '07734563976' },
      { id: 3, emailAddress: 'c@c.com', mobileNumber: '07481904041' },
    ];
    this.get('/api/waiting-list', () => {
      return { fans };
    });
    this.post('/api/waiting-list', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return { fans: fans.push({ id: fans.length + 1, ...attrs }) };
    });
  },
});

export default function App() {
  return <MainNavigation />;
}
