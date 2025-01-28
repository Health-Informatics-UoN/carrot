import { Circle } from "@/components/AnimatedBeamMapping";
import { Card, CardContent } from "@/components/ui/card";
import { FastForward, Lock, Recycle } from "lucide-react";

export default function Features() {
  return (
    <>
      <div className="items-center text-center justify-center w-full">
        <div className="flex flex-col justify-center space-y-2 mb-14">
          <div className="lg:text-4xl flex justify-center text-2xl">
            <h1 className="text-6xl">Everything you need.</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:flex lg:flex-row items-center lg:justify-center lg:gap-5 w-full lg:mt-5 mt-3 flex flex-col gap-2">
            <Card className="lg:w-[400px] h-[250px] z-10 py-3 flex flex-col items-center space-y-3">
              <div className="pt-3">
                <Circle className="size-16 py-3 rounded-full text-red dark:bg-white bg-black">
                  <Recycle className="dark:text-black text-white" />
                </Circle>
              </div>
              <CardContent className="text-md text-gray-600 dark:text-gray-300">
                Save time by{" "}
                <span className="text-carrot">reusing mapping rules</span>{" "}
                across datasets, ensure consistency and accuracy.
              </CardContent>
            </Card>
            <Card className="lg:w-[400px] h-[250px] z-10 flex flex-col items-center space-y-3">
              <div className="pt-3">
                <Circle className="size-16 py-3 rounded-full text-red dark:bg-white bg-black">
                  <Lock className="dark:text-black text-white" />
                </Circle>
              </div>
              <CardContent className="text-md text-gray-600 dark:text-gray-300">
                Work securely handling only{" "}
                <span className="text-carrot">metadata</span>,
                keeping your sensitive information protected.
              </CardContent>
            </Card>
            <Card className="lg:w-[400px] h-[250px] py-3 z-10 flex flex-col items-center space-y-3">
              <div className="pt-3">
                <Circle className="size-16 py-3 rounded-full text-red dark:bg-white bg-black">
                  <FastForward className="dark:text-black text-white" />
                </Circle>
              </div>
              <CardContent className="text-md text-gray-600 dark:text-gray-300">
                Easily create mapping rules to the OMOP standard with
                our{" "}
                <span className="text-carrot">
                  intuitive automated and manual tools
                </span>
                .
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
