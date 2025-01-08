import {ChapterType, NoteType} from "./01";

const chapterOne: ChapterType = {
  topic: "Introduction to AI and Intelligent Agents",
  contents: [
    {
      topic: "Concept of Artificial Intelligence",
      description: [
        "Study about how machine can achieve reasoning, learning, decision-making, and problem-solving abilities",
        "",
        "Key Components:",
        "-> Machine Learning: Learn from data and improve",
        "-> Natural Language Processing: Understand and Interact using human language",
        "-> Robotics: Machine (Robots) to perceive and act in physical environment",
        "-> Computer Vision: Machine understand and Interact using visual data",
      ],
    },
    {
      topic: "AI Perspectives and History",
      description: [
        "-> Symbolic AI: Use rules and symbols for reasoning",
        "-> Connection-ist AI: Use neural networks (or graph like structure) to learn and identify patterns in data",
        "-> Behavior-Based AI: Focuses on reactive and adaptive systems",
        "-> Evolutionary AI: Inspired by biological evolution (involves genetic algorithms, mutation, and selection)",
        "-> Hybrid AI: Symbolic + neural network techniques",
        "-> Statistical AI: Relies on statistical methods (Bayesian networks, decision trees, and clustering)",
        "-> Embodied AI: AI systems with physical agents (robots)",
        "-> Cognitive AI: Models human cognition and incorporates learning, memory, and decision-making processes",
        "-> Strong AI: For complex tasks",
        "-> Weak (Narrow) AI: For simple tasks",
      ],
    },
    {
      topic: "History of AI",
      description: [
        "Father of AI: John McCarthy",
        "Dartmouth Conference: 1956, John McCarthy coined the term 'AI'",
        "1950s: Alan Turing: Turing test",
        "",
        "1956-1974: First AI Boom",
        "1980-1987: Second AI Boom",
        "1997: IBM's Deep Blue defeated the world champion chess player",
        "2016: Google's AlphaGo beat Go (Mind Game) world champion",
      ],
    },
    {
      topic: "Introduction to Agents",
      description: [
        "Perceive (Sensors) -> Process (Inference Engine) ->  Act (Actuators)",
        "",
        "Types of Agents:",
        "-> Simple Reflex Agents: No past data, use predefined rules",
        "-> Model-Based Agents: Maintain internal state to predict future outcomes",
        "-> Goal-Based Agents: Act to achieve specific goals",
        "-> Utility-Based Agents: Focus on achieving optimized (better) outcomes",
      ],
    },
    {
      topic: "PEAS Description",
      description: ["Performance Measure", "Environment", "Actuators", "Sensors"],
    },
    {
      topic: "Types of Environments",
      description: [
        "Deterministic: Fully predictable",
        "Stochastic: Unpredictable",
        "Static: Unchanging",
        "Dynamic: Changing",
        "Observable: All data accessible",
        "Semi-observable: Some data is not accessible",
        "Single Agent: One agent interacts with the environment",
        "Multi-Agent: Multiple agents interact with the environment",
      ],
    },
  ],
};

const chapterTwo: ChapterType = {
  topic: "Problem Solving and Searching Techniques",
  contents: [
    {
      topic: "Problem Solving Strategies",
      description: [
        "Divide and Conquer: Divide big problem into smaller sub-problems",
        "Heuristic: Applying Rules of Thumb or Educated Guess",
        "Greedy: Local optimal choices to find a solution",
        "Backtracking: Depth first search that returns to parent when there is conflict",
        "Forward Checking: Keep track of remaining legal values for each variable (reduce search space)",
        "Constraints propagation (Arc Consistency): Eliminate values from domain that violate constraints",
      ],
    },
    {
      topic: "Constraint Satisfaction Problems (CSP)",
      description: [
        "In CSP, problems consist of variables, domains (possible values for each variable), and constraints (rules that must be satisfied)",
      ],
    },
    {
      topic: "Uninformed Search Techniques",
      description: [
        "Breadth-First Search: Explores paths level by level to find the shortest path",
        "Depth-First Search: Explores a single path deeply before backtracking to explore others",
        "Depth-Limited DFS: Adds a depth bound to prevent excessive memory use",
        "Iterative Deepening: Combines Depth-limited DFS's depth efficiency with Breadth-First Search's completeness",
        "Bidirectional Search: Runs two searches simultaneously, from the start state and the goal state",
      ],
    },
    {
      topic: "Informed Search Techniques",
      description: [
        "Greedy Best-First Search: Uses heuristic functions h(n) to minimize estimated costs to a goal but may not find the optimal path",
        "A* Search: Combines actual cost as well as heuristic function to find the optimal path",
        "Hill Climbing: Continuously move towards increasing or decreasing values based on heuristic function (used for mathematical optimization problems)",
        "Simulated Annealing: Adds randomness to escape local optima (Probabilistic Approach)",
      ],
    },
    {
      topic: "Game Playing Algorithms",
      description: [
        "Mini-max: Assume player plays optimally and tries to minimize the loss (used in zero-sum games where one's loss is another's gain)",
        "Alpha-Beta Pruning: Discards those branches that can't affect final outcome (Enhance min-max)",
        "Monte Carlo Tree Search: Simulates games using random sampling of game states to find best moves",
        "Reinforcement Learning: Uses trial and error to learn optimal actions",
      ],
    },
  ],
};

