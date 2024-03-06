import React from 'react';
import { Card, Alert, Col, Row, Container } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

export default function InterviewPreparation() {

  const database = [
    "What is a database?",
    "Differentiate between SQL and NoSQL databases.",
    "Explain the ACID properties in the context of database transactions.",
    "What is normalization and denormalization in databases? Why are they important?",
    "Describe the various types of database indexes and their use cases.",
    "What is a stored procedure? How does it differ from a function?",
    "Explain the concept of database transactions and their importance.",
    "What is the difference between a primary key, a foreign key, and a unique key?",
    "Discuss the advantages and disadvantages of relational databases.",
    "What is a deadlock in a database, and how can it be prevented?",
    "Describe the concept of data integrity in databases.",
    "Explain the differences between OLTP and OLAP databases.",
    "What is database replication, and why is it used?",
    "Discuss the role of triggers in a database system.",
    "What are the different types of joins in SQL?",
    "Explain the concept of database sharding and its benefits.",
    "How do you optimize database performance?",
    "What is the CAP theorem, and how does it relate to database systems?",
    "Describe the role of transactions in maintaining data consistency.",
    "What are some common security risks in database management systems, and how can they be mitigated?"
  ];


  const corejava = [
    "What is Java? Describe its key features.",
    "Differentiate between JDK, JRE, and JVM.",
    "What are the main principles of object-oriented programming (OOP)? How does Java support them?",
    "Explain the difference between method overloading and method overriding.",
    "What is the purpose of the `static` keyword in Java? How is it used?",
    "Describe the significance of the `final` keyword in Java.",
    "What is the difference between `==` and `.equals()` method in Java? When would you use one over the other?",
    "Discuss the concept of inheritance in Java. How does it promote code reuse?",
    "What are abstract classes and interfaces in Java? How are they different?",
    "Explain the purpose of the `try-catch-finally` block in exception handling.",
    "Discuss the differences between checked and unchecked exceptions in Java.",
    "What is the difference between `ArrayList` and `LinkedList` in Java? When would you use one over the other?",
    "Explain the concept of multithreading in Java. How can you create and manage threads?",
    "What is the `synchronized` keyword in Java? How does it ensure thread safety?",
    "Describe the purpose of the `volatile` keyword in Java.",
    "What is the difference between `HashMap` and `HashTable` in Java? When would you use one over the other?",
    "Discuss the purpose and usage of Java Generics.",
    "Explain the concept of Java Reflection. How is it useful?",
    "What is the `this` keyword in Java? How is it used?",
    "Describe the difference between `public`, `private`, `protected`, and package-private access modifiers in Java."
  ];

  const webjava = [
    "What is Servlet? How does it differ from JSP?",
    "Explain the MVC architecture and how it is implemented in Java web applications.",
    "What are JSP tags and expressions? How do they differ from scriptlets?",
    "Discuss the differences between forward and redirect in servlets.",
    "What is a session in servlets? How is session tracking handled in Java web applications?",
    "Explain the purpose of filters in Java Servlets.",
    "Describe the life cycle of a servlet.",
    "What is the purpose of the web.xml file in a Java web application?",
    "Discuss the role of servlet containers like Apache Tomcat in Java web development.",
    "What is JDBC? How is it used for database connectivity in Java web applications?",
    "Explain the concept of connection pooling in Java web development.",
    "Describe the role of JSTL (JavaServer Pages Standard Tag Library) in JSP.",
    "What is the difference between HTTP GET and POST methods? When would you use each?",
    "Discuss the importance of servlet threading and synchronization.",
    "Explain the benefits of using Java EE (Enterprise Edition) in web development.",
    "Describe the purpose of servlet listeners and event handling.",
    "What are the advantages of using JavaServer Faces (JSF) in web applications?",
    "Discuss the use of annotations in Java web development.",
    "What is the role of servlet context and servlet config objects in Java web applications?",
    "Explain the difference between application server and web server in the context of Java web development."
  ];

  const net = [
    "What is .NET Core, and how does it differ from the traditional .NET Framework?",
    "Explain the concept of cross-platform development in .NET Core.",
    "What are the key features of .NET Core?",
    "Describe the role of ASP.NET Core in web development.",
    "How does dependency injection work in .NET Core, and why is it important?",
    "Discuss the advantages of using Entity Framework Core for database access.",
    "What is middleware in the context of ASP.NET Core?",
    "Explain the differences between .NET Core and .NET Standard.",
    "How does .NET Core handle performance compared to the traditional .NET Framework?",
    "What is Kestrel, and how is it related to ASP.NET Core?",
    "Describe the hosting models available in ASP.NET Core.",
    "How does .NET Core support microservices architecture?",
    "Discuss the role of NuGet packages in .NET Core development.",
    "What are the benefits of using Docker with .NET Core applications?",
    "Explain the concept of ASP.NET Core MVC and its advantages.",
    "How does .NET Core handle configuration management?",
    "Discuss the security features provided by .NET Core.",
    "What is the purpose of the dotnet CLI (Command Line Interface)?",
    "Explain the differences between .NET Core and .NET Framework CLR (Common Language Runtime).",
    "What are the deployment options available for .NET Core applications?"
  ];

  const javascript = [
    "What is JavaScript, and what are its key features?",
    "Explain the differences between `null` and `undefined` in JavaScript.",
    "Discuss the differences between `var`, `let`, and `const` for declaring variables in JavaScript.",
    "What are closures in JavaScript, and how are they used?",
    "Explain the concept of prototypal inheritance in JavaScript.",
    "Describe the event bubbling and event capturing mechanisms in JavaScript.",
    "What are arrow functions, and how do they differ from regular functions?",
    "Discuss the differences between synchronous and asynchronous programming in JavaScript.",
    "What is the Event Loop in JavaScript, and how does it work?",
    "Explain the purpose of the `this` keyword in JavaScript.",
    "Describe how you would handle errors and exceptions in JavaScript.",
    "Discuss the benefits of using `map()`, `filter()`, and `reduce()` methods in JavaScript arrays.",
    "What are promises in JavaScript, and how do they help with asynchronous operations?",
    "Explain the concept of hoisting in JavaScript.",
    "What is the difference between `==` and `===` operators in JavaScript?",
    "Describe how you can manipulate the DOM (Document Object Model) using JavaScript.",
    "Discuss the concept of lexical scoping in JavaScript.",
    "Explain the differences between `setTimeout()` and `setInterval()` functions in JavaScript.",
    "What are the different ways to define an object in JavaScript?",
    "Describe the concept of currying and partial application in JavaScript functions."
  ];

  const react = [
    "What is React, and what are its key features?",
    "Explain the difference between functional components and class components in React.",
    "Describe the Virtual DOM and its significance in React.",
    "What are props in React, and how are they used to pass data between components?",
    "Discuss the useState and useEffect hooks in React and their purposes.",
    "Explain the concept of JSX in React and how it differs from regular JavaScript.",
    "What is the purpose of keys in React lists, and why are they important?",
    "Describe the differences between controlled and uncontrolled components in React forms.",
    "Discuss the role of setState in React class components and how it manages component state.",
    "What is the difference between composition and inheritance in React component design?",
    "Explain the concept of lifting state up in React and when it's appropriate to use.",
    "Discuss the useMemo and useCallback hooks in React and when they should be used.",
    "What is the purpose of React Router, and how does it handle routing in React applications?",
    "Describe the difference between React Context and props drilling for passing data between components.",
    "Explain the concept of higher-order components (HOCs) in React and how they are used.",
    "Discuss the useEffect hook in React and its equivalent in class components (componentDidMount, componentDidUpdate, componentWillUnmount).",
    "What are React Fragments, and when would you use them?",
    "Explain the purpose of the useContext hook in React and how it's used for global state management.",
    "Discuss the differences between React.createClass and ES6 classes for creating React components.",
    "Describe the importance of code splitting in React applications and how it's achieved."
  ];


  const devops = [
    "What is DevOps, and what are its key principles?",
    "Explain the difference between continuous integration, continuous delivery, and continuous deployment.",
    "Describe the role of version control systems (e.g., Git) in DevOps practices.",
    "What is Infrastructure as Code (IaC), and how does it benefit DevOps workflows?",
    "Discuss the importance of automation in DevOps processes.",
    "Explain the concept of microservices architecture and its relation to DevOps.",
    "How do containers (e.g., Docker) contribute to DevOps practices?",
    "Describe the significance of monitoring and logging in DevOps environments.",
    "Discuss the role of configuration management tools (e.g., Ansible, Chef, Puppet) in DevOps.",
    "What are some key metrics and KPIs (Key Performance Indicators) used in DevOps for measuring success?"
  ];

  const cplusplus = [
    "What is object-oriented programming (OOP), and how does C++ support it?",
    "Discuss the differences between C and C++.",
    "What are the basic concepts of C++ programming language?",
    "Explain the difference between stack and heap memory in C++.",
    "What are constructors and destructors in C++? How are they used?",
    "Discuss the differences between pass by value and pass by reference in C++.",
    "What is inheritance in C++? How does it promote code reuse?",
    "Describe the difference between function overloading and function overriding in C++.",
    "Explain the concept of virtual functions in C++.",
    "Discuss the purpose of namespaces in C++ and how they are used."
  ];

  const codingque = [
    "Find the factorial of a number.",
    "Check if a number is prime.",
    "Implement a binary search algorithm.",
    "Find the maximum element in an array.",
    "Implement a linked list.",
    "Reverse a linked list.",
    "Check if two strings are anagrams of each other.",
    "Find the Fibonacci sequence up to a certain number.",
    "Implement a stack using an array.",
    "Implement a queue using two stacks.",
    "Check if a binary tree is a binary search tree.",
    "Find the shortest path in a graph using Dijkstra's algorithm.",
    "Implement depth-first search (DFS) and breadth-first search (BFS) for a graph.",
    "Find the intersection of two arrays.",
    "Implement a sorting algorithm (e.g., bubble sort, selection sort, merge sort, quick sort).",
    "Check if a linked list has a cycle.",
    "Reverse a sentence word by word.",
    "Implement a hash table (hash map).",
    "Check if a number is a power of two.",
    "Find the longest common substring between two strings.",
    "Implement a binary tree traversal (inorder, preorder, postorder).",
    "Find the missing number in an array of integers.",
    "Implement a priority queue.",
    "Determine if a linked list is a palindrome.",
    "Implement a binary search tree (BST) and perform insertion, deletion, and search operations.",
    "Find the intersection point of two linked lists.",
    "Find the kth largest element in an unsorted array.",
    "Reverse a stack using recursion."
  ];

  const arrayQuestions = [
    "Find the maximum element in an array.",
    "Find the second maximum element in an array.",
    "Find the minimum element in an array.",
    "Find the sum of all elements in an array.",
    "Find the average of all elements in an array.",
    "Rotate an array to the right by k steps.",
    "Merge two sorted arrays into a single sorted array.",
    "Remove duplicates from a sorted array.",
    "Find the intersection of two arrays.",
    "Find the union of two arrays.",
    "Implement a stack using an array.",
    "Implement a queue using an array.",
    "Implement dynamic array (ArrayList) operations like insert, delete, and search.",
    "Implement a circular buffer using an array.",
    "Find the maximum subarray sum (Kadane's algorithm).",
    "Rearrange positive and negative values in an array such that positive and negative elements are alternate.",
    "Given an array of integers, move all zeroes to the end of the array without changing the order of non-zero elements.",
    "Find the kth largest (or smallest) element in an unsorted array.",
    "Implement a function to rotate an NxN matrix by 90 degrees.",
    "Given an array of integers, find the contiguous subarray with the largest sum (Kadane's algorithm).",
    "Implement a stack using linked list or array.",
    "Implement a queue using linked list or array.",
    "Implement a binary search tree (BST) and perform insertion, deletion, and search operations.",
    "Implement depth-first search (DFS) and breadth-first search (BFS) for a graph.",
    "Find the shortest path in a graph using Dijkstra's algorithm.",
    "Check if a binary tree is a binary search tree (BST).",
  ];


  const stringQuestions = [
    "Reverse a string.",
    "Check if a string is a palindrome.",
    "Find the length of the longest substring without repeating characters.",
    "Count the number of vowels and consonants in a string.",
    "Determine if two strings are anagrams of each other.",
    "Check if a string contains only digits.",
    "Convert a string to an integer (atoi).",
    "Check if a string is a valid palindrome considering only alphanumeric characters and ignoring cases.",
    "Remove all occurrences of a specified character from a string.",
    "Find the first non-repeating character in a string.",
    "Reverse words in a sentence.",
    "Check if a string is a rotation of another string (e.g., 'waterbottle' is a rotation of 'erbottlewat').",
    "Determine if a string has all unique characters (without using additional data structures).",
    "Count the number of occurrences of a substring in a string.",
    "Implement strstr() - find the index of the first occurrence of a substring in a string.",
    "Convert a string to title case (capitalize the first letter of each word).",
    "Remove duplicate characters from a string without using additional data structures.",
    "Given two strings, find the longest common prefix.",
    "Group anagrams together from a list of strings.",
    "Check if a string can be formed by rotating another string.",
    "Implement a hash table (hash map) with collision resolution techniques like chaining or open addressing.",
    "Implement a priority queue using a heap data structure.",
 
  ];

  const hrQuestions = [
    "Can you tell me about yourself?",
    "What are your strengths and weaknesses?",
    "Why do you want to work for this company?",
    "What do you know about our company?",
    "Where do you see yourself in five years?",
    "Why should we hire you?",
    "Can you describe a challenging situation you faced at work and how you handled it?",
    "What motivates you?",
    "How do you handle stress and pressure?",
    "Describe a time when you worked successfully as part of a team.",
    "What salary are you expecting?",
    "Do you have any questions for us?",
    "How do you handle criticism?",
    "Can you discuss a time when you had to meet a tight deadline?",
    "How do you prioritize your work?",
    "Describe a time when you had to resolve a conflict with a coworker.",
    "What do you consider your greatest accomplishment?",
    "How do you stay organized?",
    "Describe a time when you had to adapt to change.",
    "What are your long-term career goals?"
  ];


  return (
    <Container fluid>
      <center>

        <h3>Technical Interview Questions</h3><hr />
      </center>
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>Database Technologies</Card.Header>
            <Card.Body>
              <div>
                <h2>Database Technologies Interview Questions</h2>
                <ul>
                  {database.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col> <Card>
          <Card.Header as="h5" className='bg-info'>Core Java</Card.Header>
          <Card.Body>
            <div>
              <h2>Core Java Interview Questions</h2>
              <ul>
                {corejava.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card></Col>
      </Row>
      <br />

      <Row>
        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>Web Java</Card.Header>
            <Card.Body>
              <div>
                <h2>Java Web Development Interview Questions</h2>
                <ul>
                  {webjava.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col> <Card>
          <Card.Header as="h5" className='bg-info'>.NET Core</Card.Header>
          <Card.Body>
            <div>
              <h2>.NET Core Interview Questions</h2>
              <ul>
                {net.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card></Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>Javascript</Card.Header>
            <Card.Body>
              <div>
                <h2>JavaScript Interview Questions</h2>
                <ul>
                  {javascript.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col> <Card>
          <Card.Header as="h5" className='bg-info'>React</Card.Header>
          <Card.Body>
            <div>
              <h2>React Interview Questions</h2>
              <ul>
                {react.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card></Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>DevOps</Card.Header>
            <Card.Body>
              <div>
                <h2>DevOps Interview Questions</h2>
                <ul>
                  {devops.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col> <Card>
          <Card.Header as="h5" className='bg-info'> C++ </Card.Header>
          <Card.Body>
            <div>
              <h2>C++ Interview Questions</h2>
              <ul>
                {cplusplus.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card></Col>
      </Row>

      <hr />
      <center>

<h3>Coding Round Prcatice Questions</h3><hr />
</center>
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>Coding Questions 1</Card.Header>
            <Card.Body>
              <div>
                <h2>Coding Questions</h2>
                <ul>
                  {codingque.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>Coding Questions 2</Card.Header>
            <Card.Body>
            <div>
      <h2>Array Questions</h2>
      <ul>
        {arrayQuestions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
            </Card.Body>
          </Card>
        </Col>



        <Col>
          <Card>
            <Card.Header as="h5" className='bg-info'>Coding Questions 3</Card.Header>
            <Card.Body>
            <div>
      <h2>String Questions</h2>
      <ul>
        {stringQuestions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
<hr />
<center>

<h3>HR Round Question</h3><hr />
</center>
<Row >
  <Col></Col>
      <Col xs={6}>
          <Card>
            <Card.Header as="h5" className='bg-info'>HR Round</Card.Header>
            <Card.Body>
            <div>
      <h2>HR Interview Questions</h2>
      <ul>
        {hrQuestions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>

      <br />
      <br />
      <br />
    </Container>

  );
}
