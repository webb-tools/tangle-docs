import React from "react";
import { GrNodes } from "react-icons/gr";
import { BetweenVerticalEnd } from "lucide-react";
import Link from "next/link";

const BlueprintIntroCards = () => {
  const cards = [
    {
      icon: <BetweenVerticalEnd className="text-blue-500" size={24} />,
      title: "Tangle's Gadget SDK Repo",
      description:
        "Check out our Gadget SDK repository to get started building your own gadgets.",
      link: "https://github.com/tangle-network/gadget",
    },
    {
      icon: <BetweenVerticalEnd className="text-blue-500" size={24} />,
      title: "Hello World Blueprint",
      description:
        "Get started with a simple Hello World example using Tangle Blueprints.",
      link: "../developers/getting-started",
    },
    {
      icon: <GrNodes className="text-blue-500" size={24} />,
      title: "Build an Eigenlayer AVS",
      description:
        "Build an Eigenlayer AVS with the Tangle Blueprint SDK and hook into a variety of EVM compatible utilities for task automation, slashing, and more.",
      link: "../developers/eigenlayer-avs",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      {cards.map((card, index) => (
        <Link href={card.link} key={index} className="block">
          <div className="border border-black p-4 h-full flex flex-col transition-colors duration-300 hover:bg-purple-100">
            <div className="flex-shrink-0 mb-2">{card.icon}</div>
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <p className="text-sm flex-grow">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlueprintIntroCards;
