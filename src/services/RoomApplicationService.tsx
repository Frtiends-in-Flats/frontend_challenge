import { RoomApplicationNotLoggedInDTO, RoomApplicationLoggedInDTO } from "../dto/roomApplication";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as strings from "../textEnglish";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export const applyRoomLoggedIn = async (
  e: React.MouseEvent<HTMLButtonElement>,
  application: RoomApplicationLoggedInDTO,
  navigate: ReturnType<typeof useNavigate>// Pass the navigate function as a parameter
) => {
  e.preventDefault();

  const bodyContent = JSON.stringify(application);

  try {
    const response = await fetch(`${SERVER_URL}/api/auth/room-application/logged-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyContent,
        credentials: "include",
      });

    if (!response.ok) {
      let errorMessage = await response.json();

      if (!errorMessage || errorMessage.trim() === "") {
        errorMessage = "An error occurred while applying for the room";
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();

    console.log("Anfrage erfolgreich gesendet!");

    // Redirect to the homepage
    navigate("/");

    // Display a successful toast message
    toast.success(strings.applicationSuccess, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });
  } catch (error) {
    toast.error(strings.applicationError, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });
  }
};

export const applyRoomNotLoggedIn = async (
  e: React.MouseEvent<HTMLButtonElement>,
  application: RoomApplicationNotLoggedInDTO,
  navigate: ReturnType<typeof useNavigate> // Pass the navigate function as a parameter
) => {
  e.preventDefault();

  const serverIP = process.env.SERVER_URL;
  const bodyContent = JSON.stringify(application);

  try {
    const response = await fetch(`${SERVER_URL}/api/auth/room-application/not-logged-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    });

    if (!response.ok) {
      let errorMessage = await response.json();

      if (!errorMessage || errorMessage.trim() === "") {
        errorMessage = "An error occurred while applying for the room";
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log("Anfrage erfolgreich gesendet!");

    // Redirect to the homepage
    navigate("/");

    // Display a successful toast message
    toast.success(strings.applicationSuccess, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });

  } catch (error) {
    toast.error(strings.applicationError, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
    });
  }
};