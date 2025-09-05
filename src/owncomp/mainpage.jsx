"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";
const Mainpage = () => {
const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/tasks");
      setTasks(res.data.tasks); // Adjust according to your API response shape
    }
    fetchData();
  }, []);


  return (
    <div className="">
      <div className="flex justify-center mt-5">
       <Link href={"/createtask"}><Button className="text-2xl p-16  cursor-pointer">
          + Add New Task
        </Button></Link> 
      </div>
      <div className="flex mt-12 px-12 gap-4">
     {tasks && tasks.map((x)=>(
      <div key={x._id} className="w-full md:w-[300px] gap-4">
        <Card className="text-center bg-black text-white">
          <CardHeader>
            <CardTitle>{x.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{x.description}</p>
          </CardContent>
        </Card>
      </div>))}  
      
      </div>
    </div>
  );
};

export default Mainpage;
