import {ChapterType, NoteType} from "./01";

const chapterOne: ChapterType = {
  topic: "Introduction to Real-Time System and Real-Time Scheduling (ASoE0901)",
  contents: [
    {
      topic: "Definition and Typical Real-Time Applications",
      description: [
        "A Real-Time System is a computing system that must respond to inputs within a fixed time constraint or deadline.",
        "Examples of real-time applications include digital control systems, high-level controls for machinery, and signal processing.",
      ],
    },
    {
      topic: "Release Times, Deadlines, and Timing Constraints",
      description: [
        "Release time refers to when a task becomes available for processing, and deadlines refer to the maximum time a task can take.",
        "Timing constraints ensure the system can perform actions within the required time limits.",
      ],
    },
    {
      topic: "Hard and Soft Real-Time Systems",
      description: [
        "Hard Real-Time Systems: Systems where missing a deadline results in system failure.",
        "Soft Real-Time Systems: Systems where deadlines may be missed occasionally without catastrophic consequences.",
      ],
    },
    {
      topic: "Reference Models for Real-Time Systems",
      description: [
        "Processors and resources need to be effectively managed to meet the constraints imposed by real-time systems.",
        "Temporal parameters of a real-time workload include the duration of tasks, the execution frequency, and dependencies between tasks.",
      ],
    },
    {
      topic: "Periodic Task Model and Precedence Constraints",
      description: [
        "The periodic task model considers tasks with regular intervals. Precedence constraints define the dependencies between tasks, ensuring that some tasks must be completed before others can begin.",
      ],
    },
    {
      topic: "Common Approaches to Real-Time Scheduling",
      description: [
        "Clock-Driven Approach: Tasks are scheduled at fixed intervals.",
        "Weighted Round-Robin Approach: Tasks are allocated to the processor based on priorities and assigned time slices.",
        "Priority-Driven Approach: Tasks are scheduled according to their priorities, typically using algorithms like Rate-Monotonic Scheduling (RMS).",
      ],
    },
    {
      topic: "Dynamic versus Static Systems",
      description: [
        "Dynamic Systems adjust to real-time workloads and resource availability, while static systems have fixed schedules.",
      ],
    },
    {
      topic: "Optimality of EDF and LST Algorithms",
      description: [
        "Effective-Deadline-First (EDF) and Least-Slack-Time-First (LST) algorithms aim to optimize real-time scheduling based on task deadlines and slack times.",
        "EDF and LST are optimal in specific contexts, ensuring tasks are completed before their deadlines when possible.",
      ],
    },
    {
      topic: "Rate Monotonic Algorithm",
      description: [
        "The Rate-Monotonic Algorithm (RMA) is a static priority algorithm where tasks with the shortest period (highest frequency) are assigned the highest priority.",
      ],
    },
    {
      topic: "Offline vs. Online Scheduling",
      description: [
        "Offline scheduling occurs before runtime, while online scheduling makes decisions based on current system conditions.",
      ],
    },
    {
      topic: "Scheduling Aperiodic and Sporadic Jobs in Priority Driven and Clock Driven Systems",
      description: [
        "Aperiodic jobs are those that do not have fixed arrival times, while sporadic jobs have loosely defined arrival times.",
        "These jobs are managed differently from periodic tasks in priority-driven or clock-driven systems to ensure deadlines are met.",
      ],
    },
  ],
};

