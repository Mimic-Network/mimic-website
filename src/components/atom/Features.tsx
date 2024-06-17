import { Poppins } from "next/font/google";
import Image from "next/image";
import * as React from "react";
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin","latin-ext"],
});
export interface IFeaturesProps {
  hideBg?: boolean;
 }
const FEATURES = [
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
]
const HIGHLIGHTED_FEATURES = [
  {
    icon: 'create_your_profile.svg',
    heading: 'Create Your Profile and find SPOTS',
    description: 'Sign up and personalize your profile with interests and preferences Search for local businesses and events by category, location, or keyword. View detailed information and navigate through the interactive MAP to find nearby spots',
    bgColor: 'bg-primary-900/10'
  },
  {
    icon: 'engage_and_book.svg',
    heading: 'Connect, Engage and book sessions',
    description: 'Find people who share your interests through text or video chats. Connect, engage with new friends  go live to interact with followers in real-time, and seamlessly book sessions with hosts for various activities,',
    bgColor: 'bg-green-900/10'
  },
  {
    icon: 'manage_task_and_organize.svg',
    heading: 'Manage Your Tasks and Stay Organized',
    description: 'Create and manage to-do lists with customizable titles, activities, and reminders. Add events and activities from SPOTS to your to-do list to stay on track and receive notifications for timely reminders',
    bgColor:'bg-violet-900/10'
  },
  {
    icon: 'giftmojis_and_monitor.svg',
    heading: 'Exchange Giftmojis and Monitor Your Profile',
    description: 'Send and receive virtual gifts during chats, group chats, PGCs, and live sessions. Track your profile’s performance, monitor progress towards monetization, and manage your payouts efficiently',
    bgColor: 'bg-orange-900/10'
  }
]
const Features: React.FC<IFeaturesProps> = (props) => {
  
  return (
    <section className="w-full text-secondary-900">
      <div 
      data-true={props.hideBg}
      className="bg-primary-900/5 data-true:bg-transparent min-h-screen pt-12 pb-20">
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
              FEATURES.map(val => (
                <div key={val.heading} className="bg-white px-8 pt-6 rounded-md items-center flex flex-col">
                  <Image
                    src={`/features/${val.image}`}
                    width={300}
                    height={620}
                    alt={val.heading}
                    className=""
                  />
                  <div className="flex flex-col space-y-2 pt-5 pb-7">
                    <h4 className="text-primary-900 font-semibold text-2xl">{val.heading}</h4>
                    <p className="text-sm leading-6">{val.description}</p>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="w-10/12 flex flex-col items-center mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-primary-900">Get familiar with how the app works</h1>
          <div
          className="flex space-x-5"
          >
            {
              HIGHLIGHTED_FEATURES.map(val => (
                <div key={val.heading} className={`${val.bgColor} px-2.5 py-6 rounded-md items-start flex flex-col`}>
                  <Image
                    src={`/features/${val.icon}`}
                    width={300}
                    height={620}
                    alt={val.heading}
                    className="w-9 h-9"
                  />
                  <div className="flex flex-col space-y-2.5 pt-5">
                    <h4 className="text-black font-bold text-base">{val.heading}</h4>
                    <p className={`text-sm leading-6 ${poppins.className}`}>{val.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
