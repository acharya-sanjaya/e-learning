import {ChapterType, NoteType} from "./01";

const chapterOne: ChapterType = {
  topic: "Introduction to AI and Intelligent Agents (ACtE0901)",
  contents: [
    {
      topic: "Concept of Artificial Intelligence",
      description: [
        "Artificial Intelligence is a field that enables machines to perform tasks that typically require human intelligence, such as reasoning, learning, decision-making, and problem-solving",
        "Core areas include perception (e.g., recognizing images), language processing (e.g., translating languages), and autonomous decision-making (e.g., self-driving cars)",
      ],
    },
    {
      topic: "AI Perspectives and History",
      description: [
        "Weak AI focuses on specialized tasks like chess playing, while Strong AI aims at achieving a general intelligence akin to humans",
        "AI history includes symbolic AI in the 1950s (logic-based reasoning), machine learning advancements in the 1980s, and breakthroughs in deep learning during the 21st century",
      ],
    },
    {
      topic: "Applications and Foundations of AI",
      description: [
        "Applications include robotics (industrial automation), healthcare (predictive diagnostics), and finance (fraud detection and algorithmic trading)",
        "AI's foundational disciplines span mathematics (probabilities, optimization), neuroscience (understanding cognition), and linguistics (language understanding)",
      ],
    },
    {
      topic: "Introduction to Agents",
      description: [
        "Agents are autonomous entities that perceive the environment through sensors and act through actuators",
        "Examples include a thermostat (sensing temperature and adjusting heating) and robots navigating a space",
      ],
    },
    {
      topic: "Properties and PEAS Description",
      description: [
        "Properties of intelligent agents include autonomy (independence in actions), reactivity (responding to changes), proactivity (initiating actions), and social ability (interacting with other agents)",
        "The PEAS framework defines an agent’s role: Performance Measure evaluates success, Environment describes surroundings, Actuators execute actions, and Sensors capture data",
      ],
    },
    {
      topic: "Types of Agents and Environments",
      description: [
        "Simple Reflex Agents act solely based on current conditions using predefined rules (e.g., a light switch)",
        "Model-Based Agents maintain an internal state to predict future outcomes (e.g., GPS navigation)",
        "Goal-Based Agents act to achieve specific goals (e.g., a robot retrieving objects)",
        "Utility-Based Agents assess the desirability of actions and outcomes (e.g., a financial portfolio optimizer)",
        "Environment types include deterministic (fully predictable) vs. stochastic (unpredictable), static (unchanging) vs. dynamic (changing), and observable (all data accessible) vs. semi-observable",
      ],
    },
  ],
};

const chapterTwo: ChapterType = {
  topic: "Problem Solving and Searching Techniques (ACtE0902)",
  contents: [
    {
      topic: "State Space Search and Problem Formulation",
      description: [
        "State space represents all possible configurations and transitions of a problem",
        "Formulating a problem involves defining states, operators, an initial state, and a goal state (e.g., solving a maze)",
      ],
    },
    {
      topic: "Constraint Satisfaction Problems (CSP)",
      description: [
        "In CSP, problems consist of variables, domains (possible values for each variable), and constraints",
        "Applications include timetabling, resource allocation, and solving puzzles like Sudoku",
      ],
    },
    {
      topic: "Uninformed Search Techniques",
      description: [
        "Breadth-First Search explores paths level by level to find the shortest path",
        "Depth-First Search explores a single path deeply before backtracking to explore others",
        "Depth-Limited adds a depth bound to prevent excessive memory use",
        "Iterative Deepening combines DFS's depth efficiency with BFS's completeness",
        "Bidirectional Search runs two searches simultaneously, from the start state and the goal state",
      ],
    },
    {
      topic: "Informed Search Techniques",
      description: [
        "Greedy Best-First Search uses heuristics to minimize estimated costs to a goal but may not find the optimal path",
        "A* Search combines actual cost with estimated cost for optimal pathfinding",
        "Hill Climbing iteratively improves solutions based on a local objective function",
        "Simulated Annealing adds randomness to escape local optima by exploring worse solutions initially",
      ],
    },
    {
      topic: "Game Playing and Adversarial Search",
      description: [
        "Game-playing AI deals with competition against opponents (e.g., chess, tic-tac-toe)",
        "Mini-max evaluates optimal moves by simulating every possible opponent action",
        "Alpha-Beta Pruning improves efficiency by discarding suboptimal branches without evaluating them fully",
      ],
    },
  ],
};