const chapterTwo: ChapterType = {
  topic: "Resource Sharing and Real-Time Communication (ASoE0902)",
  contents: [
    {
      topic: "Effect of Resource Contention and Resource Access Control (RAC)",
      description: [
        "Resource contention occurs when multiple tasks vie for limited resources, potentially violating timing constraints.",
        "Resource Access Control (RAC) mechanisms are required to ensure safe and fair access to shared resources.",
      ],
    },
    {
      topic: "Non-Preemptive Critical Sections",
      description: [
        "Non-preemptive critical sections prevent the task from being interrupted while performing critical operations, ensuring the integrity of shared resources.",
      ],
    },
    {
      topic: "Priority-Inheritance and Priority-Ceiling Protocols",
      description: [
        "Priority-Inheritance: Temporarily raises the priority of tasks holding critical resources to prevent priority inversion.",
        "Priority-Ceiling Protocols: Every task has a ceiling priority that helps manage priority inversion and resolve resource contention.",
      ],
    },
    {
      topic: "Stack-Based Priority-Ceiling Protocol",
      description: [
        "In stack-based priority-ceiling protocols, tasks maintain a priority stack that helps manage multiple task resources while avoiding deadlocks.",
      ],
    },
    {
      topic: "Preemption Ceiling Protocol",
      description: [
        "The preemption ceiling protocol helps in managing task preemption and ensuring resources are accessed in priority order.",
      ],
    },
    {
      topic: "Access Control in Multiple-Module Resources",
      description: [
        "Access control in distributed systems often involves module-level synchronization to protect multiple tasks from interfering with one another when accessing shared resources.",
      ],
    },
    {
      topic: "Basic Concepts in Real-Time Communication",
      description: [
        "Real-time communication in systems is often concerned with minimizing delays and ensuring timely message delivery.",
        "Soft and Hard RT communication systems support communication with varying reliability and timeliness guarantees.",
      ],
    },
    {
      topic: "Priority-Based Service and Weighted Round-Robin for Switched Networks",
      description: [
        "In priority-based service systems, higher priority tasks are given precedence in access to network resources.",
        "Weighted round-robin service disciplines allocate time slices based on assigned weights for fair bandwidth usage among tasks.",
      ],
    },
    {
      topic: "Medium Access Control Protocols for Broadcast Networks",
      description: [
        "Medium Access Control (MAC) protocols control how devices access the shared network medium to reduce collisions and ensure timely transmission of data.",
      ],
    },
    {
      topic: "Internet and Resource Reservation Protocols",
      description: [
        "Internet communication protocols like RSVP (Resource Reservation Protocol) allow real-time resource reservations, ensuring bandwidth for delay-sensitive traffic like audio or video.",
      ],
    },
  ],
};

const chapterThree: ChapterType = {
  topic: "Introduction to Distributed Systems and Cloud Computing (ASoE0903)",
  contents: [
    {
      topic: "Characteristics, Advantages, and Disadvantages of Distributed Systems",
      description: [
        "Distributed systems involve multiple interconnected computers working together on a network to perform tasks efficiently.",
        "Advantages include fault tolerance, resource sharing, and scalability, while challenges include complexity and network reliability.",
      ],
    },
    {
      topic: "Models of Distributed Systems",
      description: [
        "Different distributed system models include Client-Server, Peer-to-Peer, and Hybrid systems, each with its own advantages and communication strategies.",
      ],
    },
    {
      topic: "Resource Sharing and the Web Challenges",
      description: [
        "Resource sharing in distributed systems involves sharing resources across different nodes, overcoming issues like consistency, latency, and security.",
        "Web challenges include distributed coordination, data replication, and dealing with network failures.",
      ],
    },
    {
      topic: "Different Types of Distributed Systems: Grid, Cluster, Cloud",
      description: [
        "Grid Computing: A distributed computing model for resource-sharing among independent systems, typically for high-performance applications.",
        "Cluster Computing: Involves using multiple nodes connected together, working as a single system for better performance and load balancing.",
        "Cloud Computing: Delivers resources over the internet, providing scalable and flexible services, including IaaS, PaaS, and SaaS.",
      ],
    },
    {
      topic: "Introduction to Cloud Computing",
      description: [
        "Cloud Computing refers to delivering services (computing, storage, networking, etc.) over the internet.",
        "Rooted in utility computing, cloud computing offers scalability, cost-efficiency, and accessibility through on-demand resource provisioning.",
      ],
    },
    {
      topic: "Desired Features, Challenges, Risks, Benefits, and Disadvantages of Cloud Computing",
      description: [
        "Desired features include flexibility, scalability, and resource sharing.",
        "Challenges include security concerns, privacy issues, and compliance with regulations.",
        "Benefits: Cost reduction, on-demand access to resources.",
        "Disadvantages: Dependency on third-party providers and the risks involved in downtime and service outages.",
      ],
    },
  ],
};

