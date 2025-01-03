import {ChapterType, NoteType} from "./01";

const chapterOne: ChapterType = {
  topic: "Foundations of Algorithm Analysis (ASoE0601)",
  contents: [
    {
      topic: "Algorithms and its Properties",
      description: [
        "An algorithm is a finite sequence of well-defined instructions to solve a specific problem",
        "Properties include correctness, clarity, efficiency, and robustness to handle varying inputs",
      ],
    },
    {
      topic: "RAM Model for Algorithm Analysis",
      description: [
        "The RAM (Random Access Machine) model assumes a single processor with uniform memory access time",
        "Allows theoretical analysis of algorithm performance by focusing on execution time and memory usage",
      ],
    },
    {
      topic: "Time and Space Complexity",
      description: [
        "Time complexity evaluates the time an algorithm takes to execute, relative to input size",
        "Space complexity examines the memory an algorithm uses during execution",
        "Best Case: Optimistic scenario (minimal operations), Worst Case: Pessimistic scenario (max operations), Average Case: Expected performance over all inputs",
      ],
    },
    {
      topic: "Asymptotic Notations",
      description: [
        "Big-O: Upper bound (worst-case behavior)",
        "Theta (Θ): Tight bound (average-case behavior)",
        "Omega (Ω): Lower bound (best-case behavior)",
      ],
    },
    {
      topic: "Recurrence Relations and their Applications",
      description: [
        "Recurrence relations describe an algorithm’s runtime based on its sub-problems (e.g., T(n) = 2T(n/2) + O(n))",
        "Used in divide-and-conquer and recursive algorithm analysis",
      ],
    },
    {
      topic: "Methods to Solve Recurrence Relations",
      description: [
        "Recursion Tree Method: Represents recurrence visually to compute the sum of costs at each level",
        "Substitution Method: Assumes a solution and proves its correctness via induction",
        "Master Theorem: Provides direct solutions for recurrences of the form T(n) = aT(n/b) + f(n)",
      ],
    },
  ],
};

const chapterTwo: ChapterType = {
  topic: "Divide and Conquer Algorithms (ASoE0602)",
  contents: [
    {
      topic: "Concept and Applications",
      description: [
        "Divide and Conquer splits a problem into sub-problems, solves them recursively, and combines results",
        "Applications include sorting, searching, and order statistics (e.g., Merge Sort, Binary Search)",
      ],
    },
    {
      topic: "Binary Search",
      description: [
        "A search technique dividing sorted input data into halves",
        "Reduces search space logarithmically (O(log n))",
      ],
    },
    {
      topic: "Finding Minimum and Maximum Element (Min-Max Algorithm)",
      description: [
        "Divide the array into pairs and compare elements, reducing the total comparisons",
        "Time complexity: O(n)",
      ],
    },
    {
      topic: "Merge Sort",
      description: [
        "A stable, divide-and-conquer sorting algorithm that splits, sorts, and merges data",
        "Time complexity: O(n log n); Space complexity: O(n)",
      ],
    },
    {
      topic: "Quick Sort and Randomized Quick Sort",
      description: [
        "Quick Sort partitions an array based on a pivot, then recursively sorts partitions",
        "Best Case: O(n log n), Worst Case: O(n²), Average Case: O(n log n)",
        "Randomized Quick Sort uses a random pivot to improve performance with certain inputs",
      ],
    },
    {
      topic: "Heap Data Structures and Heap Sort",
      description: [
        "Max/Min heaps are complete binary trees maintaining the heap property (parent >=/<= child)",
        "Heap Sort uses heaps to repeatedly extract the largest/smallest element, yielding O(n log n) time",
      ],
    },
    {
      topic: "Order Statistics",
      description: [
        "Order statistics identify the k-th smallest/largest element in an array",
        "Selection Algorithms include brute-force approaches (O(n²)), Expected Linear Time (O(n)), and Worst-Case Linear Time (using the Median of Medians, O(n))",
      ],
    },
  ],
};

