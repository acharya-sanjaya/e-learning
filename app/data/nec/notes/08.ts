import {ChapterType, NoteType} from "./01";

const chapterOne: ChapterType = {
  topic: "Java Basics and Multithreading (ASoE0801)",
  contents: [
    {
      topic: "Virtual Machines, JVM, JRE, JDK",
      description: [
        "Java Virtual Machine (JVM): The engine that provides runtime environment for executing Java bytecode",
        "Java Runtime Environment (JRE): Provides libraries and JVM for running Java applications",
        "Java Development Kit (JDK): Contains JRE and additional tools (like compilers) for developing Java applications",
      ],
    },
    {
      topic: "Java OOP",
      description: [
        "Java is an Object-Oriented Programming (OOP) language that uses concepts such as inheritance, encapsulation, polymorphism, and abstraction",
        "Classes and objects are the basic building blocks in Java OOP",
      ],
    },
    {
      topic: "Introduction to Multithreading",
      description: [
        "Multithreading allows Java programs to execute multiple tasks concurrently, improving efficiency in applications requiring concurrent operations (e.g., user interfaces or servers)",
        "Each thread is a lightweight process with its own program counter and stack",
      ],
    },
    {
      topic: "Thread Class and Runnable Interface",
      description: [
        "Thread class: Java’s main class for working with threads, providing methods like `start()`, `run()`, and `sleep()`",
        "Runnable Interface: A functional interface representing a task that can be executed by a thread, allows implementation in a more flexible manner",
      ],
    },
    {
      topic: "Multiple Threads",
      description: [
        "Multiple threads allow simultaneous execution of different parts of a program, especially useful in tasks like file processing or network connections",
      ],
    },
    {
      topic: "Interrupting Threads",
      description: [
        "Threads can be interrupted using methods like `interrupt()` to stop their execution or to signal when a task should terminate or be paused",
      ],
    },
    {
      topic: "Thread Priorities",
      description: [
        "Java threads have priorities that determine the order in which they are scheduled to execute (from `Thread.MIN_PRIORITY` to `Thread.MAX_PRIORITY`)",
        "Thread priorities can influence performance in multithreaded applications",
      ],
    },
    {
      topic: "Synchronization",
      description: [
        "Synchronization controls access to shared resources in concurrent programming, ensuring that only one thread can access the resource at a time",
        "Common synchronization methods include `synchronized` blocks or methods in Java",
      ],
    },
    {
      topic: "Deadlock",
      description: [
        "Deadlock occurs when two or more threads are blocked forever, each waiting on the other to release a resource, causing the application to freeze",
        "Avoiding deadlock requires careful design, including lock ordering or using timeouts",
      ],
    },
    {
      topic: "Thread Communication",
      description: [
        "Java threads can communicate using methods like `wait()`, `notify()`, and `notifyAll()` to control their execution flow",
      ],
    },
    {
      topic: "Suspend, Resume, and Stop Threads",
      description: [
        "Methods like `suspend()`, `resume()`, and `stop()` are deprecated due to safety issues and are not recommended",
        "Threads are controlled more effectively through thread states and synchronization techniques",
      ],
    },
    {
      topic: "Java Collection Interface",
      description: [
        "The Collection Interface is the root interface of the Java Collections Framework and provides a standard interface for working with groups of objects",
        "Key implementations include `List`, `Set`, `Queue`, and `Map` interfaces",
      ],
    },
    {
      topic: "String Handling",
      description: [
        "Strings in Java are objects that represent sequences of characters",
        "Methods like `length()`, `charAt()`, `substring()`, and `equals()` are commonly used for string manipulation",
      ],
    },
    {
      topic: "Calendar and SimpleDateFormat Class",
      description: [
        "The `Calendar` class in Java provides methods for manipulating date and time",
        "The `SimpleDateFormat` class enables the formatting and parsing of dates and times in various patterns",
      ],
    },
    {
      topic: "Formatting Strings, Numbers, Date, and Time",
      description: [
        "Java provides the `String.format()` method for formatting strings, `NumberFormat` for number formatting, and `DateFormat` for handling dates",
      ],
    },
    {
      topic: "Random Class",
      description: [
        "The `Random` class is used to generate pseudo-random numbers in Java",
        "Useful for tasks like simulations, games, or random selection",
      ],
    },
  ],
};

