import {ChapterType, NoteType} from "./01";

const chapterOne: ChapterType = {
  topic: "Introduction to Information Technology",
  contents: [],
};

const chapterTwo: ChapterType = {
  topic: "Storage System",
  contents: [],
};

const chapterThree: ChapterType = {
  topic: "Software",
  contents: [],
};

const chapterFour: ChapterType = {
  topic: "Computer Networks",
  contents: [],
};

const chapterFive: ChapterType = {
  topic: "Data Communication",
  contents: [],
};

const chapterSix: ChapterType = {
  topic: "NEC Regulatory Body",
  contents: [
    {
      topic: "NEC",
      description: [
        "NEC is a regulatory body to regulate and oversee the engineering profession in Nepal",
        "Logo: An organization that maintains ethics (from vagbad Geeta), 2056",
        "NEC Act, 2055",
        "First Executive Council: Magh, 2056",
        "First Chairman: Er. Ram Bahadur Sharma, completed tenure (Karye kaal 4 years) on Magh 2060",
        "First Vice Chairman: Er. Niranjan Prasad Chalise",
        "First Registrar: Er. Bindeshwor Yadav",
        "First NEA Present to enter NEC: Er. Yuva Raj Sharma",
        "2055-11-27: First NEA ACT, 2055",
        "First Amendment (Somsodhan) of NEA Act, 2055: 2079-5-5 -> Vital change must give exam to get license",
      ],
    },
  ],
};

const notes: NoteType = {
  topic: "Fundamentals of Information Technology",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export default notes;
