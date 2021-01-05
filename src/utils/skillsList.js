import devIcon from "../assets/data.svg"
import scrumIcon from "../assets/scrum.svg"
import skillsIcon from "../assets/skills.svg"

export const skillList = [
  {
    icon: devIcon,
    title: "frontEnd",
    text: "devSkillText",
    subtitle: "tech",
    list: [
      "HTML5",
      "CSS, SCSS & Styled Components",
      "Javascript",
      "Vue.js",
      "React.js",
      "Gatsby",
      "JEST",
      "Material UI & Quasar",
    ],
  },
  {
    icon: scrumIcon,
    title: "softwareProject",
    text:
      "projectsText",
    subtitle: "methodologies",
    list: [
      "Scrum",
      "Kanban",
      "Pair Programming",
      "Design Thinking"
    ],
  },
  {
    icon: skillsIcon,
    title: "knowledge",
    text:
      "knowledgeText",
    subtitle: "knowledge",
    list: [
      "SQL",
      "GIT & Git Flow",
      "Object Orientation (OO)",
      "GraphQL",
      "API Rest",
      "Design System",
      "SEO",
      "Copy",
    ],
  }
]
