'use client';

import React from "react";
import WorkIcon from "@/assets/icons/work.svg";
import SchoolIcon from "@/assets/icons/school.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineElement {
  id: number;
  title: string;
  location: string;
  description: string;
  buttonText?: string;
  date: string;
  icon: "work" | "school";
}

const timelineElements: TimelineElement[] = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Dragontail, Ascana",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Skystead, Craonia",
    description:
      "Working hand-in-hand with front-end developers by providing the outward-facing web application elements server-side logic.",
    buttonText: "View Backend Projects",
    date: "June 2013 - August 2016",
    icon: "work",
  },
  {
    id: 3,
    title: "Quality Assurance Engineer",
    location: "South Warren, Geshington",
    description:
      "Assessing the quality of specifications and technical design documents to ensure timely, relevant, and meaningful feedback.",
    buttonText: "Company Website",
    date: "September 2011 - June 2013",
    icon: "work",
  },
  {
    id: 4,
    title: "Oak Ridge College",
    location: "South Warren, Geshington",
    description:
      "Online Course in Magical Beasts and Wonders of the World.",
    buttonText: "Course Certificate",
    date: "September 2011",
    icon: "school",
  },
  {
    id: 5,
    title: "Hawking College",
    location: "Skystead, Craonia",
    description:
      "College education in technology and sciences.",
    buttonText: "College Projects",
    date: "2007 - 2011",
    icon: "school",
  },
  {
    id: 6,
    title: "Marble Hills Grammar School",
    location: "Dragontail, Ascana",
    description: "High school education focusing on sciences and mathematics.",
    date: "2003 - 2007",
    icon: "school",
  },
];

export const ExperienceSection: React.FC = () => {
  const workIconStyles = { background: "#06d6a0", color: "#fff" };
  const schoolIconStyles = { background: "#f9c74f", color: "#fff" };

  return (
    <div className="py-16 lg:py-24">
      <h1 className="text-3xl font-bold text-center mb-10 font-serif">Experience</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton =
            element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon className="h-6 w-6" /> : <SchoolIcon className="h-6 w-6" />}
            >
              <h3 className="text-lg font-semibold font-serif">{element.title}</h3>
              <h5 className="text-sm text-gray-500 font-serif">{element.location}</h5>
              <p className="mt-2 text-gray-700">{element.description}</p>
              {showButton && (
                <a
                  className={`mt-4 inline-block px-4 py-2 text-sm text-white rounded hover:opacity-90 ${
                    isWorkIcon ? "bg-green-500" : "bg-yellow-500"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
