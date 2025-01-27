import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { Github, Rocket } from "lucide-react";

export default function CallToAction() {
  const deployLink = process.env.DEPLOY_LINK ?? "";
  return (
    <>
      <div className="flex flex-col items-center text-center px-5 lg:gap-7 gap-4 lg:px-0">
        <BoxReveal boxColor={"#F98109"} duration={0.5}>
          <h1 className="text-pretty text-6xl">
            Join our community
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#F98109"} duration={0.5}>
          <div className="flex gap-2 lg:flex-row flex-col">
            <a
              href={
                "https://github.com/Health-Informatics-UoN/Carrot-Mapper/discussions"
              }
              target="_blank"
            >
              <Button className="hover:bg-[#333333]/85 dark:hover:bg-gray-200 bg-[#333333] dark:bg-white dark:text-[#333333]">
                <Github className="mr-2 size-4" /> GitHub Discussions
              </Button>
            </a>
            {deployLink && (
              <a href={deployLink} target="_blank">
                <Button className="dark:hover:bg-gray-100 hover:bg-gray-100 hover:border-carrot dark:hover:border-orange-900 text-carrot dark:text-orange-600 bg-white dark:bg-white border border-orange-600">
                  <Rocket className="mr-2 size-4" /> Deploy Carrot
                </Button>
              </a>
            )}
          </div>
        </BoxReveal>
      </div>
    </>
  );
}
