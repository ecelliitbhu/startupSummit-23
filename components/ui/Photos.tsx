import photo1 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Amitva Saha- Xpressbees and FirstCry.jpg";
import photo2 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/ElasticRun- Shitiz Bansal.png";
import photo3 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Jay-Chaudhry-ZScaler.jpg";
import photo4 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Kailash Kailash - Zscaler.png";
import photo5 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/OneCard- Anurag Sinha.png";
import photo6 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Prateek-Maheshwari-PW.jpg";
import photo7 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Sanjay Sethi- Shopclues.jpg";
import photo8 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Sarvajna Dwivedi- Pearl Therapeutics.jpeg";
import { StaticImageData } from "next/image";
interface PersonProps {
  name: string;
  company: string;
  quote?: string;
  imageUrl: StaticImageData;
  position?: string;
}
export const images: PersonProps[] = [
  {
    name: "Amitva Saha",
    company: "Xpressbees and FirstCry",
    quote: "Ecommerce isn't the cherry on the cake, it's the new cake.",
    imageUrl: photo1,
    position: "Co-Founder & CEO at Xpressbees",
    position: "Co-Founder & CEO at Xpressbees",
  },

  {
    name: "Jay Chaudhry",
    company: "Zscaler",
    quote:
      "Try to walk with the forward- thinking ,the dreamers,the believers,the courageous,the planners,the positive and the doers",
    imageUrl: photo3,
    position: "Founder & CEO at Zscaler",
    position: "Founder & CEO at Zscaler",
  },
  {
    name: "Anurag Sinha",
    company: "OneCard",
    quote: "When the pie becomes a cake, there is greater value for us to take",
    imageUrl: photo5,
    position: "Co-Founder at OneCard",

    position: "Co-Founder at OneCard",

  },
  {
    name: "Prateek Maheshwari",
    company: "PW",
    quote:
      "Being the most thoughtful person in the room is only possible if you are in the right room",
    imageUrl: photo6,
    position: "Co-Founder at PW",
    position: "Co-Founder at PW",
  },
  {
    name: "Sanjay Sethi",
    company: "Shopclues",
    quote: "To be a  disrupter, You Dont Have to be an Asshole",
    imageUrl: photo7,
    position: "Founder & CEO at Shopclues",
    position: "Founder & CEO at Shopclues",
  },

  {
    name: "Sarvajna Dwivedi",
    company: "Pearl Therapeutics",
    quote:
      "Perseverance, inventiveness and initiative are essential traits for a researcher",
    imageUrl: photo8,
    position: "Co-Founder at Pearl Therapeutics",
    position: "Co-Founder at Pearl Therapeutics",
  },
];
