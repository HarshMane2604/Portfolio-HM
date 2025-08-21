type AboutCard = {
  id: number
  title: string
  description: string
  icon?: string // optional - e.g., you can add lucide-react icons here
}
export const aboutCards: AboutCard[] = [
  {
    id: 1,
    title: "Who Am I?",
    description:
      "I'm Harsh Mane, a passionate full-stack developer who loves building modern, scalable, and user-friendly web applications.",
    icon: "user",
  },
  {
    id: 2,
    title: "What I Do",
    description:
      "I work with JavaScript, TypeScript, React, Next.js, FastAPI, and MongoDB to craft seamless digital experiences.",
    icon: "code",
  },
  {
    id: 3,
    title: "My Vision",
    description:
      "I aim to create impactful solutions that merge design and technology, making the web a better place.",
    icon: "lightbulb",
  },
  {
    id: 4,
    title: "Beyond Code",
    description:
      "Apart from coding, I enjoy learning new technologies, problem-solving, and building projects that challenge me.",
    icon: "rocket",
  },
]
  