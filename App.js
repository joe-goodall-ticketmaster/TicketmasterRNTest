import React from 'react';
import { Text, View } from 'react-native';
import { createServer } from 'miragejs';
import MainNavigation from './App/navigation/MainNavigation';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/waiting-list', () => {
      return {
        fans: [
          { id: 1, emailAddress: 'a@a.com', mobileNumber: '07970676426' },
          { id: 2, emailAddress: 'b@b.com', mobileNumber: '07734563976' },
          { id: 3, emailAddress: 'c@c.com', mobileNumber: '07481904041' },
        ],
      };
    });
    this.post('/api/waiting-list', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      console.log(attrs);
      debugger;
    });
  },
});

export default function App() {
  let [fans, setFans] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/waiting-list')
      .then(res => res.json())
      .then(json => setFans(json.fans));
  }, []);

  // return (
  //   <View>
  //     {fans.map(fan => (
  //       <Text key={fan.id}>
  //         {fan.emailAddress} ({fan.mobileNumber})
  //       </Text>
  //     ))}
  //   </View>
  // );
  return <MainNavigation />;
}
