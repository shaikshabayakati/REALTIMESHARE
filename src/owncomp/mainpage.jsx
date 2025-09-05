"use client";
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
import { Delete } from "lucide-react";
const Mainpage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/tasks"); // Remove hardcoded URL
      setTasks(res.data.tasks); // Adjust according to your API response shape
    }
    fetchData();
  }, []);
 async function Deletefunction(id) {
    try {
        const response = await axios.delete("/api/tasks", {
            data: { _id: id }
        });
        // Refresh the tasks list after successful deletion
        const res = await axios.get("/api/tasks");
        setTasks(res.data.tasks);
    } catch (error) {
        console.error("Error deleting task:", error);
    }
}

  return (
    <div className="">
      <div className="flex justify-center mt-5">
        <Link href={"/createtask"}>
          <Button className="text-2xl p-16  cursor-pointer">
            + Add New Task
          </Button>
        </Link>
      </div>
      <div className="flex mt-12 px-12 gap-4">
        {tasks &&
          tasks.map((x) => (
            <div key={x._id} className="w-full md:w-[300px] gap-4">
              <Card className="text-center bg-black text-white">
                <CardHeader>
                  <CardTitle>{x.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{x.description}</p>
                </CardContent>
                <CardFooter>
                  <Delete className="cursor-pointer" onClick={()=>Deletefunction(x._id)}/>
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mainpage;
