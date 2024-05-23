"use client";

import {useState} from "react";
import InputSection from "@/components/InputSection";

export default function Home() {
  const [technologies, setTechnologies] = useState([]);
  const [businessareas, setBusinessareas] = useState([]); 

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="flex flex-col">
        <div className="flex w-full">
          <div className="w-1/2 p-4">
            <InputSection
              title="Technologies"
              placeholder="Example: Generative AI"
              data={technologies}
              setData={setTechnologies}
            />
          </div>
          <div className="w-1/2 p-4">
            <InputSection
              title="Business Areas"
              placeholder="Example: Customer Service"
              data={businessareas}
              setData={setBusinessareas}
            />
          </div>
        </div>

        <div className="flex flex-col w-full p-4">
          {/* Output section and event log in a single column below */}
        </div>
      </div>
    </div>
  );
}