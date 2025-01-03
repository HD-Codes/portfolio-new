import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolboxItems = ({
    items,
    className,
    itemsWrapperClassName,
  }: {
    items: {
      title: string;
      iconType: React.ElementType;
    }[];
    className?: string; // Ensure className is optional here
    itemsWrapperClassName?: string; // Optional class for the wrapper around items
  }) => {
    return (
      <div
        className={twMerge(
          "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className // Merge this with the base styles
        )}
      >
        <div 
          className={twMerge("flex flex-none py-0.5 gap-6 pr-6", 
          itemsWrapperClassName)}
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className={twMerge(
                    "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg", className // Merge item-specific styles
                  )}
                >
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
          
        </div>
      </div>
    );
  };
  