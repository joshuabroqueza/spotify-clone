import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function SideBar() {
  //pulling data from data layer
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("Sidebaroption playlist", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <SidebarOption title="Hip Hop" />

      {/* {playlists?.items?.map((playlist) => {
        <SidebarOption title={playlist.name} />;
      })} */}

      {playlists?.items?.map((playlists) => (
        <SidebarOption title={playlists.name} />
      ))}
    </div>
  );
}

export default SideBar;
