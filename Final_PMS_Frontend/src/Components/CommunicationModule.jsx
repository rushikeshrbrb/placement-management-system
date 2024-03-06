import React from 'react';
import { Card, Alert, Col, Row, Container, Table  } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

export default function CommunicationModule() {
  const synonyms = [
    { word: 'Big', synonym: 'Large', pair: 'Big - Large' },
    { word: 'Brave', synonym: 'Courageous', pair: 'Brave - Courageous' },
    { word: 'Happy', synonym: 'Joyful', pair: 'Happy - Joyful' },
    { word: 'Angry', synonym: 'Furious', pair: 'Angry - Furious' },
    { word: 'Smart', synonym: 'Intelligent', pair: 'Smart - Intelligent' },
    { word: 'Fast', synonym: 'Quick', pair: 'Fast - Quick' },
    { word: 'Cold', synonym: 'Chilly', pair: 'Cold - Chilly' },
    { word: 'Beautiful', synonym: 'Gorgeous', pair: 'Beautiful - Gorgeous' },
    { word: 'Sad', synonym: 'Unhappy', pair: 'Sad - Unhappy' },
    { word: 'Difficult', synonym: 'Challenging', pair: 'Difficult - Challenging' },
    { word: 'Kind', synonym: 'Generous', pair: 'Kind - Generous' },
    { word: 'Rich', synonym: 'Wealthy', pair: 'Rich - Wealthy' },
    { word: 'Friendly', synonym: 'Amiable', pair: 'Friendly - Amiable' },
    { word: 'Brave', synonym: 'Fearless', pair: 'Brave - Fearless' },
    { word: 'Excited', synonym: 'Enthusiastic', pair: 'Excited - Enthusiastic' },
    { word: 'Clever', synonym: 'Smart', pair: 'Clever - Smart' },
    { word: 'Funny', synonym: 'Humorous', pair: 'Funny - Humorous' },
    { word: 'Honest', synonym: 'Truthful', pair: 'Honest - Truthful' },
    { word: 'Calm', synonym: 'Serene', pair: 'Calm - Serene' },
    { word: 'Tired', synonym: 'Exhausted', pair: 'Tired - Exhausted' },
    { word: 'Simple', synonym: 'Basic', pair: 'Simple - Basic' },
    { word: 'Small', synonym: 'Tiny', pair: 'Small - Tiny' },
    { word: 'Bright', synonym: 'Brilliant', pair: 'Bright - Brilliant' },
    { word: 'Lovely', synonym: 'Charming', pair: 'Lovely - Charming' },
    { word: 'Noisy', synonym: 'Loud', pair: 'Noisy - Loud' },
    { word: 'Warm', synonym: 'Hot', pair: 'Warm - Hot' },
    { word: 'Polite', synonym: 'Courteous', pair: 'Polite - Courteous' },
    { word: 'Quiet', synonym: 'Silent', pair: 'Quiet - Silent' },
    { word: 'Happy', synonym: 'Content', pair: 'Happy - Content' },
    { word: 'Strong', synonym: 'Powerful', pair: 'Strong - Powerful' },
    { word: 'Lazy', synonym: 'Idle', pair: 'Lazy - Idle' },
    { word: 'Fast', synonym: 'Speedy', pair: 'Fast - Speedy' },
    { word: 'Proud', synonym: 'Arrogant', pair: 'Proud - Arrogant' },
    { word: 'Famous', synonym: 'Well-known', pair: 'Famous - Well-known' },
    { word: 'Pretty', synonym: 'Attractive', pair: 'Pretty - Attractive' },
    { word: 'Hard', synonym: 'Difficult', pair: 'Hard - Difficult' },
    { word: 'Sweet', synonym: 'Sugary', pair: 'Sweet - Sugary' },
    { word: 'Brave', synonym: 'Bold', pair: 'Brave - Bold' },
    { word: 'Quick', synonym: 'Rapid', pair: 'Quick - Rapid' },
    { word: 'Clean', synonym: 'Neat', pair: 'Clean - Neat' },
    { word: 'Wise', synonym: 'Intelligent', pair: 'Wise - Intelligent' },
    { word: 'Honest', synonym: 'Sincere', pair: 'Honest - Sincere' },
    { word: 'Old', synonym: 'Ancient', pair: 'Old - Ancient' },
    { word: 'Young', synonym: 'Youthful', pair: 'Young - Youthful' },
    { word: 'Dark', synonym: 'Gloomy', pair: 'Dark - Gloomy' },
    { word: 'Shiny', synonym: 'Glossy', pair: 'Shiny - Glossy' },
    { word: 'Shy', synonym: 'Timid', pair: 'Shy - Timid' },
    { word: 'Happy', synonym: 'Delighted', pair: 'Happy - Delighted' },
    { word: 'Big', synonym: 'Enormous', pair: 'Big - Enormous' },
    { word: 'Busy', synonym: 'Active', pair: 'Busy - Active' }
  ];

  const rows2 = [];
  for (let i = 0; i < synonyms.length; i += 5) {
    const row = synonyms.slice(i, i + 5);
    rows2.push(
      <tr key={i}>
        {row.map((synonym, index) => (
          <td key={index}>{synonym.pair}</td>
        ))}
      </tr>
    );
        }


  const antonyms = [
    { word1: 'Big', word2: 'Small' },
    { word1: 'Brave', word2: 'Cowardly' },
    { word1: 'Happy', word2: 'Sad' },
    { word1: 'Angry', word2: 'Calm' },
    { word1: 'Smart', word2: 'Stupid' },
    { word1: 'Fast', word2: 'Slow' },
    { word1: 'Cold', word2: 'Hot' },
    { word1: 'Beautiful', word2: 'Ugly' },
    { word1: 'Up', word2: 'Down' },
    { word1: 'Day', word2: 'Night' },
    { word1: 'Inside', word2: 'Outside' },
    { word1: 'Empty', word2: 'Full' },
    { word1: 'Love', word2: 'Hate' },
    { word1: 'Young', word2: 'Old' },
    { word1: 'Near', word2: 'Far' },
    { word1: 'Light', word2: 'Dark' },
    { word1: 'Happy', word2: 'Miserable' },
    { word1: 'Soft', word2: 'Hard' },
    { word1: 'High', word2: 'Low' },
    { word1: 'Rich', word2: 'Poor' },
    { word1: 'Open', word2: 'Closed' },
    { word1: 'Above', word2: 'Below' },
    { word1: 'Weak', word2: 'Strong' },
    { word1: 'Yes', word2: 'No' },
    { word1: 'Positive', word2: 'Negative' },
    { word1: 'Clean', word2: 'Dirty' },
    { word1: 'Wet', word2: 'Dry' },
    { word1: 'Win', word2: 'Lose' },
    { word1: 'Start', word2: 'Finish' },
    { word1: 'Front', word2: 'Back' },
    { word1: 'Boy', word2: 'Girl' },
    { word1: 'Quiet', word2: 'Loud' },
    { word1: 'Smart', word2: 'Dumb' },
    { word1: 'Rough', word2: 'Smooth' },
    { word1: 'Tall', word2: 'Short' },
    { word1: 'Short', word2: 'Long' },
    { word1: 'Big', word2: 'Little' },
    { word1: 'Easy', word2: 'Difficult' },
    { word1: 'Happy', word2: 'Unhappy' },
    { word1: 'Thin', word2: 'Thick' },
    { word1: 'Sweet', word2: 'Sour' },
    { word1: 'Hot', word2: 'Cold' },
    { word1: 'True', word2: 'False' },
    { word1: 'Light', word2: 'Heavy' },
    { word1: 'Safe', word2: 'Dangerous' },
    { word1: 'Awake', word2: 'Asleep' },
    { word1: 'Inside', word2: 'Outside' },
    { word1: 'Summer', word2: 'Winter' },
    { word1: 'Day', word2: 'Night' },
    { word1: 'Empty', word2: 'Full' }
  ];

  const rows = [];
  for (let i = 0; i < antonyms.length; i += 5) {
    const row = [];
    for (let j = i; j < i + 5 && j < antonyms.length; j++) {
      row.push(
        <Col key={j} xs={12} sm={6} md={4} lg={3} xl={2}>
          <p>{antonyms[j].word1} - {antonyms[j].word2}</p>
        </Col>
      );
    }
    rows.push(<Row key={i}>{row}</Row>);
  }


  const verbForms = [
    { base: 'Go', pastSimple: 'Went', pastParticiple: 'Gone' },
    { base: 'Be', pastSimple: 'Was/Were', pastParticiple: 'Been' },
    { base: 'Do', pastSimple: 'Did', pastParticiple: 'Done' },
    { base: 'Have', pastSimple: 'Had', pastParticiple: 'Had' },
    { base: 'Make', pastSimple: 'Made', pastParticiple: 'Made' },
    { base: 'Say', pastSimple: 'Said', pastParticiple: 'Said' },
    { base: 'Get', pastSimple: 'Got', pastParticiple: 'Got/Gotten' },
    { base: 'Know', pastSimple: 'Knew', pastParticiple: 'Known' },
    { base: 'Take', pastSimple: 'Took', pastParticiple: 'Taken' },
    { base: 'See', pastSimple: 'Saw', pastParticiple: 'Seen' },
    { base: 'Come', pastSimple: 'Came', pastParticiple: 'Come' },
    { base: 'Think', pastSimple: 'Thought', pastParticiple: 'Thought' },
    { base: 'Look', pastSimple: 'Looked', pastParticiple: 'Looked' },
    { base: 'Want', pastSimple: 'Wanted', pastParticiple: 'Wanted' },
    { base: 'Give', pastSimple: 'Gave', pastParticiple: 'Given' },
    { base: 'Use', pastSimple: 'Used', pastParticiple: 'Used' },
    { base: 'Find', pastSimple: 'Found', pastParticiple: 'Found' },
    { base: 'Tell', pastSimple: 'Told', pastParticiple: 'Told' },
    { base: 'Ask', pastSimple: 'Asked', pastParticiple: 'Asked' },
    { base: 'Work', pastSimple: 'Worked', pastParticiple: 'Worked' },
    { base: 'Call', pastSimple: 'Called', pastParticiple: 'Called' },
    { base: 'Try', pastSimple: 'Tried', pastParticiple: 'Tried' },
    { base: 'Need', pastSimple: 'Needed', pastParticiple: 'Needed' },
    { base: 'Feel', pastSimple: 'Felt', pastParticiple: 'Felt' },
    { base: 'Become', pastSimple: 'Became', pastParticiple: 'Become' },
    { base: 'Leave', pastSimple: 'Left', pastParticiple: 'Left' },
    { base: 'Put', pastSimple: 'Put', pastParticiple: 'Put' },
    { base: 'Mean', pastSimple: 'Meant', pastParticiple: 'Meant' },
    { base: 'Keep', pastSimple: 'Kept', pastParticiple: 'Kept' },
    { base: 'Let', pastSimple: 'Let', pastParticiple: 'Let' },
    { base: 'Begin', pastSimple: 'Began', pastParticiple: 'Begun' },
    { base: 'Seem', pastSimple: 'Seemed', pastParticiple: 'Seemed' },
    { base: 'Help', pastSimple: 'Helped', pastParticiple: 'Helped' },
    { base: 'Talk', pastSimple: 'Talked', pastParticiple: 'Talked' },
    { base: 'Turn', pastSimple: 'Turned', pastParticiple: 'Turned' },
    { base: 'Start', pastSimple: 'Started', pastParticiple: 'Started' },
    { base: 'Show', pastSimple: 'Showed', pastParticiple: 'Shown' },
    { base: 'Hear', pastSimple: 'Heard', pastParticiple: 'Heard' },
    { base: 'Play', pastSimple: 'Played', pastParticiple: 'Played' },
    { base: 'Move', pastSimple: 'Moved', pastParticiple: 'Moved' },
    { base: 'Live', pastSimple: 'Lived', pastParticiple: 'Lived' },
    { base: 'Believe', pastSimple: 'Believed', pastParticiple: 'Believed' },
    { base: 'Bring', pastSimple: 'Brought', pastParticiple: 'Brought' },
    { base: 'Happen', pastSimple: 'Happened', pastParticiple: 'Happened' },
    { base: 'Write', pastSimple: 'Wrote', pastParticiple: 'Written' },
    { base: 'Provide', pastSimple: 'Provided', pastParticiple: 'Provided' },
    { base: 'Stand', pastSimple: 'Stood', pastParticiple: 'Stood' },
    { base: 'Sit', pastSimple: 'Sat', pastParticiple: 'Sat' },
    { base: 'Include', pastSimple: 'Included', pastParticiple: 'Included' },
    { base: 'Continue', pastSimple: 'Continued', pastParticiple: 'Continued' }
  ];



  const words = [
    "Accommodate", "Aggressive", "Beautiful", "Calendar", "Conscience",
    "Definitely", "Embarrass", "Fluorescent", "Gorgeous", "Hierarchy",
    "Immediately", "Jewelry", "Knowledge", "Leisure", "Millennium",
    "Necessary", "Occasion", "Pneumonia", "Quarantine", "Restaurant",
    "Sincerely", "Tendency", "Unbelievable", "Vacuum", "Weird",
    "Yacht", "Acquaintance", "Bouquet", "Cinnamon", "Disappoint",
    "Exaggerate", "Fascinate", "Gnarled", "Hygiene", "Inoculate",
    "Jeopardy", "Knowledgeable", "Lightning", "Millennium", "Navigate",
    "Obedient", "Peculiar", "Queue", "Recipient", "Seize",
    "Tranquil", "Unanimous", "Vengeance", "Wholesome", "Xenophobia"
  ];

  const rowCount = Math.ceil(words.length / 5);
  const rows1 = [];
  for (let i = 0; i < rowCount; i++) {
    const startIndex = i * 5;
    const endIndex = Math.min(startIndex + 5, words.length);
    const rowWords = words.slice(startIndex, endIndex);
    rows1.push(
      <tr key={i}>
        {rowWords.map((word, j) => (
          <td key={j}>{word}</td>
        ))}
        {rowWords.length < 5 && (
          Array.from({ length: 5 - rowWords.length }).map((_, k) => (
            <td key={rowWords.length + k}></td>
          ))
        )}
      </tr>
    );
  }


  const idioms = [
    { idiom: 'Bite the bullet', meaning: 'To endure a painful or difficult situation with courage and determination.' },
    { idiom: 'Break the ice', meaning: 'To initiate or facilitate a conversation or interaction in a social setting.' },
    { idiom: 'Cost an arm and a leg', meaning: 'To be very expensive.' },
    { idiom: 'Hit the nail on the head', meaning: 'To describe precisely or accurately what is needed or intended.' },
    { idiom: 'Jump on the bandwagon', meaning: 'To join or support something that is already popular or successful.' },
    { idiom: 'Piece of cake', meaning: 'Something very easy to do.' },
    { idiom: 'Spill the beans', meaning: 'To disclose secret or confidential information.' },
    { idiom: 'Under the weather', meaning: 'Feeling ill or not in good health.' },
    { idiom: 'Kick the bucket', meaning: 'To die.' },
    { idiom: 'Out of the blue', meaning: 'Unexpectedly or without any warning.' }
  ];


  return (
    <div>
      <center>

      <Alert variant="info">
      <h2>Communication Module</h2>
      </Alert>
      <b>communication points that are needed in interview tests and can help during interviews.
      </b>
      </center>
      <br />
      <div className="card-container">
        <Row>
          <Col>
              <Card>
              <Card.Header as="h5" className='bg-info'>Active Listening</Card.Header>
              <Card.Body>
                <Card.Text>
                  Active listening is crucial in interviews as it shows your attentiveness and understanding of the interviewer's questions.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
          <Col> <Card>
          <Card.Header as="h5" className='bg-info'>Clear Communication</Card.Header>
          <Card.Body>
            <Card.Text>
              Clear communication ensures that your message is understood without ambiguity, which is essential in professional settings.
            </Card.Text>
          </Card.Body>
        </Card></Col>

          <Col> <Card>
          <Card.Header as="h5" className='bg-info'>Confidence</Card.Header>
          <Card.Body>
            <Card.Text>
              Confidence in your abilities and communication can leave a positive impression on the interviewer.
            </Card.Text>
          </Card.Body>
        </Card></Col>
        <Col> <Card>
          <Card.Header as="h5" className='bg-info'>Non-verbal Communication</Card.Header>
          <Card.Body>
            <Card.Text>
            Understanding the impact of body language, facial expressions, and posture. Recognizing and controlling nervous behaviors.
            </Card.Text>
          </Card.Body>
        </Card></Col>
        </Row>
        <hr />

        
        <br />

{/* 
//synonyms */}
          <Container flex>
            <Card>
              <Card.Header as="h5" className='bg-info'><h2 className='text-center'>Synonyms</h2></Card.Header>
              <Card.Body>
                <Card.Text>
                <Table striped bordered class="table table-hover">
                  <tbody class="lead">
                     {rows2}
                 </tbody>
                 </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>       
        <hr />

{/* 
//antonyms */}
    <Container flex>
            <Card>
              <Card.Header as="h5" className='bg-info'><h2 className='text-center'>Antonyms</h2></Card.Header>
              <Card.Body>
                <Card.Text>
                <Table striped bordered class="table table-hover">
                <tbody class="lead">
          {rows.map((row, index) => (
            <tr key={index}>{row}</tr>
          ))}
        </tbody>
                 </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container> 

    <hr />
{/* 
//Verb table */}
 <Container flex>
            <Card>
              <Card.Header as="h5" className='bg-info'><h2 className='text-center'>Verb</h2></Card.Header>
              <Card.Body>
                <Card.Text>
                <Table striped bordered class="table table-hover">
                <thead class="table-danger">
              <tr>
                <th>Base Form</th>
                <th>Past Simple</th>
                <th>Past Participle</th>
              </tr>
            </thead>
            <tbody class="lead">
              {verbForms.map((verb, index) => (
                <tr key={index}>
                  <td>{verb.base}</td>
                  <td>{verb.pastSimple}</td>
                  <td>{verb.pastParticiple}</td>
                </tr>
              ))}
            </tbody>
                 </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container> 
    <hr />
{/* 
//Spellings */}
    <Container flex>
            <Card>
              <Card.Header as="h5" className='bg-info'><h2 className='text-center'>Spellings</h2></Card.Header>
              <Card.Body>
                <Card.Text>
                <Table striped bordered class="table table-hover">
                <tbody class="lead">
              {rows1}
            </tbody>
                 </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container> 
    <hr />
{/* 
//Idoms */}

<Container flex>
            <Card>
              <Card.Header as="h5" className='bg-info'><h2 className='text-center'>Idoms</h2></Card.Header>
              <Card.Body>
                <Card.Text >
                <Table striped bordered class="table table-hover">
                <thead class="lead">
              <tr>
                <th>Idiom</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody class="lead">
              {idioms.map((idiom, index) => (
                <tr key={index}>
                  <td>{idiom.idiom}</td>
                  <td>{idiom.meaning}</td>
                </tr>
              ))}
            </tbody>
                 </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container> 

   
    <hr />


{/* 
//Parts of speeech */}

<Container flex>
            <Card>
              <Card.Header as="h5" className='bg-info'><h2 className='text-center'>Parts of Speech</h2></Card.Header>
              <Card.Body>
                <Card.Text>
                <Table striped bordered class="table table-hover">
                <thead class="lead">
        <tr>
          <th>Word</th>
          <th>Part of Speech</th>
          <th>Definition</th>
          <th>Example Sentence</th>
        </tr>
      </thead>
      <tbody class="lead">
        <tr>
          <td>Run</td>
          <td>Verb</td>
          <td>To move swiftly on foot; to operate</td>
          <td>He likes to <strong>run</strong> in the morning.</td>
        </tr>
        <tr>
          <td>Quick</td>
          <td>Adjective</td>
          <td>Moving or able to move rapidly</td>
          <td>She has a <strong>quick</strong> wit.</td>
        </tr>
        <tr>
          <td>Happiness</td>
          <td>Noun</td>
          <td>The state of being happy or joyful</td>
          <td>Their wedding was filled with <strong>happiness</strong>.</td>
        </tr>
        <tr>
          <td>Beautiful	</td>
          <td>Adjective	</td>
          <td>Pleasing the senses or mind aesthetically</td>
          <td>	"She has a <strong>beautiful </strong>smile."</td>
        </tr><tr>
          <td>Cautiously</td>
          <td>Adverb</td>
          <td>In a careful or cautious manner</td>
          <td>"He walked <strong>cautiously </strong>across the icy path.</td>
        </tr><tr>
          <td>Jump</td>
          <td>Verb</td>
          <td>To spring off the ground with both feet</td>
          <td>"The kids love to <strong>jump</strong> on the trampoline."</td>
        </tr><tr>
          <td>Quickly</td>
          <td>Adverb</td>
          <td>At a fast speed; rapidly</td>
          <td>"She <strong>quickly</strong> finished her homework."</td>
        </tr>
      </tbody>
                 </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container> 

       <br />
       <br />
      </div>
    </div>
    
  );
}
