// import { IconType } from "react-icons";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { StaticImageData } from "next/image";
// import Image from "next/image";
// import { Button } from "./button";
// import Link from "next/link";
// import { Github, Globe } from "lucide-react";

// interface ProjectProps {
//   nameProject: string;
//   descriptionProject: string;
//   vercel: string;
//   github: string;
//   imageSrc: StaticImageData;
//   techIcons: IconType[];
//   align?: "top" | "bottom";
// }

// export const Project = ({
//   nameProject,
//   descriptionProject,
//   vercel,
//   github,
//   imageSrc,
//   techIcons,
//   align = "bottom",
// }: ProjectProps) => {
//   return (
//     <Dialog>
//       <div
//         className={`flex h-[290px] w-max max-w-sm flex-wrap gap-6 p-2 ${
//           align === "bottom" && "md:mt-20"
//         }`}
//       >
//         <DialogTrigger className="flex h-max w-full flex-col items-start gap-4">
//           <h3 className="text-lg font-bold text-primary-foreground">
//             {nameProject}
//           </h3>

//           <div className="w-72 rounded-lg">
//             <Image
//               src={imageSrc}
//               alt={`Imagem da tela inicial do site ${nameProject}`}
//               width={0}
//               height={0}
//               className="w-full rounded-xl"
//             />
//           </div>
//         </DialogTrigger>

//         <DialogContent className="flex flex-col gap-6 border-none">
//           <DialogHeader>
//             <DialogTitle className="text-3xl font-bold">
//               {nameProject}
//             </DialogTitle>
//           </DialogHeader>

//           <p className="text-lg">{descriptionProject}</p>

//           <div className="flex gap-3">
//             {techIcons.map((Icon, index) => (
//               <Icon key={index} className="text-lg" />
//             ))}
//           </div>

//           <div className="flex gap-4">
//             {vercel && (
//               <Link href={vercel} target="_blank">
//                 <Button>
//                   Ver Site <Globe />
//                 </Button>
//               </Link>
//             )}
//             <Link href={github} target="_blank">
//               <Button>
//                 Ver Código <Github />
//               </Button>
//             </Link>
//           </div>
//         </DialogContent>
//       </div>
//     </Dialog>
//   );
// };
