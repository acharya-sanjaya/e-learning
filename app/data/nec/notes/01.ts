const chapterOne: ChapterType = {
  topic: "Introduction to Information Technology",
  contents: [
    {
      topic: "Introduction",
      description: [
        "What is computer.",
        "Traits of computer.",
        "How computers evolved.",
        "Parts of computer - basic diagram.",
        "Computer types & uses.",
        "Good and bad about computers.",
      ],
    },
  ],
};

const chapterTwo: ChapterType = {
  topic: "Storage System",
  contents: [
    {
      topic: "Primary vs Secondary Storage",
      description: [
        "RAM, ROM basics.",
        "How data is saved and loaded.",
        "Different types of storage like hard disks, CDs, USB.",
        "Why primary is faster than secondary.",
      ],
    },
  ],
};

const chapterThree: ChapterType = {
  topic: "Software",
  contents: [
    {
      topic: "Software Basics",
      description: [
        "What software does.",
        "Different types: system and apps.",
        "Examples like OS, Word, Games.",
      ],
    },
    {
      topic: "Programming Languages",
      description: [
        "What code does for computers.",
        "Levels of code: machine, assembly, high level.",
        "Pros and cons of each.",
      ],
    },
  ],
};

const chapterFour: ChapterType = {
  topic: "Computer Networks",
  contents: [
    {
      topic: "Networking Basics",
      description: ["How computers talk to each other.", "Two main models: OSI and TCP/IP."],
    },
    {
      topic: "Devices and Media",
      description: ["What routers, switches, hubs do.", "Cables and wireless communication."],
    },
    {
      topic: "Network Security",
      description: ["Hack attacks and protection.", "Basics of firewalls and encryption."],
    },
  ],
};

const chapterFive: ChapterType = {
  topic: "Data Communication",
  contents: [
    {
      topic: "Basics",
      description: [
        "Sending data between devices.",
        "Fast and slow speeds.",
        "Ways to send: cables, wireless, modems.",
      ],
    },
    {
      topic: "Network Types and Design",
      description: [
        "LAN, WAN, and types.",
        "Layouts like star, bus, ring.",
        "Rules computers follow (protocols).",
      ],
    },
  ],
};

const chapterSix: ChapterType = {
  topic: "Business Data Processing",
  contents: [
    {
      topic: "Data Hierarchy",
      description: ["Organizing data in levels.", "Types of files for storing."],
    },
    {
      topic: "File Organization",
      description: ["Different ways data is saved in files.", "Utilities for managing files."],
    },
  ],
};

const notes: NoteType = {
  topic: "Fundamentals of Information Technology",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export interface NoteType {
  topic: string;
  chapters: ChapterType[];
}

export interface ChapterType {
  topic: string;
  contents: ContentType[];
}

export interface ContentType {
  topic: string;
  description: string[];
}

export default notes;
