import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Button, Card, Container } from 'react-bootstrap'; // Import the Card component from react-bootstrap

export default function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // State to store the selected answer
  const apiKey = '0jwpC0lmPTNq0hyaOQ9bv3POXb1fVubpX7SdZbcA';
  const token = '0jwpC0lmPTNq0hyaOQ9bv3POXb1fVubpX7SdZbcA';

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          params: {
            apiKey: apiKey,
            limit: 50,
            // include your token in the request
            token: token,
          },
        });
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []); // Empty dependency array ensures this effect runs only once

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null); // Reset selected answer when moving to the next question
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedAnswer(null); // Reset selected answer when moving to the previous question
  };

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value); // Update selected answer when an option is selected
  };


  // Working optional-->
  // const isCorrectAnswer = () => {
  //   const correctAnswers = questions[currentQuestionIndex].correct_answers;
  //   const selectedAnswerKey = `${selectedAnswer}_correct`;
  //        console.log('Correct Answer:', correctAnswers);
  // console.log('Selected Answer:', selectedAnswerKey);
  //   for (let key in correctAnswers) {
  //     if (key === selectedAnswerKey && correctAnswers[key] === 'true') {
  //       return true; // Found a correct match
  //     }
  //   }
  //   return false; // No correct match found
  // };


  const isCorrectAnswer = () => {
    const correctAnswer = questions[currentQuestionIndex].correct_answers;
    console.log('Correct Answer:', correctAnswer);
    console.log('Selected Answer:', selectedAnswer);
    console.log(correctAnswer[`${selectedAnswer}_correct`]);
    return correctAnswer[`${selectedAnswer}_correct`] === 'true';
  };


  return (

    <Container>
      <center>
        <br />
        <h3>Randomly Generated Technical Question</h3><hr />
      </center>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div>
          <Card className="text-left">
            <Card.Header className="bg-info text-white"><b>#Question :</b> </Card.Header>
            <Card.Body>
              <Card.Title>
                <h3 style={{ fontFamily: 'Arial, sans-serif' }}>
                  {questions[currentQuestionIndex].question}
                </h3>
              </Card.Title>
              <Card.Text className='align-left'>
                <h4>
              <ul>
                  {Object.keys(questions[currentQuestionIndex].answers).map((key, index) => (
                    questions[currentQuestionIndex].answers[key] && (
                      <li key={key}>
                        <input
                          type="radio"
                          id={`option-${key}`}
                          name="options"
                          value={key}
                          onChange={handleAnswerSelect}
                          checked={selectedAnswer === key}
                        />
                        <label htmlFor={`option-${key}`} style={{ fontSize: '18px' }}>{questions[currentQuestionIndex].answers[key]}</label>
                      </li>
                    )
                  ))}
                </ul>
                </h4>

              </Card.Text>

            </Card.Body>
            <Card.Footer className="text-dark text-white">
            
            {currentQuestionIndex > 0 && (
                <Button variant="warning" onClick={handlePreviousQuestion} style={{ marginRight: '10px' }}><b>← Previous Question</b></Button>
              )}
              {currentQuestionIndex < questions.length - 1 && (
                <Button variant="info" onClick={handleNextQuestion}><b>Next Question  →</b></Button>
              )}
            </Card.Footer>
          </Card>
          <br />
          <div>

          <div class="alert alert-dismissible alert-info text-center box-shadow">
  <h4>
            {selectedAnswer && (
                <p>{isCorrectAnswer() ? <h3 className='text-success bg'>Correct!</h3> : <h3 className='text-danger'>In-Correct!</h3>}</p>
              )}
              </h4>
</div>
          
          </div>
        </div>
        
      )}
      {questions.length === 0 && <p>Loading questions...</p>}

    </Container>
  );
}
