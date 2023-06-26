import React from "react";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import { removeAuth } from "../Features/AuthSlice";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Message from "./Message";
import Input from "./Input";
import OwnerMessage from "./OwnerMessage";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const email = useSelector((state) => state.userdetails.Username);
  const logout = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      dispatch(removeAuth());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="chatContainer">
        <div className="appContainer">
          <div className="appTitle">
            <div class="appname">
              <h1
                style={{ margin: "0px", fontSize: "18px", paddingTop: "30px",paddingLeft:"15px" }}
              >
                WeChat
              </h1>
            </div>
            <div className="logoutbtn">
              <img
                style={{ height: "30px", marginRight: "15px" }}
                src="https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png"
                alt="missing"
              />
              <h4 style={{ margin: "0px", marginTop: "5px" }}>Yash</h4>
              <button
                style={{
                  height: "25px",
                  marginLeft: "15px",
                  marginTop: "4px",
                  fontWeight: "bold",
                  backgroundColor: "rgb(97, 92, 139)",
                  cursor: "pointer",
                  color:"white",
                  border:"none"
                }}
                onClick={logout}
              >
                logout
              </button>
            </div>
          </div>
          <div className="searchIcon">
            <input type="text" placeholder="Find a User" />
          </div>
          <div className="userDisplay">
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-291.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
                <span style={{ margin: "0px",fontSize:"18px",fontWeight:500,paddingTop:"0px" }}>Yash</span>
                <p style={{ margin: "0px", fontSize: "14px",color:"lightgray" }}>
                  okay. call me
                </p>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
              <span style={{ margin: "0px",fontSize:"18px",fontWeight:"bolder" }}>Tyler</span>
                <p style={{ margin: "0px", fontSize: "14px",color:"lightgray" }}>
                  I sent it last night
                </p>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/afro-man-with-his-arms-crossed_1368-2734.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
              <span style={{ margin: "0px",fontSize:"18px",fontWeight:500 }}>Sandy</span>
                <p style={{ margin: "0px", fontSize: "14px",color:"lightgray" }}>
                  see you tomorrow
                </p>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
              <span style={{ margin: "0px",fontSize:"18px",fontWeight:500 }}>Halsey</span>
                <p style={{ margin: "0px", fontSize: "14px",color:"lightgray" }}>
                  I'll let you know
                </p>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/handsome-man-isolated-white-background_1368-4280.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
              <span style={{ margin: "0px",fontSize:"18px",fontWeight:500 }}>Ashley</span>
                <p style={{ margin: "0px", fontSize: "14px",color:"lightgray" }}>
                  I'm still waiting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-container">
         <div className="user-name">
          <h3 style={{fontWeight:"lighter",margin:"0px",paddingTop:"25px",fontSize:"22px",paddingLeft:"10px",color:"lightgray"}}>Tyler</h3>
          <div>
          <VideoCallIcon fontSize="large" className="videoicon"/>
          <PersonAddAlt1Icon fontSize="large" className="videoicon"/>
          <MoreHorizIcon fontSize="large" className="videoicon"/>
          </div>
         </div>
         <div className="chatBox">
          <Message/>
          <OwnerMessage/>
          <Message/>
          <OwnerMessage/>
         </div>
          <Input/>
        </div>
      </div>
    </>
  );
};

export default Home;
