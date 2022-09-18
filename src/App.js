import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Run code based on a given information
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // setToken(_token);

      //giving access token to spotify
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //using redux
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcDyN5VU5YblE").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    // console.log("This is token ➡️", _token);
  }, []);

  // console.log("This is user", user);
  // console.log("This is token", token);

  return (
    <div className="app">
      {token ? (
        <h1>
          <Player spotify={spotify} />
        </h1>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
