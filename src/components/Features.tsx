import Image from "next/image";
import * as React from "react";

export interface IFeaturesProps { }

const Features: React.FC<IFeaturesProps> = (props) => {
  const features = React.useMemo(() => [
    {
      image: 'spot_and_map.png',
      heading: 'Spot and map',
      description: 'Find and connect with businesses and events around you . Get information, navigate through an interactive map, and stay updated with trending spots. Never miss out on what’s happening near you'
    },
    {
      image: 'meet_new_friends.png',
      heading: 'Meet new friends',
      description: 'Connect with like-minded people based on your interests and preferences. Chat or video call with potential matches, and build meaningful relationships. Make new friends and expand your social circle with Mimic'
    },
    {
      image: 'live_pcgs.png',
      heading: 'Live PGCS',
      description: 'Host and participate in public video calls on specific topics with Live PGCs. Enjoy interactive sessions with multiple participants, share your screen, and engage in real-time chats, polls, and Q&A.'
    },
    {
      image: 'task_management.png',
      heading: 'Task management and TODO',
      description: 'Stay organized and on top of your responsibilities with Mimic\'s task management features. Create and manage to-do lists, set reminders for important events, and  add activities.'
    }
  ], [])
  return (
    <section className="bg-primary-900/5 min-h-screen py-12">
      <div className="w-10/12 flex flex-col items-center mx-auto space-y-2">
        <span className="bg-black/10 py-1.5 px-5 text-xs rounded-full">
          Features
        </span>
        <h2 className="text-5xl leading-snug text-center w-7/12 font-bold text-primary-900">
          Step into the Future with Mimic’s Advanced Features
        </h2>
        <p>
          Explore a suite of innovative features designed to connect, engage,
          and inspire you
        </p>
        <div className="grid grid-cols-2 gap-5 justify-between place-content-between">
          {
            features.map(val => (
              <div key={val.heading} className="bg-white px-8 py-12 rounded-md items-center flex flex-col">
                <Image
                  src={`/features/${val.image}`}
                  width={300}
                  height={620}
                  alt={val.heading}
                  className=""
                />
                <div className="flex flex-col space-y-2">
                  <h4>{val.heading}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};
export default Features;
