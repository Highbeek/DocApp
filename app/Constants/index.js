import {
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
<EvilIcons name="star" size={24} color="black" />;
import { kim, ford, emily,mike,sophia } from "../assets";

export const services = [
  {
    icon: <SimpleLineIcons name="earphones" size={24} color="black" />,
    name: "Consult",
    color: "#ffe7e7",
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
    color: "#e7edff",
  },
  {
    icon: <Entypo name="heart-outlined" size={24} color="black" />,
    name: "Health",
    color: "#eee6ff",
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
    img: kim,
    uid: 1,
    about:
      "A competent ENT Surgeon practicing for the past 13 years and have a wide range of experience in treating patients with all kinds of ENT issues. Listens to and addresses all of the patients concerns and clearly explains the course of treatment.",
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
    img: ford,
    uid: 2,
    about:
      "An experienced heart surgeon with 13 years of practice, adept at addressing patient concerns and explaining treatment plans.",
  },
  {
    name: "Dr. Emily Anderson",
    role: "Dentist",
    star: (
      <>
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star-o" size={14} color="gold" />
      </>
    ),
    rate: 4.95,
    time: "9:00 AM - 1:00 PM",
    img: emily,
    uid: 3,
    about:
      "A skilled dentist with expertise in various dental procedures. Provides personalized care and ensures patient comfort.",
  },
  {
    name: "Dr. Michael Roberts",
    role: "Orthopedic Surgeon",
    star: (
      <>
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star-half-o" size={14} color="gold" />
      </>
    ),
    rate: 4.9,
    time: "2:00 PM - 6:00 PM",
    img: mike,
    uid: 4,
    about:
      "Highly experienced orthopedic surgeon specializing in bone and joint surgeries. Dedicated to delivering excellent results and improving patients' quality of life.",
  },
  {
    name: "Dr. Sophia Chen",
    role: "Dermatologist",
    star: (
      <>
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star" size={14} color="gold" />
        <FontAwesome name="star-o" size={14} color="gold" />
      </>
    ),
    rate: 4.75,
    time: "10:00 AM - 4:00 PM",
    img: sophia,
    uid: 5,
    about:
      "Accomplished dermatologist offering comprehensive skincare treatments. Utilizes advanced techniques to address various skin conditions and enhance patients' appearance.",
  },
];

export const users = [
  {
    name: "Jonathan",
    img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
    healthStatus: " Your health is in perfect condition!",
  },
];
