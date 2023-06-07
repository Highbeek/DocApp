import {
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
<EvilIcons name="star" size={24} color="black" />;
import { female, male } from "../assets";

export const services = [
  {
    icon: <SimpleLineIcons name="earphones" size={24} color="black" />,
    name: "Consult",
    color: "#fff0f3",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="view-grid-plus-outline"
        size={24}
        color="black"
      />
    ),
    name: "Diagnosis",
    color: "#edf2fb",
  },
  {
    icon: <Entypo name="heart-outlined" size={24} color="black" />,
    name: "Health",
    color: "#f4effa",
  },
];

export const DocAppointment = [
  {
    name: "Dr. Kim Derek",
    role: "ENT Surgeon",
    star: (
      <>
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="#fffae5" />
      </>
    ),
    rate: 4.62,
    time: "4:00 PM - 8:00PM",
    img: female,
    uid: 1,
  },
  {
    name: "Dr. Ford Smith",
    role: "Heart Surgeon",
    star: (
      <>
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="#fff2b2" />
      </>
    ),
    rate: 4.88,
    time: "10:00 AM - 12:00PM",
    img: male,
    uid: 2,
  },
];

