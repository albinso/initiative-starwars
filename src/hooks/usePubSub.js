import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';


const usePubSub = () => {
    const PUBSUB_URL = "wss://swroller.webpubsub.azure.com/client/hubs/Hub";

    const [message, setMessage] = useState("");

    let onConnected = () => {
        console.log("Connected to websocket");
    }

    let onMessageReceived = (messageRec) => {
        if (Object.keys(messageRec).length === 0) {
            console.log("Empty message, returning!");
            return;
        }
        setMessage(messageRec);
    }

    const { lastJsonMessage } = useWebSocket(PUBSUB_URL, {
        onOpen: () => {
          onConnected();
        }
      });

      useEffect(() => {
        if (lastJsonMessage) {
            onMessageReceived(lastJsonMessage);
        } else {
            console.log("Empty message received");
        }
    }, [lastJsonMessage]);

    return message;
}

export default usePubSub;
