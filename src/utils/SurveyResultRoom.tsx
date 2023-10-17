import { BiWifi } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdKitchen } from "react-icons/md";
import { FaBed, FaSubway, FaUtensils } from "react-icons/fa";
import { Room } from "./Room";

// use the same template as the one at homepage
// modify only info text
export const surveyResult: Room[] = [
    {
        picture: "/Test.png",
        price: 200,
        street: "Main Street 21",
        district: "1030 Vienna",
        size: 28,
        available: true,
        available_from: "01.11.2023",
        description: "Room 1",
        features: [
            { icon: <BiWifi />, name: "Wi-Fi", available: true },
            { icon: <IoPeopleOutline />, name: "1 Roommate", available: true },
            { icon: <FaBed />, name: "Furnished", available: true },
            { icon: <MdKitchen />, name: "Kitchen", available: true },
            { icon: <FaSubway />, name: "Close to Public Transport", available: true },
        ],
        id: 0,
    },

    {
        picture: "/Test.png",
        price: 150,
        street: "Second Street 11",
        district: "1030 Vienna",
        size: 30,
        available: true,
        available_from: "15.11.2023",
        description: "Room 1",
        features: [
            { icon: <BiWifi />, name: "Wi-Fi", available: true },
            { icon: <IoPeopleOutline />, name: "3 Roommates", available: true },
            { icon: <FaBed />, name: "Furnished", available: true },
            { icon: <MdKitchen />, name: "Kitchen", available: true },
            { icon: <FaSubway />, name: "Close to Public Transport", available: true },
            { icon: <FaUtensils />, name: "Dishwasher", available: true },
        ],
        id: 1,
    }
];
