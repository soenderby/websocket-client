// The app needs to maintain several websocket connections simultaniously
// But the basic handling of the connections should all be the same

// The basic interface for a websocket is given by the JavaScript WebSocket API
// The only thing that is different in the handling of the connections for the pages
// are possibly the messages, and where the result should be handled

// Maybe just define and pass the messages types and a dispatch function to which
// the messages should be passed
// So basically just pass in a funtion that defines handling of messages

// This should send data to the store, also this should recieve data 
// that should be sent to the websocket server


// Make each connection to a websocket a wrapper component.
// Instead of combining the websocket events with the state
// by using redux middleware, it should be a component acting 
// and reacting to the store.

// Maybe handle the sending of websocket events, by wrapping the redux dispatch
// Or just integrate it into the action creators?
export const createSocket = (url) => {

  const OnMessage = (event) => {
    const messageData = event.data;
  }
  const socket = new WebSocket(url);
} 