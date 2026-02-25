import IconCloud from "./ui/icon-cloud";
const slugs = [
  "react",
  "nextdotjs",
  "typescript",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "postgresql",
  "mongodb",
  "mysql",
  "figma",
  "visualstudiocode",
  "docker",
  "git",
  "github",
  "postman",
  "render",
  "redux",
  "cloudinary",
  "vite",
  "Zustand",
];
function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
export default IconCloudDemo;
