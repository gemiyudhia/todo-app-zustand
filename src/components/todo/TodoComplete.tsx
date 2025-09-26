import React from "react";
import { Button } from "../ui/button";
import { Check, SquarePen, Trash2 } from "lucide-react";

const TodoComplete = () => {
  return (
    <div className="space-y-4 my-10">
      <h1 className="text-2xl font-semibold text-gray-700">Completed</h1>
      <ul className="space-y-3">
        <li className="text-gray-600 px-4 py-5 rounded-2xl shadow-xl border border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border bg-blue-500">
                <Check className="text-white my-1 mx-auto" />
              </div>
              <h1 className="text-lg font-semibold capitalize">todo list 1</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-red-700">
                <Trash2 />
              </Button>
            </div>
          </div>
        </li>
        <li className="text-gray-600 px-4 py-5 rounded-2xl shadow-xl border border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border bg-blue-500">
                <Check className="text-white my-1 mx-auto" />
              </div>
              <h1 className="text-lg font-semibold capitalize">todo list 2</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-red-700">
                <Trash2 />
              </Button>
            </div>
          </div>
        </li>
        <li className="text-gray-600 px-4 py-5 rounded-2xl shadow-xl border border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border bg-blue-500">
                <Check className="text-white my-1 mx-auto" />
              </div>
              <h1 className="text-lg font-semibold capitalize">todo list 3</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-red-700">
                <Trash2 />
              </Button>
            </div>
          </div>
        </li>
        <li className="text-gray-600 px-4 py-5 rounded-2xl shadow-xl border border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border bg-blue-500">
                <Check className="text-white my-1 mx-auto" />
              </div>
              <h1 className="text-lg font-semibold capitalize">todo list 4</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-red-700">
                <Trash2 />
              </Button>
            </div>
          </div>
        </li>
        <li className="text-gray-600 px-4 py-5 rounded-2xl shadow-xl border border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border bg-blue-500">
                <Check className="text-white my-1 mx-auto" />
              </div>
              <h1 className="text-lg font-semibold capitalize">todo list 5</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-red-700">
                <Trash2 />
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoComplete;
