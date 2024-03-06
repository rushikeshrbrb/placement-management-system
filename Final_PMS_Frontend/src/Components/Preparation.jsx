import React from "react";
import CommunicationModule from "./CommunicationModule";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AptitudeModule from "./AptitudeModule";
import QuizApp from "./QuizApp";
import InterviewPreparation from "./InterviewPreparation";
import { Container } from "react-bootstrap";
import QuizApti from "./QuizApti";

export default function Preparation() {
    return(
     <Container>
        <div>
    <Tabs
      defaultActiveKey="Communication Module"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      
      <Tab eventKey="Communication Module" title="Communication Module">
      <CommunicationModule></CommunicationModule>
      </Tab>

      <Tab eventKey="Aptitude Module" title="Aptitude Module">
        <QuizApti></QuizApti>
      </Tab>
      <Tab eventKey="Technical Module" title="Technical Module">
        <QuizApp></QuizApp>
      </Tab>
      <Tab eventKey="Interview Preparation" title="Interview Preparation">
        <InterviewPreparation></InterviewPreparation>
      </Tab>
    </Tabs>
    </div>
    </Container>
    );
}
