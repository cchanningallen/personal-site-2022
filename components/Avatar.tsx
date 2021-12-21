import NextImage from "next/image";
import cn from "classnames";

import profilePic from "../public/me.jpg";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Avatar = ({ size, className }: Props) => {
  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden border shadow-sm border-gray-300",
        {
          "w-8 h-8": size == "sm" || !size,
          "w-16 h-16": size == "md",
          "w-32 h-32": size == "lg",
        },
        className
      )}
    >
      <NextImage
        src={profilePic}
        alt="Picture of the author"
        layout="fill"
        placeholder="blur"
      />
    </div>
  );
};

export default Avatar;
