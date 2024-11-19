import React from "react";

type Props = {
  className?: string;
};
export const Post: React.FC<Props> = ({ className }) => {
  return (
    <div>
      <div className={ `post grid grid-cols-12 items-center gap-4 ${className}` }>
        <div className="h-[17vh] w-50% overflow-hidden col-span-5">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/07/Orbite-Terre-Fin.png?resize=1097,617"
            className="overflow-hidden object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="col-span-7">
          <h2 className="font-extrabold mb-3 text-xl">
            The Exploration Company raises $160M to build Europe’s answer to
            SpaceX Dragon
          </h2>
          <p className="text-xs">
            The $160 million Series B round will fund the continued development
            of the Nyx spacecraft, which will be capable of carrying 3,000
            kilograms of cargo to and from Earth.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
