import React from 'react';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

interface ThreeDCardProps {
  id: number;
  icon: string;
  title: string;
  date: string;
  description: string;
}

export function ThreeDCardDemo({ id, icon, title, date, description } :ThreeDCardProps) {
  return (
    <div>
      <CardContainer key={id} className="inter-var">
      <CardBody className="flex flex-row gap-5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] w-[auto] h-auto mt-4 rounded-xl p-6 border bg-gradient-to-br from-sky-300 to-sky-500">




          <CardItem   className="flex flex-col align-center w-full mt-12 text-xl font-bold text-neutral-600 dark:text-white">
            {/* Increase size of the circular image */}
            <img src={icon} className="rounded-e-lg h-full w-32% mx-auto -mt-12" alt="Icon" />
            {title}
            <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {date}
            </p>
          </CardItem>
          
          {/* <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            
          </CardItem> */}
          {/* <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            
          </CardItem> */}
          <CardItem translateZ="50" className="text-sm text-left text-neutral-600 dark:text-white mt-4 font-bold">
            {description}
          </CardItem>
          
        </CardBody>
      </CardContainer>
    </div>
  );
}





export default ThreeDCardDemo;