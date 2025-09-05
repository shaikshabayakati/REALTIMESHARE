"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [title, setTitle] = useState();
  const [postdescription, postSetdescription] = useState();
  const router = useRouter();

  const postfunction = async () => {
    const dets = {
      title: title,
      description: postdescription,
    };
    axios.post("/api/tasks", dets).then(router.push("/"));
  };

  return (
    <div className="p-5">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
          <div className="flex flex-col space-y-6">
            {/* Title Input */}
            <input
              type="text"
              placeholder="Add Title"
              className="bg-gray-700 text-white text-lg placeholder-gray-400 rounded-md px-4 py-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* Description Textarea */}
            <input
              placeholder="Add Description"
              onChange={(e) => postSetdescription(e.target.value)}
              className="bg-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 h-32 resize-none"
              rows="4"
            />
            <Button
              onClick={postfunction}
              className=" text-xl p-5 cursor-pointer bg-gray-900"
            >
              ✅ DONE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
