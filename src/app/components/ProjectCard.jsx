import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const ProjectCard = ({ imgUrl, title, tags, description, gitUrl, previewUrl }) => {
  return (
  
    <Card className="border-none h-full rounded-full">
      <CardContent className=" bg-black p-4 w-full h-[100%] border-none rounded-xl">
        <div>
      <div
        className="h-52 md:h-72 rounded relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#4188bb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#4188bb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-2 bg-[#181818]py-6 px-4">
        <CardTitle className="pt-2 text-xl font-bold mb-2"> {title}</CardTitle>
        {/* add badge stacs */}
        <div className=" flex flex-wrap gap-2 w-full pb-2">
          {tags.map((tag) => <Badge  className="bg-blue-950 h-5 text-blue-400" key={tag}>{tag}</Badge>)}
          {/* <Badge className="h-6 w-14 bg-">{tags.map((tag) => ())}</Badge> */}
        </div>

        <p className="text-[#ADB7BE] mt-2">{description}</p>
      </div>
    </div>
      </CardContent>
    </Card>
    
  );
};

export default ProjectCard;