const chapterThree: ChapterType = {
  topic: "Knowledge Representation",
  contents: [
    {
      topic: "Knowledge Representations and Mappings",
      description: [
        "Symbolic Mapping: translates real world entities as symbols",
        "Semantic Mapping: Associates symbols with meanings",
        "Procedural Mapping: Connect symbols with procedures (functions)",
      ],
    },
    {
      topic: "Approaches to Knowledge Representation",
      description: [
        "Logical Representation: Use Propositional and predicate logic to make precise and unambiguous statements",
        "Semantic networks: Graph-based (easy to visualize), nodes represents concepts and edge represents relations",
        "Frames: Similar to the concept of object, have slots (attributes) and fillers (properties / values), like objects, supports inheritance",
        "Production rules: Condition-action rules (if-then structure)",
        "Bayesian Networks: Probabilistic representation",
      ],
    },
    {
      topic: "Propositional Logic",
      description: [
        "Propositional logic: Statements can be either true or false but not both",
        "Also known as boolean logic",
        "Uses logical connectives like negation(NOT), conjunction(AND), disjunction(OR), implication(XOR) and bi-conditional(NOT of XOR)",
        "Inference using resolution: Deriving new facts by equating statements (using boolean algebra)",
        "Tautology: A statement that is always true (p + !p = always 1)",
        "Contradiction: A statement that is always false (p  !p = always 0)",
      ],
    },
    {
      topic: "Predicate Logic and Rules of Inference",
      description: [
        "Predicate (function that returns boolean value based on their arguments)",
        "quantifiers (for all, exists, belongs)",
        "Predicate logic extends propositional logic by introducing predicates and quantifiers",
        "Eg; isHuman(John), isCar(BMW), !isCar(John)",
        "Unification: finding substitutions that make two expressions identical",
        "-> i) for all, Loves(x, Mary)",
        "-> ii) for all, Loves(John, y)",
        "-> Substitute identical expressions: ",
        "-> Loves(John, Mary)",
        "",
        "Resolution refutation: To prove a statement, first take negation of that statement, then prove by contradiction",
      ],
    },
    {
      topic: "Bayesian Networks and Belief Reasoning",
      description: [
        "Bayes Rule: P(A|B) = P(B|A) * P(A) / P(B)",
        "-> Here, A = hypothesis, B = evidence",
        "-> P(A|B) = probability of hypothesis A given the evidence B has occurred",
        "-> P(B|A) (LIKELIHOOD) = probability of evidence B given the hypothesis A has occurred",
        "P(A) = probability of hypothesis (prior probability)",
        "P(B) = probability of evidence (marginal probability)",
        "",
        "Belief represents general or past probabilities",
        "Whenever new evidence is obtained, belief is updated using Bayes' Rule",
        "",
        "Challenges: Computational complexity, data requirements, and model accuracy",
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
      topic: "Declarative Knowledge and Procedural Knowledge",
      description: [
        "Declarative knowledge:",
        "-> Knowledge about factual information",
        "-> Includes data, concepts and relationships",
        "-> Eg; Water boils at 100°C",
        "",
        "Procedural knowledge:",
        "-> Knowledge about how to perform a task or process",
        "-> Includes rules and methods(functions)",
        "-> Eg; Steps to boil water are: Put water, Lit fire, Turn off fire source after you see some vapours",
      ],
    },
    {
      topic: "Natural Language Processing (NLP)",
      description: [
        "Tasks in NLU: Intent Recognition, Sentiment Analysis, Disambiguation",
        "Tasks in NLG: Content Selection, Sentence Planning, Lexical Choice (select appropriate word and phrase), Text Realization",
      ],
    },
    {
      topic: "Tasks in NLP",
      description: [
        "Tasks in NLP:",
        "Text Preprocessing: ",
        "-> Tokenization:  Break down text into smaller units (called tokens)",
        "-> Normalization: Text to standard format (eg; lower case, remove punctuations)",
        "-> Stop Word Removal: Remove common words that don't contribute to meaning (eg; the, and, is, etc)",
        "-> Stemming and Lemmatization: Reduce words to their base or root form",
        "-> Stemming: Remove suffixes, Lemmatization: Morphological analysis of words",
        "",
        "Part-of-Speech Tagging: Identify grammatical categories (noun, verb, adjective) to each token",
        "",
        "Syntactic Parsing: Analyze grammatical structure to understand relationship between words",
        "",
        "Semantic Analysis: Meaning of words and sentences, resolve ambiguities, deriving intended message",
        "",
        "Pragmatics: Intended meaning according to the context and speaker intension",
        "",
        "Discourse Integration: Analyze how sentences relate to each other within larger context or conversation",
      ],
    },
  ],
};

const chapterFive: ChapterType = {
  topic: "Machine Learning",
  contents: [
    {
      topic: "Supervised Learning",
      description: [
        "Involves training with labeled data where each input has a corresponding output",
        "Key Algorithms:",
        "-> Linear Regression: Predicts continuous outputs based on a linear relationship",
        "-> Decision Trees: (Hierarchical structure) Breaks data into subsets using decision-making rules at each branch",
        "Challenges:",
        "-> Overfitting: Model performs well on training data but poorly on unseen data",
        "-> Underfitting: Model fails to capture important patterns in the data",
      ],
    },
    {
      topic: "Unsupervised Learning",
      description: [
        "Explores unlabeled data to identify structures or patterns",
        "Key Techniques:",
        "-> Clustering: Groups data points based on similarity (eg, K-Means)",
        "-> Dimensionality Reduction: Reduces the number of variables for simpler interpretation (eg, PCA)",
      ],
    },
    {
      topic: "Reinforcement Learning",
      description: ["Learning approach based on trial and error to maximize rewards"],
    },
    {
      topic: "Inductive Learning and Deductive Learning",
      description: [
        "Inductive Learning: Observation --> Generalization --> Hypothesis and theory",
        "Deductive Learning: Existing theory --> Experiment --> Conclusion/Evidence",
      ],
    },
    {
      topic: "Statistical-Based Learning (Naive Bayes Model)",
      description: [
        "Naive Bayes uses probabilities to classify data, assuming features are independent",
        "Types:",
        "-> Gaussian Naive Bayes: Assumes data is normally distributed",
        "-> Multi-nomial Naive Bayes: Assumes features represent discrete counts (frequencies)",
        "-> Bernoulli Naive Bayes: Assumes features represent binary values (0/1)",
      ],
    },
    {
      topic: "Fuzzy Learning",
      description: [
        "FUZZY LOGIC: Deals with imprecise or uncertain data",
        "-> In digital logic: Variable have two states (ie true or false)",
        "-> In fuzzy logic: Variables have more than two states",
        "-> Eg; roomTemp = 'slightly cold'",
        " - other values could be 'cold', 'very cold', 'warm', 'hot', 'very hot'",
        "",
        "Fuzzy learning handles data that is imprecise or uncertain using fuzzy logic",
        "Applications: Smart appliances like AC controllers",
      ],
    },
    {
      topic: "Types of Fuzzy Inference System (FIS)",
      description: [
        "Mamdani FIS:",
        "-> Involves fuzzifying inputs, evaluating rules, aggregating outputs, and defuzzifying the result",
        "-> Commonly used in control systems",
        "",
        "Sugeno FIS:",
        "-> Similar but uses linear output membership functions",
        "-> Used in systems requiring optimization and adaptiveness",
        "",
        "Wang-Mendel FIS:",
        "-> Extension of Sugeno FIS",
        "-> Both linguistic and numerical variables",
      ],
    },
    {
      topic: "Genetic Algorithm",
      description: [
        "Optimization technique inspired by natural selection",
        "-> Selection: Choose solutions with better performance (fitness)",
        "-> Crossover: Combine pairs of solutions to create new ones",
        "-> Mutation: Add small random changes for variation",
        "Example: Solving the traveling salesman problem",
      ],
    },
  ],
};

const chapterSix = {
  topic: "Neural Networks",
  contents: [
    {
      topic: "Mathematical Model of ANN",
      description: [
        "A computational graph consisting of layers of interconnected nodes or 'neurons'",
        "Layers:",
        "-> Input Layer: Accepts raw data",
        "-> Hidden Layers: Processing (using weights and biases)",
        "-> Output Layer: Final predictions or classifications",
        "Steps:",
        "-> Each node applies a weighted sum of its inputs",
        "-> Adds bias",
        "-> Pass the result through an activation function to produce output for the next layer",
      ],
    },
    {
      topic: "McCulloch-Pitts Neuron",
      description: [
        "First computational model of a biological neuron",
        "Structure:",
        "-> Inputs: Binary values",
        "-> Weights: Associated with inputs to determine importance",
        "-> Threshold function: Activates when threshold value (limit or boundary) is crossed",
        "Used to model simple logical operations like AND, OR",
        "Limitations:",
        "-> Cannot solve non-linear problems (eg, XOR)",
        "-> Fixed activation function, Lack of learning capability",
      ],
    },
    {
      topic: "Activation Functions",
      description: [
        "Determine the output of a neuron given its input",
        "Adds non-linearity to the network, enabling it to model complex data patterns",
        "Types:",
        "-> Step Function: Simple binary output; Can't handle gradients",
        "-> Sigmoid: Output: (0, 1); Suitable for probabilistic outputs but prone to vanishing gradients",
        "-> Tanh: Output: (-1, 1); better for zero-centered data but still suffers from vanishing gradients",
        "-> ReLU (Rectified Linear Unit): Outputs max(0, x) i.e. [0, ∞); Avoids vanishing gradients and widely used in modern deep networks",
        "-> Soft-max: Converts raw scores into probabilities for multi-class classification problems",
      ],
    },
    {
      topic: "Purpose of Activation Functions",
      description: [
        "Concept: Introduces key computational abilities to neural networks",
        "Functions:",
        "-> Non-linearity: Helps neural networks model complex patterns like image recognition or speech",
        "-> Thresholding: Decides when a neuron should 'activate'",
        "-> Normalization: Keeps neuron outputs within a manageable range",
        "-> Without activation functions, the network becomes a simple linear regression model, limiting its ability to learn patterns in complex data",
      ],
    },
    {
      topic: "Architectures of Neural Networks",
      description: [
        "Types:",
        "-> Feedforward Neural Networks (FNN): Uni-directional, used in basic image and text recognition",
        "-> Recurrent Neural Networks (RNN): Feedback loops for sequential data (eg, time series, language models)",
        "-> Convolutional Neural Networks (CNN): Designed for image/video processing, Grid-like structure",
        "-> Generative Adversarial Networks (GAN): Generator + Discriminator; Image Generation",
        "-> Transformer Networks: Self-attention mechanisms, critical for NLP tasks (Eg; GPT models)",
      ],
    },
    {
      topic: "The Perceptron",
      description: [
        "Simple neural network architecture for binary classification",
        "Combines inputs using weights and biases",
        "Then, Applies a step function to classify data points into one of two categories",
        "Useful for solving linearly separable problems",
        "Limitations: Unable to solve non-linear problems; Doesn't support gradient-based learning due to its step function",
      ],
    },
    {
      topic: "Gradient Descent",
      description: [
        "An optimization technique to minimize the loss/error in a model",
        "Iteratively adjusts weights in the opposite direction of the gradient of the loss function",
        "Used to find the optimal weights for minimizing errors in predictions; Improved convergence",
        "Variants:",
        "-> Batch Gradient Descent: Processes entire dataset; slow but stable",
        "-> Stochastic Gradient Descent (SGD): Processes one sample; faster but noisy",
        "-> Mini-Batch Gradient Descent: Processes small data batches, balancing speed and stability",
      ],
    },
    {
      topic: "The Delta Rule",
      description: [
        "Updates weights to minimize the Mean Squared Error (MSE)",
        "Used in supervised learning for linear neurons",
        "Serves as the foundation for backpropagation in more complex networks",
      ],
    },
    {
      topic: "Hebbian Learning",
      description: [
        "Rule: 'Neurons that fire together, wire together'",
        "Focuses on correlation between neurons",
        "Implements unsupervised learning in artificial systems, emulating biological learning",
        "Examples: Associative memory systems like Hopfield networks",
      ],
    },
    {
      topic: "Adaline Network",
      description: [
        "The Delta Rule is used here",
        "Continuous output and linear activation",
        "Utilizes the Least Mean Squares (LMS) algorithm to minimize errors",
        "Suitable for simple linear regression tasks with better convergence than Perceptron",
        "Limitations: Like Perceptron, cannot solve non-linear problems",
      ],
    },
    {
      topic: "Multilayer Perceptron Neural Networks",
      description: [
        "Uses backpropagation to learn complex relationships",
        "Multiple layers (input, hidden, and output) and non-linear activation",
        "Forward passes calculate predictions; Backpropagation adjusts weights",
        "Solves non-linear problems by utilizing hidden layers",
      ],
    },
    {
      topic: "Backpropagation Algorithm",
      description: [
        "A supervised learning method for training multilayer networks",
        "Enables efficient training of deep networks for non-linear problems",
        "Steps:",
        "-> Forward Pass: Compute outputs and error",
        "-> Backward Pass: Compute gradients using the chain rule",
        "-> Weight Update: Adjust weights using gradient descent",
      ],
    },
    {
      topic: "Hopfield Neural Network",
      description: [
        "A fully connected network used for associative memory tasks",
        "Operates as content-addressable memory with guaranteed convergence to stable states",
        "Stores patterns and retrieves the closest match when presented with partial input",
        "Solves optimization problems like pattern recognition and Traveling Salesman Problem",
      ],
    },
  ],
};

const notes: NoteType = {
  topic: "Artificial Intelligence and Neural Networks",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export default notes;