const chapterFour: ChapterType = {
  topic: "Distributed File System and CORBA (ASoE0904)",
  contents: [
    {
      topic: "Communication Between Distributed Objects",
      description: [
        "Distributed objects communicate using Remote Procedure Calls (RPCs), allowing tasks on separate systems to invoke each other's functions.",
      ],
    },
    {
      topic: "DFS (Distributed File System), File Service Architecture",
      description: [
        "A distributed file system provides access to files located on a remote server, appearing to the user as though the files are stored locally.",
        "File service architecture manages file access across multiple nodes in a distributed system.",
      ],
    },
    {
      topic: "Sun Network File System and DNS",
      description: [
        "The Sun Network File System (NFS) enables file sharing across networks, allowing remote systems to mount file systems as if they were local.",
        "DNS (Domain Name System) resolves domain names to IP addresses, allowing efficient communication between distributed systems.",
      ],
    },
    {
      topic: "Middleware and CORBA Approach",
      description: [
        "Middleware enables communication between distributed applications by abstracting network interactions.",
        "CORBA (Common Object Request Broker Architecture) provides a framework for distributed systems to communicate, even when implemented on different platforms.",
      ],
    },
  ],
};

const chapterFive: ChapterType = {
  topic: "Virtualization, Cloud Architecture, Services, and Security (ASoE0905)",
  contents: [
    {
      topic: "Introduction to Virtualization Technology",
      description: [
        "Virtualization allows running multiple virtual machines on a single physical machine, sharing system resources efficiently.",
        "Types of virtualization include Server Virtualization, Desktop Virtualization, and Application Virtualization.",
      ],
    },
    {
      topic: "Cloud Computing Reference Architecture, IaaS, PaaS, SaaS",
      description: [
        "Cloud architecture provides a reference model consisting of IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service).",
      ],
    },
    {
      topic: "Cloud Security: Data, Application, and VM Security",
      description: [
        "Cloud security involves protecting data, applications, and the virtual machines running in a cloud environment.",
        "Concerns include data privacy, infrastructure security, and safe deployment of virtual environments.",
      ],
    },
    {
      topic: "Key Privacy Issues in the Cloud",
      description: [
        "Key privacy issues involve securing sensitive user data, managing encryption keys, and ensuring legal and regulatory compliance when working with cloud services.",
      ],
    },
  ],
};

const chapterSix: ChapterType = {
  topic: "Agreement in Distributed Systems (ASoE0906)",
  contents: [
    {
      topic: "Clock Synchronization Algorithms",
      description: [
        "Clock synchronization is necessary in distributed systems for maintaining consistent timestamps across machines.",
        "Logical clock synchronization and physical clock synchronization algorithms are designed to ensure accurate time coordination between systems.",
      ],
    },
    {
      topic: "Distributed Mutual Exclusion Algorithms",
      description: [
        "Distributed mutual exclusion is the mechanism used to ensure that multiple processes do not simultaneously access shared resources, preventing conflicts and inconsistencies.",
      ],
    },
    {
      topic: "Fault-Tolerant Systems and Replication",
      description: [
        "Fault-tolerant systems are designed to continue operating correctly even if some components fail.",
        "Replication involves creating copies of resources to ensure availability even in the event of node failure.",
      ],
    },
  ],
};

const notes: NoteType = {
  topic: "Real-Time Systems, Distributed Systems, Cloud Computing",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export default notes;
