'use client';

import React from "react";
import WorkIcon from "@/assets/icons/work.svg";
import SchoolIcon from "@/assets/icons/school.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { color } from "framer-motion";

interface TimelineElement {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: "work" | "school";
}

const timelineElements: TimelineElement[] = [
    {
        id: 1,
        title: "Software Engineer",
        location: "KGS Technology Group, Tempe, AZ",
        description:
          "Enhanced search functionality and product recommendations by integrating caching mechanisms, resulting in a 25% improvement in query response times. Resolved critical payment gateway and session management issues to improve user experience and reliability.",
        date: "July 2024 - Present",
        icon: "work",
      },
      {
        id: 2,
        title: "Software Engineer",
        location: "Torana Inc., Stamford, CT",
        description:
          "Developed a secure sandboxed environment using Java Spring Boot, Docker, and OAuth2/JWT, leading to a 30% increase in client satisfaction. Achieved SOC 2 certification within 6 months by leading cross-functional teams.",
        date: "Jun 2023 - Jun 2024",
        icon: "work",
      },
      
      {
        id: 3,
        title: "Software Developer Engineer Intern",
        location: "Amazon.com, Seattle, WA",
        description:
          "Developed a project plan using TypeScript and AWS Step Functions, reducing manual effort for AWS-Backint backup services by 40%. Spearheaded the development of API systems using Kotlin and C# to enhance system efficiency.",
        date: "May 2022 - Aug 2022",
        icon: "work",
      },
      {
        id: 4,
        title: "M.S. Computer Science (Cybersecurity)",
        location: "Arizona State University, Tempe, AZ",
        description: "Graduated with a focus on cybersecurity, specializing in secure application development and threat modeling.",
        date: "Aug 2021 - May 2023",
        icon: "school",
      },
      {
        id: 5,
        title: "Software Developer",
        location: "Torana Inc., Nagpur, India",
        description:
          "Automated data collection and reporting systems using Java Spring Boot, reducing manual effort by 20% and saving marketers 16 hours per month. Improved system performance by implementing parallel and batch processing, reducing data ingestion time by 36%.",
        date: "Dec 2019 - July 2021",
        icon: "work",
      },
      {
        id: 6,
        title: "Software Developer",
        location: "Cognizant, Chennai, India",
        description:
          "Implemented complex web UI designs using ASP.NET, resulting in a 40% increase in user engagement. Automated SQL queries and report generation using VBA and PowerShell, reducing manual effort by 95%.",
        date: "Nov 2018 - Oct 2019",
        icon: "work",
      },
      {
        id: 7,
        title: "B.Tech. Electronics and Telecommunication",
        location: "College of Engineering Pune, Pune, India",
        description: "Graduated with expertise in telecommunications systems and embedded systems programming.",
        date: "Aug 2014 - May 2018",
        icon: "school",
      },
];

export const ExperienceSection: React.FC = () => {
  const workIconStyles = { background: "#06d6a0", color: "#fff" };
  const schoolIconStyles = { background: "#f9c74f", color: "#fff" };

  return (
    <section className="py-20 lg:py-28" id="experience">
        <SectionHeader 
            eyebrow=""
            title="Experience & Educations" 
            description=""
        />
            <div className="mt-20 flex flex-col">
                <div className="p-3">
                    <Card
                        className="w-full max-w-7xl mx-auto"
                    >
                        <VerticalTimeline
                            lineColor="gray">
                        {timelineElements.map((element) => {
                            const isWorkIcon = element.icon === "work";
                            return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={<>{isWorkIcon ? <WorkIcon className="h-6 w-6" /> : <SchoolIcon className="h-6 w-6" />}</>}
                                contentStyle={{
                                    background: "#374151", // Example background colors for work and school
                                    borderRadius: "8px", // Adjust border radius if needed
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
                                  }}
                            >
                                <h3 className="text-lg font-serif">{element.title}</h3>
                                <h5 className="text-sm text-gray-400 font-serif">{element.location}</h5>
                                <p className="mt-2 text-gray-300 font-sans">{element.description}</p>
                            </VerticalTimelineElement>
                            );
                        })}
                        </VerticalTimeline>
                    </Card>
                </div>
            </div>
      </section>
  );
};
