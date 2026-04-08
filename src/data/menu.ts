import foodKrapao from "@/assets/food-krapao.jpg";
import foodFriedrice from "@/assets/food-friedrice.jpg";
import foodGreencurry from "@/assets/food-greencurry.jpg";
import foodPadthai from "@/assets/food-padthai.jpg";
import foodTomyum from "@/assets/food-tomyum.jpg";
import foodKaijeow from "@/assets/food-kaijeow.jpg";
import foodSomtum from "@/assets/food-somtum.jpg";
import foodFriedchicken from "@/assets/food-friedchicken.jpg";
import type { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "ข้าวกะเพราไก่",
    description: "ข้าวกะเพราไก่สับ ไข่ดาว เผ็ดกลาง หอมใบกะเพรา",
    image: foodKrapao,
    tags: ["ขายดี", "แนะนำ"],
    category: ["เผ็ด"],
    price: 55,
  },
  {
    id: "2",
    name: "ข้าวผัดกุ้ง",
    description: "ข้าวผัดกุ้งสด ไข่ แครอท ต้นหอม",
    image: foodFriedrice,
    tags: ["แนะนำ"],
    category: ["ทั้งหมด"],
    price: 65,
  },
  {
    id: "3",
    name: "แกงเขียวหวานไก่",
    description: "แกงเขียวหวานไก่ พร้อมข้าวสวย เข้มข้น หอมมะพร้าว",
    image: foodGreencurry,
    tags: ["ขายดี"],
    category: ["เผ็ด"],
    price: 60,
  },
  {
    id: "4",
    name: "ผัดไทยกุ้งสด",
    description: "ผัดไทยเส้นจันท์ กุ้งสด ถั่วลิสง มะนาว",
    image: foodPadthai,
    tags: ["แนะนำ"],
    category: ["ทั้งหมด"],
    price: 70,
  },
  {
    id: "5",
    name: "ต้มยำกุ้ง",
    description: "ต้มยำกุ้งน้ำข้น รสจัดจ้าน เปรี้ยว เผ็ด กลมกล่อม",
    image: foodTomyum,
    tags: ["ขายดี", "เผ็ด"],
    category: ["เผ็ด"],
    price: 80,
  },
  {
    id: "6",
    name: "ไข่เจียวหมูสับ",
    description: "ไข่เจียวหมูสับฟูกรอบ พร้อมข้าวสวยร้อน ๆ",
    image: foodKaijeow,
    tags: [],
    category: ["ของทอด"],
    price: 45,
  },
  {
    id: "7",
    name: "ส้มตำไทย",
    description: "ส้มตำไทย ถั่วลิสง กุ้งแห้ง มะเขือเทศ หวาน เปรี้ยว เผ็ด",
    image: foodSomtum,
    tags: ["สุขภาพ"],
    category: ["เผ็ด", "สุขภาพ"],
    price: 50,
  },
  {
    id: "8",
    name: "ไก่ทอดกรอบ",
    description: "ไก่ทอดกรอบสูตรเด็ด กรอบนอกนุ่มใน",
    image: foodFriedchicken,
    tags: ["ขายดี"],
    category: ["ของทอด"],
    price: 55,
  },
];