const chapterThree: ChapterType = {
  topic: "Knowledge Representation (ACtE0903)",
  contents: [
    {
      topic: "Knowledge Representations and Mappings",
      description: [
        "Semantic Networks organize information using graphical structures with nodes (concepts) and edges (relations)",
        "Frames use predefined templates for structured knowledge representation, allowing easier manipulation of related data",
      ],
    },
    {
      topic: "Propositional Logic",
      description: [
        "Propositional logic represents facts using logical connectives like AND, OR, and NOT",
        "It is used for inference (deriving new facts) through resolution methods",
      ],
    },
    {
      topic: "Predicate Logic and Rules of Inference",
      description: [
        "Predicate Logic extends propositional logic by introducing quantifiers like 'for all' and 'exists'",
        "Rules of inference include universal instantiation and modus ponens for deriving valid conclusions",
      ],
    },
    {
      topic: "Bayesian Networks and Belief Reasoning",
      description: [
        "Bayesian Networks model probabilistic dependencies between variables using directed acyclic graphs",
        "Inference in belief networks involves using Bayes' Rule to compute posterior probabilities for predictions",
      ],
    },
  ],
};

const chapterFour: ChapterType = {
  topic: "Expert Systems and NLP (ACtE0904)",
  contents: [
    {
      topic: "Expert Systems",
      description: [
        "An expert system uses a knowledge base and inference rules to solve domain-specific problems",
        "Examples include diagnostic tools in medicine or recommendation systems in retail",
      ],
    },
    {
      topic: "Natural Language Processing (NLP)",
      description: [
        "NLP includes language understanding (extracting meaning) and generation (producing coherent responses)",
        "Challenges include ambiguity resolution and syntactic structure parsing",
        "Applications range from sentiment analysis to virtual assistants (e.g., Siri, Alexa)",
      ],
    },
    {
      topic: "Robotics and Machine Vision",
      description: [
        "Robotics leverages AI for navigation and manipulation, relying on machine vision for tasks like object recognition and scene understanding",
      ],
    },
  ],
};

const chapterFive: ChapterType = {
  topic: "Machine Learning (ACtE0905)",
  contents: [
    {
      topic: "Types of Machine Learning",
      description: [
        "Supervised Learning requires labeled data for training (e.g., predicting house prices)",
        "Unsupervised Learning identifies clusters or patterns without labels (e.g., customer segmentation)",
        "Reinforcement Learning trains an agent by maximizing rewards through trial and error",
      ],
    },
    {
      topic: "Algorithms and Techniques",
      description: [
        "Decision Trees split data into branches for classification or regression tasks",
        "Naive Bayes uses conditional probabilities assuming independent features",
        "Fuzzy Learning applies fuzzy logic to handle uncertainty in inputs",
        "Genetic Algorithms optimize solutions by simulating natural selection processes",
      ],
    },
  ],
};

const chapterSix: ChapterType = {
  topic: "Neural Networks (ACtE0906)",
  contents: [
    {
      topic: "Overview and Architectures",
      description: [
        "Artificial Neural Networks consist of layers of interconnected nodes or neurons",
        "Architectures include Feedforward (data flows forward) and Multilayer Perceptrons with hidden layers for complex tasks",
      ],
    },
    {
      topic: "Learning Techniques",
      description: [
        "Backpropagation adjusts weights iteratively to minimize errors",
        "Gradient Descent optimizes weight updates by following the steepest loss function slope",
      ],
    },
    {
      topic: "Specialized Models",
      description: [
        "Hopfield Networks focus on associative memory tasks",
        "Adaline (Adaptive Linear Neurons) deals with single-layer linear models",
      ],
    },
  ],
};

const notes: NoteType = {
  topic: "Artificial Intelligence and Neural Networks",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export default notes;
