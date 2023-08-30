import { Chrono } from "react-chrono";

const events = [
  {
    title: "9:30 AM – 9:45 AM",
    cardTitle: "Welcome Address",
    cardDetailedText: "Kulgeet and Lighting the Lamp.",
  },
  {
    title: "9:45 AM – 10:10 AM",
    cardTitle: "Keynote Address 1",
    cardSubtitle: "Role of Start-ups in India's Digital Economy",
    cardDetailedText:
      " – Dr Chintan Vaishnav,\n Director  Atal Innovation Mission, NITI Aayog",
  },
  {
    title: "10:10 AM – 10:35 AM",
    cardTitle: "Keynote Address 2 ",
    cardDetailedText: " – Ms. Irina Ghose \n  Microsoft",
  },
  {
    title: "10:40 AM – 11:00 AM",
    cardTitle: "Start-up Journey at IIT(BHU) Varanasi",
    cardSubtitle: "by Director IIT(BHU) Varanasi",
  },
  {
    title: "11:05 AM – 11:15 AM",
    cardTitle: "Sponsor Session",
  },
  {
    title: "11:20 AM – 11:35 AM",
    cardTitle: "Tea Break",
  },
  {
    title: "11:40 AM – 12:20 AM",
    cardTitle: "Panel Discussion",
    cardSubtitle: "Strategic Building Blocks for Startups",
    cardDetailedText:
      "● Attracting and engaging talent in startups ● Financing ● Technology Support available",
  },
  {
    title: "12:25 PM – 12:45 PM",
    cardTitle: "Fireside Chat",
    cardSubtitle:
      "Start-up Journey at Karnataka Digital Economy Mission (KDEM)",
    cardDetailedText:
      "Mr. Sanjeev Gupta in conversation with Dr. Meeta Prakash",
  },
  {
    title: "12:45 PM – 12:55 PM",
    cardTitle: "Sponsor Session",
  },
  {
    title: "1:00 PM – 2:00 PM",
    cardTitle: "Lunch Break",
  },
  {
    title: "2:00 PM – 2:40 PM",
    cardTitle: "Fueling Innovation",
    cardSubtitle: "An Investor Round Table on Funding the Future",
    cardDetailedText:
      "● What do they seek in early-stage startups ● Managing growth and bottom-line ● Current Market scenario and future trends ● Sectors in focus",
  },
  {
    title: "2:45 PM – 2:55 PM",
    cardTitle: "Sponsor Session",
  },
  {
    title: "3:00 PM – 3:30 PM",
    cardTitle: "Masterclass",
    cardSubtitle: "Generative AI - Past, Present, Future:",
    cardDetailedText:
      "Overview of generative AI technology and its applications ● Case studies and examples of successful implementation ● Future trends and possibilities in generative AI",
  },
  {
    title: "3:35 PM – 4:15 PM",
    cardTitle: "Inspiration Pad/Scaling Smartly",
    cardSubtitle: "Lessons from Unicorn founders:",
    cardDetailedText:
      "Two 20 mins session each showcasing unicorn founder’s story",
  },
  {
    title: "4:15 PM – 4:25 PM",
    cardTitle: "Sponsor Session",
  },
  {
    title: "4:25 PM – 4:40 PM",
    cardTitle: "Tea Break",
  },
  {
    title: "4:45 PM – 6:30 PM",
    cardTitle: "The PITCH PAVILION",
    cardSubtitle: "10 Startup presentations",
  },
  {
    title: "6:30 PM – 8:00 PM",
    cardTitle: "Networking and Cultural Show",
    cardSubtitle: "Lessons from Unicorn founders:",
    cardDetailedText:
      "Two 20 mins session each showcasing unicorn founder’s story",
  },
  {
    title: "8 PM onwards",
    cardTitle: "Dinner and Cocktails",
    cardSubtitle: "Lessons from Unicorn founders:",
    cardDetailedText:
      "Two 20 mins session each showcasing unicorn founder’s story",
  },
];

function Day1() {
  return (
    <div className="min-h-screen text-xs sm:text-md ">
      <Chrono
        items={events}
        flipLayout
        mode="VERTICAL_ALTERNATING"
        readMore={true}
        cardHeight={100}
        slideShow
      />
    </div>
  );
}

export default Day1;
