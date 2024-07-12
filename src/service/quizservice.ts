import { Question } from "../model/question";

export class QuizService {
  private questions: Question[] = [
    {
      question: "What is TypeScript?",
      options: [
        "A superset of JavaScript",
        "A CSS framework",
        "A database",
        "A version control system",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a feature of TypeScript?",
      options: [
        "Static typing",
        "Dynamic typing",
        "Machine learning",
        "Data visualization",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which file extension is used for TypeScript files?",
      options: [".ts", ".js", ".tsx", ".jsx"],
      correctAnswer: 0,
    },
    {
      question:
        "How do you define a variable with a specific type in TypeScript?",
      options: [
        "let name: type",
        "var name = type",
        "const name: type",
        "name::type",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which of the following types does TypeScript support?",
      options: ["Number", "String", "Boolean", "All of the above"],
      correctAnswer: 3,
    },
    {
      question: "How do you compile TypeScript code to JavaScript?",
      options: ["tsc", "npm start", "node", "ts-run"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a TypeScript decorator?",
      options: ["@Component", "#include", "import", "package"],
      correctAnswer: 0,
    },
    {
      question: "What is the TypeScript compiler called?",
      options: ["tsc", "typescript-compiler", "ts-compiler", "typescript"],
      correctAnswer: 0,
    },
    {
      question: "Which command is used to initialize a TypeScript project?",
      options: ["tsc --init", "npm init ts", "ts-init", "typescript --init"],
      correctAnswer: 0,
    },
  ];

  getQuestions():Question[]{
    return this.questions;
  }
}
