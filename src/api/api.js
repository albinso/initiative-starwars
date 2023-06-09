// api functions to access http post and get on the url https://storestate.azurewebsites.net/api/savestate?code=jfncCmRvRqXj2WWnr-g1vMQiTzFgTX2HSRRhhvt4xMigAzFu5z1mmw==

import axios from "axios";

const url = "https://storestate.azurewebsites.net/api/savestate?code=jfncCmRvRqXj2WWnr-g1vMQiTzFgTX2HSRRhhvt4xMigAzFu5z1mmw==&id=12345";


export const saveState = async (state, token) => {
    state["id"] = "12345";
    console.log("TOken is: ", token);
    console.log(state);
    let config = {
        headers: {
            Authorization: `${token}`
        }
    }
    try {
        const response = await axios.post(url, state, config);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const getState = async () => {
    try {
        const response = await axios.get(url);
        console.log("Response from get state");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
