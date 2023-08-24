import { Chrono } from "react-chrono";

const events = [
  {
    title: "9:30 AM – 9:45 AM",
    cardTitle: "Welcome Address",
  },
  {
    title: "9:45 AM – 11:15 AM",
    cardTitle: "The PITCH PAVILION",
    cardSubtitle: "10 Startup presentations",
  },
  {
    title: "11:15 AM – 11:30 AM",
    cardTitle: "Tea Break",
  },
  {
    title: "11:30 AM – 1:00 PM",
    cardTitle: "Masterclass",
    cardSubtitle: "Fintech/EdTech/HealthTech/E-commerce/ Digital Manufacturing",
  },
  {
    title: "1:00 PM",
    cardTitle: "Closure Address",
  },
  {
    title: "1:10 PM – 2:00 PM",
    cardTitle: "Lunch",
  },
  {
    title: "2:00 PM – 4:30 PM",
    cardTitle: "Networking and Exhibition",
  },
];

function Day2() {
  return (
      <div className='min-h-screen w-full'>
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

export default Day2;