const chapterThree: ChapterType = {
  topic: "Dynamic Programming (ASoE0603)",
  contents: [
    {
      topic: "Concepts and Key Features",
      description: [
        "Dynamic Programming breaks problems into sub-problems, storing their solutions to avoid recomputation",
        "Key Features: Overlapping sub-problems and optimal substructure",
      ],
    },
    {
      topic: "Dynamic Programming vs. Greedy Algorithms",
      description: [
        "Greedy: Makes local optimal choices to build a solution (faster but may not yield a global optimum)",
        "Dynamic Programming ensures the global optimum by considering multiple sub-problems",
      ],
    },
    {
      topic: "Examples and Applications",
      description: [
        "Matrix Chain Multiplication: Computes optimal parenthesis placement for matrices (O(n³))",
        "Edit Distance: Finds minimum operations (insert, delete, replace) to convert one string into another (O(mn))",
        "Knapsack Problem: Chooses items to maximize value within weight constraints (O(nW))",
        "Floyd Warshall: Computes shortest paths between all pairs of nodes (O(n³))",
        "Traveling Salesman Problem: Determines minimum cost route visiting all cities (exponential complexity without optimizations)",
      ],
    },
    {
      topic: "Memoization",
      description: [
        "Memoization is a top-down approach that stores results of expensive function calls for reuse",
        "Improves efficiency by reducing redundant calculations",
      ],
    },
  ],
};

const chapterFour: ChapterType = {
  topic: "Loading, Linker, and Macro Processor (ASoE0604)",
  contents: [
    {
      topic: "Basic Loader Concepts",
      description: [
        "A loader loads object code into memory and prepares it for execution",
        "Examples: Absolute loaders and Bootstrap loaders for initial program loading",
      ],
    },
    {
      topic: "Program Linking",
      description: [
        "Linking resolves references between modules or libraries",
        "Uses relocation algorithms to adjust memory addresses during loading",
      ],
    },
    {
      topic: "Loader Features",
      description: [
        "Machine Dependent: Includes relocation handling and resolving absolute addresses",
        "Machine Independent: Features like automatic library search and loader design options",
      ],
    },
    {
      topic: "Examples",
      description: [
        "Dynamic Linking enables sharing of libraries in memory during runtime",
        "Popular implementations include MS-DOS linkers and SunOS linkers",
      ],
    },
  ],
};

const chapterFive: ChapterType = {
  topic: "Macro Processor Basics (ASoE0605)",
  contents: [
    {
      topic: "Macro Definitions and Expansion",
      description: [
        "Macros are reusable code blocks that expand into instructions during assembly",
        "Macro processors handle expansions before actual assembly begins",
      ],
    },
    {
      topic: "Key Features",
      description: [
        "Macro Concatenation: Combines parameters dynamically",
        "Recursive Expansion: Supports macros calling other macros",
        "Keyword Parameters: Allows naming parameters for flexibility",
      ],
    },
    {
      topic: "Examples",
      description: [
        "Macro Processors in Language Translators: Expanding macros during compilation",
        "MASM Processor: Macro Assembler’s handling of assembly macros",
        "ANSI C Macro Language: Used in pre-processing source code for conditional compilation",
      ],
    },
  ],
};

const chapterSix: ChapterType = {
  topic: "Network Programming (ASoE0606)",
  contents: [
    {
      topic: "Basics and Communication Protocols",
      description: [
        "Communication protocols like TCP, IP, UDP, and SCTP establish rules for data exchange between systems",
        "TCP (Transmission Control Protocol): Connection-oriented, ensures reliable delivery",
        "UDP (User Datagram Protocol): Connectionless, suitable for fast data transfer",
      ],
    },
    {
      topic: "Sockets and Socket Addressing",
      description: [
        "Sockets provide APIs for network communication (e.g., UNIX sockets, Winsock)",
        "Socket Address Structures define endpoints for communication using IP and port pairs",
      ],
    },
    {
      topic: "I/O Models",
      description: [
        "Blocking: Process waits until data is received",
        "Non-Blocking: Returns control immediately, requiring checks for data readiness",
        "Multiplexing: Monitors multiple streams for readiness",
      ],
    },
    {
      topic: "Examples",
      description: [
        "UNIX Domain Sockets: Efficient inter-process communication on the same machine",
        "Winsock Extensions: Windows API for network programming",
      ],
    },
  ],
};

const notes: NoteType = {
  topic: "Analysis and Design of Algorithm, and Programming (System and Network)",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export default notes;
