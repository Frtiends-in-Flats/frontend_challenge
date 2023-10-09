import { Room } from '../utils/Room';

export interface RoomApplicationNotLoggedInDTO {
  name: string;
  address: string;
  email: string;
  telephone: string;
  message: string;
  room: Room;
}

export const createRoomApplicationNotLoggedInDTO = (
  name: string,
  address: string,
  email: string,
  telephone: string,
  message: string,
  room: Room
): RoomApplicationNotLoggedInDTO => {
  return {
    name,
    address,
    email,
    telephone,
    message,
    room,
  };
};

export interface RoomApplicationLoggedInDTO {
  room: Room;
}

export const createRoomApplicationLoggedInDTO = (
  room: Room
): RoomApplicationLoggedInDTO => {
  return {
    room
  };
};