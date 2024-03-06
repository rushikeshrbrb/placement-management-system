// import React, { useState, useEffect } from 'react';
// import { getAllQuestions } from '../Services/services';

// const QuizApti = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
//   const [score, setScore] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await getAllQuestions();
//       setQuestions(response);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//       setError('Error fetching questions. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleAnswer = (selectedOptionIndex) => {
//     const newAnswers = [...userAnswers];
//     newAnswers[currentQuestionIndex] = selectedOptionIndex;
//     setUserAnswers(newAnswers);
//   };

//   const calculateScore = () => {
//     let score = 0;
//     userAnswers.forEach((userAnswer, index) => {
//       if (userAnswer === questions[index].correctAnswerIndex) {
//         score++;
//       }
//     });
//     setScore(score);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (score !== null) {
//     return <h1 className='text-center' style={{ fontSize: '48px', justifyContent: 'center', display: 'flex' , alignItems: 'center' , marginTop: '100px' }}>Your score: {score}/{questions.length}</h1>;
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className='text-center w-50 m-auto mt-5'>
//       <h2>Question {currentQuestionIndex + 1}</h2>
//       <h3>{currentQuestion.questionText}</h3>
//       <form>
//         <ul type="none" style={{ fontSize: '28px', display: 'flex', gap: '80px', justifyContent: 'center',  marginTop: '40px' }} >
//           {currentQuestion.options.map((option, index) => (
//             <li key={index}>
//               <label>
//                 <input
//                   type="radio"
//                   name="answer"
//                   value={index}
//                   checked={userAnswers[currentQuestionIndex] === index}
//                   onChange={() => handleAnswer(index) }
//                 />
//                 {option}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </form>
//       <div style={{ display: 'flex', gap: '30px', marginTop: '30px' , justifyContent: 'center' }}>
//         <button className='btn btn-dark btn-lg' onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
//           Previous
//         </button>
//         <button className='btn btn-dark pr-5 btn-lg' onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
//           Next
//         </button>
//         <button className='btn btn-success btn-lg' onClick={calculateScore}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default QuizApti;
import React, { useState, useEffect } from 'react';
import { getAllQuestions } from '../Services/services';
import { Card, Alert, Container, Button } from 'react-bootstrap';

const QuizApti = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError('Error fetching questions. Please try again later.');
      setLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleAnswer = (selectedOptionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOptionIndex;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].correctAnswerIndex) {
        score++;
      }
    });
    setScore(score);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (score !== null) {
    return <h1 className='text-center' style={{ fontSize: '48px', justifyContent: 'center', display: 'flex', alignItems: 'center', marginTop: '100px' }}>Your score: {score}/{questions.length}</h1>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (

    <Container>
      <center>
        <h3>Aptitude Test</h3><hr />
      </center>
      <div>
        <Card className="text-left">
          <Card.Header className="bg-info text-white">
            <b>
              <h2>Question {currentQuestionIndex + 1}</h2></b>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>{currentQuestion.questionText}</h3>
            </Card.Title>
            <Card.Text className='align-left'>
              <form>
                <ul type="none" style={{ fontSize: '28px', display: 'flex', gap: '80px', justifyContent: 'center', marginTop: '40px' }} >
                  {currentQuestion.options.map((option, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name="answer"
                          value={index}
                          checked={userAnswers[currentQuestionIndex] === index}
                          onChange={() => handleAnswer(index)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </form>

            </Card.Text>

          </Card.Body>
          <Card.Footer className="text-dark text-white">

            <div style={{ justifyContent: 'center' }}>
              <Button className='btn btn-info' style={{ marginRight: '10px' }} onClick={handlePrevious} disabled={currentQuestionIndex === 0}><b>← Previous Question</b></Button>

              <Button className='btn btn-warning'  onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} ><b>Next Question  →</b></Button>

              <Button className='btn btn-primary' style={{ marginLeft: '700px' }} onClick={calculateScore} ><b>Submit</b></Button>

            </div>
          </Card.Footer>
        </Card>
        <br />
      </div>

    </Container>

  );
};

export default QuizApti;