const chapterTwo: ChapterType = {
  topic: "Java Swing, AWT, Event Handling, and JDBC (ASoE0802)",
  contents: [
    {
      topic: "AWT Classes and Control Fundamentals",
      description: [
        "AWT (Abstract Window Toolkit) provides a set of classes for building graphical user interfaces (GUIs)",
        "AWT control fundamentals include working with buttons, text fields, labels, and other UI elements",
      ],
    },
    {
      topic: "Adding and Removing Controls",
      description: [
        "In AWT, controls are added to containers (like `Panel`, `Frame`) using methods like `add()`",
        "Controls can be dynamically removed using `remove()` method",
      ],
    },
    {
      topic: "Responding to Controls",
      description: [
        "Event listeners are used to respond to user interactions such as clicks or key presses",
        "Event listeners can be attached to components using methods like `addActionListener()`",
      ],
    },
    {
      topic: "Layout Managers",
      description: [
        "Layout Managers in AWT help to organize components within containers",
        "Common layout managers include `FlowLayout`, `GridLayout`, `BorderLayout`",
      ],
    },
    {
      topic: "Event Handling Mechanisms",
      description: [
        "Event Handling in Java involves Event Classes, Event Listener Interfaces, and Adapter Classes",
        "The two key methods for event handling are `public void actionPerformed(ActionEvent e)` for handling action events and other listener interfaces like `MouseListener`, `KeyListener` for mouse and keyboard events",
      ],
    },
    {
      topic: "Origins of Swing and its Connection with AWT",
      description: [
        "Swing was developed as a GUI toolkit to provide greater flexibility and features than AWT",
        "Swing is built on top of AWT but offers more powerful and customizable components",
      ],
    },
    {
      topic: "Swing Features and MVC Connection",
      description: [
        "Swing components follow the Model-View-Controller (MVC) design pattern for separation of concerns",
        "Features include lightweight components, pluggable look-and-feel, and built-in event handling",
      ],
    },
    {
      topic: "Swing Components and Containers",
      description: [
        "Swing components like `JButton`, `JLabel`, `JTextField`, `JPanel` are used to build the GUI",
        "Swing containers like `JFrame`, `JDialog` provide structural elements for managing the user interface",
      ],
    },
  ],
};

const chapterThree: ChapterType = {
  topic: "J2EE, Servlet Programming, and JSP Programming (ASoE0803)",
  contents: [
    {
      topic: "Core J2EE Technologies",
      description: [
        "J2EE (Java 2 Platform, Enterprise Edition) offers a set of specifications for developing multi-tier enterprise applications",
        "Key components include Servlets, JSP, Enterprise JavaBeans (EJB), JMS, and JDBC",
      ],
    },
    {
      topic: "Enterprise Application Architecture",
      description: [
        "J2EE applications are typically divided into layers: Presentation Layer (Servlets/JSP), Business Logic Layer (EJBs), and Data Access Layer (JDBC)",
      ],
    },
    {
      topic: "J2EE Application Servers",
      description: [
        "J2EE Application Servers like Apache Tomcat and GlassFish provide environments for deploying and running Java enterprise applications",
        "They handle servlet container management, application lifecycle, and connection pooling",
      ],
    },
    {
      topic: "GET and POST Request",
      description: [
        "GET requests are used to retrieve data from a server, while POST requests are used for submitting data to be processed",
        "Understanding the difference is crucial for web development and security",
      ],
    },
    {
      topic: "Servlet Technology",
      description: [
        "Servlets are Java programs that run on a web server and generate dynamic content based on client requests",
        "Servlets handle HTTP requests using methods like `doGet()`, `doPost()`",
      ],
    },
    {
      topic: "Deployment Descriptor and Writing a Servlet",
      description: [
        "The `web.xml` file (deployment descriptor) configures servlets, mapping URLs to servlet classes",
        "Writing a servlet involves extending the `HttpServlet` class and overriding request-handling methods",
      ],
    },
    {
      topic: "Session Management",
      description: [
        "Session Management allows the server to maintain information about a user's interaction with a website across multiple requests",
        "Techniques include cookies, URL rewriting, and `HttpSession`",
      ],
    },
    {
      topic: "JSP Basics and Java Beans",
      description: [
        "JSP (JavaServer Pages) is a technology for building dynamic web pages by embedding Java code into HTML",
        "JavaBeans are reusable Java components used for data manipulation and business logic in JSPs",
      ],
    },
  ],
};

