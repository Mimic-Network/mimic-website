import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/Tooltip";
import InfoBoxIcon from "@src/components/icons/InfoBox.icon";

const DESCRIPTIONS = {
  Spot: "Find local businesses and events, get info, navigate maps, and stay updated with trending spots.",
  "Meet new friends":
    "Connect with like-minded people, chat or video call, and build relationships.",
  "Book sessions":
    "Book appointments, schedule meetings, set reminders, and stay organized.",
  "Live PCGs":
    "Host and join public video calls on topics, share screens, and engage in real-time interactions.",
  Giftmoji:
    "Send and receive virtual gifts, track profile performance, and manage monetization and payouts.",
  TODOs:
    "Create and manage to-do lists, set reminders, and stay on top of tasks.",
};

export interface IWaitlistAtomProps {
  val: keyof typeof DESCRIPTIONS;
  onClick: () => void;
}

const WaitlistAtom: React.FC<IWaitlistAtomProps> = ({ val, onClick }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <TooltipProvider delayDuration={0} key={val.replace("", "-").toLowerCase()}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger
          className={
            "bg-primary-900/5 cursor-pointer border-[0.4px] w-max p-2.5 h-fit rounded-full px-6 py-2.5 text-primary-900 border-primary-900 inline-flex"
          }
          type="button"
        >
          <div onClick={onClick}>{val}</div>
          <InfoBoxIcon
            className="ml-2"
            onClick={() => setOpen((prev) => !prev)}
          />
        </TooltipTrigger>
        <TooltipContent className="max-w-52">
          <p>{DESCRIPTIONS[val]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default WaitlistAtom;
