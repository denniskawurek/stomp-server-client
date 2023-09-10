import { Client } from '@stomp/stompjs';

import { WebSocket } from 'ws';
Object.assign(global, { WebSocket });

const client = new Client({
  brokerURL: 'ws://localhost:61613/ws',
  onConnect: () => {
    console.log("connected!");
    client.subscribe('/topic/1', message =>
      console.log(JSON.parse(message.body))
    );
    setInterval(() => client.publish({
      destination: '/topic/1',
      body: JSON.stringify({ "message": "Hello, World!" }),
      headers: {'content-type': 'application/json'}
    }), 1000);
  },
});

client.activate();