const chapterFour: ChapterType = {
  topic: "Introduction to Web Technologies (ASoE0804)",
  contents: [
    {
      topic: "Client-Server Architecture",
      description: [
        "Client-Server Architecture is a model in which clients (users) request resources from servers (providers) that process requests and deliver results",
      ],
    },
    {
      topic: "Web Site Design and HTML5 Tags",
      description: [
        "HTML5 introduced new elements like `<article>`, `<section>`, and `<nav>` for better semantic web design",
        "Web design should ensure ease of navigation, responsiveness, and accessibility",
      ],
    },
    {
      topic: "CSS3 and Responsive Design",
      description: [
        "CSS3 enables advanced styling features like animations and transitions",
        "Responsive Design ensures that a website adapts its layout to fit different screen sizes (desktop, tablet, mobile)",
      ],
    },
    {
      topic: "XML, DTD, XSTL, XHTML",
      description: [
        "XML (Extensible Markup Language) allows custom data markup, while DTD (Document Type Definition) defines the structure of an XML document",
        "XHTML is the stricter, XML-based version of HTML, while XSLT is used for transforming XML data into different formats",
      ],
    },
    {
      topic: "Cryptography and Security Technologies",
      description: [
        "Cryptography is used to secure data via encryption and decryption techniques",
        "Digital Certificates, SSL, VPN, and authentication mechanisms like Public/Private Key Encryption are essential for online security",
      ],
    },
  ],
};

const chapterFive: ChapterType = {
  topic: "Client-Side and Server-Side Scripting (ASoE0805)",
  contents: [
    {
      topic: "JavaScript Basics",
      description: [
        "JavaScript is a client-side scripting language used to add interactivity to web pages",
        "Key concepts include operators, control structures, DOM manipulation, arrays, and objects",
      ],
    },
    {
      topic: "jQuery",
      description: [
        "jQuery is a fast, small, and feature-rich JavaScript library that simplifies DOM manipulation, event handling, and animations",
        "Provides functions for element selection, handling events, and AJAX requests",
      ],
    },
    {
      topic: "PHP Basics",
      description: [
        "PHP (Hypertext Preprocessor) is a server-side scripting language used for creating dynamic websites and interacting with databases",
        "PHP supports functionality like form handling, user authentication, and CRUD operations",
      ],
    },
    {
      topic: "Session Management and File Handling in PHP",
      description: [
        "PHP supports managing sessions for persistent data across multiple pages",
        "PHP can work with files on the server for reading, writing, and processing data",
      ],
    },
    {
      topic: "Introduction to Content Management Systems (CMS)",
      description: [
        "A Content Management System allows users to create and manage digital content efficiently",
        "Examples include WordPress and Joomla! for managing websites",
      ],
    },
  ],
};

const chapterSix: ChapterType = {
  topic: "JDBC Basics (ASoE0806)",
  contents: [
    {
      topic: "Database Drivers and JDBC API",
      description: [
        "JDBC (Java Database Connectivity) is a Java API that allows connection to databases",
        "Database drivers are used to facilitate this connection between Java applications and relational databases",
      ],
    },
    {
      topic: "Statement, ResultSet, and CRUD Operations",
      description: [
        "JDBC provides various statements like `Statement`, `PreparedStatement`, and `CallableStatement` for executing SQL queries",
        "ResultSet is used for retrieving query results, and CRUD operations handle Create, Read, Update, Delete functionalities",
      ],
    },
  ],
};

const notes: NoteType = {
  topic: "Java Basics, Web Technologies, and Scripting",
  chapters: [chapterOne, chapterTwo, chapterThree, chapterFour, chapterFive, chapterSix],
};

export default notes;
