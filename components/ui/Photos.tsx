import photo1 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Amitva Saha- Xpressbees and FirstCry.png";
import photo2 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/ElasticRun- Shitiz Bansal.png";
import photo3 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Jay-Chaudhry-ZScaler.jpeg";
import photo4 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Kailash Kailash - Zscaler.png";
import photo5 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/OneCard- Anurag Sinha.png";
import photo6 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Prateek-Maheshwari-PW.png";
import photo7 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Sanjay Sethi- Shopclues.png";
import photo8 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Sarvajna Dwivedi- Pearl Therapeutics.jpeg";
import { StaticImageData } from "next/image";
interface PersonProps {
  name: string;
  company: string;
  quote?: string;
  year?: number;
  imageUrl: StaticImageData;
  position?: string;
}
export const images: PersonProps[] = [
  {
    name: "Amitava Saha",
    company: "Xpressbees and FirstCry",
    year: 1997,
    quote: "Ecommerce isn't the cherry on the cake, it's the new cake.",
    imageUrl: photo1,
    position: "Co-Founder & CEO at Xpressbees",
  },

  {
    name: "Jay Chaudhry",
    company: "Zscaler",
    year: 1980,
    quote:
      "Try to walk with the forward- thinking ,the dreamers,the believers,the courageous,the planners,the positive and the doers",
    imageUrl: photo3,
    position: "Founder & CEO at Zscaler",
  },
  {
    name: "Anurag Sinha",
    company: "OneCard",
    year: 1999,
    quote: "When the pie becomes a cake, there is greater value for us to take",
    imageUrl: photo5,
    position: "Co-Founder at OneCard",
  },
  {
    name: "Prateek Maheshwari",
    company: "PW",
    year: 2011,
    quote:
      "Being the most thoughtful person in the room is only possible if you are in the right room",
    imageUrl: photo6,
    position: "Co-Founder at PW",
  },
  {
    name: "Sanjay Sethi",
    company: "Shopclues",
    year: 1991,
    quote: "To be a  disrupter, You Dont Have to be an Asshole",
    imageUrl: photo7,
    position: "Founder & CEO at Shopclues",
  },

  {
    name: "Sarvajna Dwivedi",
    company: "Pearl Therapeutics",
    year: 1986,
    quote:
      "Perseverance, inventiveness and initiative are essential traits for a researcher",
    imageUrl: photo8,
    position: "Co-Founder at Pearl Therapeutics",
  },
];
