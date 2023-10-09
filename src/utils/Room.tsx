import React, { FunctionComponent } from 'react';
import { BiWifi } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineSafety } from "react-icons/ai";
import { MdPets, MdHotTub, MdLocalLaundryService, MdKitchen, MdTv, MdViewDay } from "react-icons/md";
import { FaBed, FaAccessibleIcon, FaCar, FaShower, FaSoundcloud, FaTree, FaSubway, FaUtensils, FaFan } from "react-icons/fa";

interface DetailsSectionProps {
    street: string;
    city: string;
    region: string;
    country: string;
}

interface Feature {
    name: string;
    icon: JSX.Element;
    available: boolean;
}

export type Room = {
    picture: string,
    price: number,
    street: string,
    district: string,
    size: number,
    available: boolean,
    available_from: string
    description: string,
    features: Feature[],
    id: number
};

const features: Feature[] = [
    { icon: <BiWifi />, name: 'Wi-Fi' , available: true},
    { icon: <IoPeopleOutline />, name: 'Roommates' , available: true},
    { icon: <MdLocalLaundryService />, name: 'Washing Machine', available: true },
    { icon: <MdKitchen />, name: 'Kitchen', available: true },
    { icon: <AiOutlineSafety />, name: 'Fire Protection', available: true },
    { icon: <FaFan />, name: 'Air Conditioning', available: true },
    { icon: <FaBed />, name: 'Furnished', available: true },
    { icon: <FaSubway />, name: 'Close to Public Transport', available: true },
    { icon: <FaUtensils />, name: 'Dishwasher', available: true },
];

export const rooms: Room[] = [
  {
    picture: "/Test.png",
    price: 100,
    street: "Test 1",
    district: "5612 Vienna",
    size: 25,
    available: true,
    available_from: "01.12.2023",
    description: "Room 1",
    features: [
                        { icon: <BiWifi />, name: 'Wi-Fi' , available: true},
                        { icon: <IoPeopleOutline />, name: '1 Roommate' , available: true},
                        { icon: <FaBed />, name: 'Furnished', available: true },
                        { icon: <MdKitchen />, name: 'Kitchen', available: true },
                        { icon: <FaSubway />, name: 'Close to Public Transport', available: true },
                    ],
    id: 0
  },

    {
        picture: "/Test.png",
            price: 100,
            street: "Test 1",
            district: "5612 Vienna",
            size: 25,
            available: true,
            available_from: "01.12.2023",
            description: "Room 1",
        features: [
                                    { icon: <BiWifi />, name: 'Wi-Fi' , available: true},
                                    { icon: <IoPeopleOutline />, name: '3 Roommates' , available: true},
                                    { icon: <FaBed />, name: 'Furnished', available: true },
                                    { icon: <MdKitchen />, name: 'Kitchen', available: true },
                                    { icon: <FaSubway />, name: 'Close to Public Transport', available: true },
                                    { icon: <FaUtensils />, name: 'Dishwasher', available: true },
                                ],
        id: 1
      },

  {
    picture: "/Test.png",
        price: 100,
        street: "Test 1",
        district: "5612 Vienna",
        size: 25,
        available: true,
        available_from: "01.12.2023",
        description: "Room 1",
    features: [
                            { icon: <BiWifi />, name: 'Wi-Fi' , available: true},
                            { icon: <IoPeopleOutline />, name: '3 Roommates' , available: true},
                            { icon: <FaBed />, name: 'Furnished', available: true },
                            { icon: <MdKitchen />, name: 'Kitchen', available: true },
                            { icon: <FaSubway />, name: 'Close to Public Transport', available: true },
                            { icon: <FaUtensils />, name: 'Dishwasher', available: true },
                        ],
    id: 2
  },

];