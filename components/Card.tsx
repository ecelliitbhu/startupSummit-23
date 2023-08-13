import React from "react";
import { type Icon, Icons } from "@/components/icons";

interface CardProps {
  className: string;
  href: string;
  iconName: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  className,
  href,
  iconName,
  title,
  description,
}) => {
  const isDark = className === "card--dark";

  return (
    <div
      className={`card w-[30%] relative m-4   ${className} ${
        isDark ? "text-white bg-black" : "text-black"
      }`}
    >
      <div className=" bg-white relative z-10 hover:border-black-500 transition duration-200 ease-in-out transform-gpu hover:translate-x-[-20px] hover:translate-y-[-20px] ">
        <a
          href={"#"}
          className={`card--link block p-8 rounded-lg transition duration-300 ${
            isDark ? "border-black" : "border"
          }  hover:border-blue-500`}
        >
          <div className="group border-black">
            <div className="card--display  group-hover:hidden">
              <i
                className={`material-icons text-6xl mb-8 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {/*<Icons.{iconName} />*/}
              </i>
              <h2
                className={`text-2xl pt-14 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {title}
              </h2>
            </div>
            <div
              className={`card--hover hidden group-hover:block ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              <h2 className="text-2xl">{title}</h2>
              <p className="text-base font-normal">{description}</p>
              <p className="text-base font-normal link text-blue-500">
                Click to see project
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="card--border  border-[1px] rounded-lg   absolute inset-0  border-dashed border-black z-[1] "></div>
    </div>
  );
};

export default Card;
