import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const hStyle = {
  marginBottom : '10px',
  color: '#435eff',
  fontSize: '20px',
};

const h4Style = {
  marginBottom : '8px',
  color: '#435eff',
  fontSize: '15px',
}

const EventTimeline = () => (
  <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="2019-03-02 16:30"

  >
    <h3 style={hStyle}>Ideathon</h3>
    <h4 style={h4Style}>-</h4>
    <p>
    The Ideathon will be a team event, where each team’s goal will be to identify a real-world problem and to propose a solution to that problem. 
    The solution a team proposes should be technically feasible, and the team should prove this using statistics and facts.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="2019-03-03 10:00"
  >
    <h3 style={hStyle}>Penumbera</h3>
    <h4 style={h4Style}>An event to bring out your mathematical and logical skills.</h4>
    <p>
      Participants will be provided with a set of pure mathematical problems covering-
      <ul>
        <li>Number Theory</li>
        <li>Combinatorics</li>
        <li>Probability</li>
        <li>Geometry</li>
        <li>Discrete mathematics</li>
      </ul> 
    </p>
    <br></br>
    <p>
      There is another module of the event to test the general problem solving, pattern finding skills and finding hidden meanings in images. 
      It will mainly focus on some encryption and cryptography based problems.
      There will be 2 levels of the event and participants will be selected on the basis of time they take to complete the challenge. 
      The question will be based on codes, ciphers, cryptogram, pattern finding and finding hidden meanings in images.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="2019-03-03 11:15"
  >
    <h3 style={hStyle}>Hired!</h3>
    <h4 style={h4Style}>-</h4>
    <p>
      The event tests students based on their aptitude skills, public speaking, and vision.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="2019-03-01 13:30"
  >
    <h3 style={hStyle}>PUBG Mobile</h3>
    <h4 style={h4Style}>In the midst of chaos, there is also an opportunity.</h4>
    <p>
      PlayerUnknown's Battlegrounds is an online multiplayer battle royale game,
      which can be played Solo, or in teams of 2 or 4.
    </p>
  </TimelineItem>
  <TimelineItem
    key="005"
    dateText="2019-03-03 15:30"
  >
    <h3 style={hStyle}>Big Tech Quiz</h3>
    <h4 style={h4Style}>Put on your nerd glasses and test how geeky you are!</h4>
    <p>
      A quiz session with mostly tricky questions related to technology. It would be hosted on Kahoot! App.
      It would be a live quiz containing 15 questions with a 
      time limit of 30 seconds for each question. Each question holds 5 points. Quiz code of the quiz would be provided.
    </p>
  </TimelineItem>
  <TimelineItem
    key="006"
    dateText="2019-03-03 15:30"
  >
    <h3 style={hStyle}>Cook-a-Code (Round 2)</h3>
    <h4 style={h4Style}>Let the programming juice flow in your brain!</h4>
    <p>
      It will be a programming contest where programmers will code solutions to the given problems. 
      It isn’t just about knowing a programming language, problems will be based on Optimisation of code, 
      Data Structures, and Algorithms. 
    </p>
    <p>
      A team can have up to 3 members. This event will be conducted in two rounds: Round 1 ‐ Online Qualifier Round, 
      In this round the student(or team) will be judged on the basis of the highest score or a maximum number of problems
      solved. 
    </p>
    <p>
      Teams can participate in this round remotely through their systems. 
      The students(or teams) who will clear the benchmark of the score will be invited 
      for Round 2, in which they will be coding on the Institute’s lab systems. Hackerrank.com will 
      serve as the online judge for the contests.
    </p>
  </TimelineItem>
  <TimelineItem
    key="007"
    dateText="2019-03-03 16:30"
  >
    <h3 style={hStyle}>ProjEx</h3>
    <h4 style={h4Style}>(Project Exhibition) Bringing ideas to life</h4>
    <p>
      This event is for participants to showcase their hardware and embedded skills 
      through their projects. Participants can build their projects in hardware-related domains 
      like Robotics, Drone or Quadcopter, Automation, AR, IoT(Internet of Things) or any other domain 
      which can help to solve a real-life problem.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 10:00"
  >
    <h3 style={hStyle}>Typeracer</h3>
    <h4 style={h4Style}>Let’s find out who is the flash of typing.</h4>
    <p>
      This will be multiple rounds based contest in Institute’s Labs.
       Each participant will be given random paragraph from a book/song/poem/article 
      as per website and they have to type it as fast as they can. Their speeds will be measured 
      in WPM(words per minute) by Typeracers Website itself and the one with maximum WPM will win. 
      In the case of a tie(same WPM), the accuracy will be given preference and the one with higher accuracy wins.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 10:30"
  >
    <h3 style={hStyle}>Vision</h3>
    <h4 style={h4Style}>Improve your UI/UX skills.</h4>
    <p>
      Participants will be introduced to the concepts of UI/UX through a 
      talk (provided by members of GDG) followed by a task to each participant 
      on designing a UI based on the topic provided at the commencement of the event. 
      The designs will be judged by the members of GDG and the top 3 designs will get the prize.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 10:30"
  >
    <h3 style={hStyle}>Hired (Round 2)</h3>
    <h4 style={h4Style}>-</h4>
    <p>
      The event tests students based on their aptitude skills, public speaking, and vision.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 11:00"
  >
    <h3 style={hStyle}>Ideathon</h3>
    <h4 style={h4Style}>-</h4>
    <p>
      The Ideathon will be a team event, where each team’s goal will be to identify a real-world problem 
      and to propose a solution to that problem. The solution a team proposes should be technically feasible, 
      and the team should prove this using statistics and facts.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="2019-03-04 13:30"
  >
    <h3 style={hStyle}>Penumbera (Round 2)</h3>
    <h4 style={h4Style}>An event to bring out your mathematical and logical skills.</h4>
    <p>
      Participants will be provided with a set of pure mathematical problems covering-
      <ul>
        <li>Number Theory</li>
        <li>Combinatorics</li>
        <li>Probability</li>
        <li>Geometry</li>
        <li>Discrete mathematics</li>
      </ul> 
    </p>
    <br></br>
    <p>
      There is another module of the event to test the general problem solving, pattern finding skills and finding hidden meanings in images. 
      It will mainly focus on some encryption and cryptography based problems.
      There will be 2 levels of the event and participants will be selected on the basis of time they take to complete the challenge. 
      The question will be based on codes, ciphers, cryptogram, pattern finding and finding hidden meanings in images.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 14:45"
  >
    <h3 style={hStyle}>BotRun</h3>
    <h4 style={h4Style}>(Robot race) Beat the time while running on the line.</h4>
    <p>
      The objective is that the robot should follow a track marked with a line with lots of hurdles. 
      The whole robot must start behind the starting mark and is considered to have crossed the finishing 
      line if any part of the robot crosses it when the robot has completed a full lap of the course.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 14:45"
  >
    <h3 style={hStyle}>Hired (Round 3)</h3>
    <h4 style={h4Style}>-</h4>
    <p>
      The event tests students based on their aptitude skills, public speaking, and vision.
    </p>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="2019-03-04 14:45"
  >
    <h3 style={hStyle}>The Tech Hunt</h3>
    <h4 style={h4Style}>Open Internet Treasure Hunt for all the Tech Freaks! 
      Put on your thinking caps and dig your way to the treasure!
    </h4>
    <p>
      Technical Treasure Hunt, the showstopper of Cerebro, would be based on various aspects of programming, 
      crypts, technology, logic, and pattern finding.  The event will be a multi-stage event, (at least 5 stages) 
      with successful completion of a stage leading to the next stage (plus a bonus stage unlocked with hints hidden 
      in each stage) with answers in the form of any technical glitch, error, anomaly, logic. The event will be a
      team-based event of 4 members. There would also be pre-hunts on the Facebook page of Cerebro in the last week 
      before the event, with small prizes.
    </p>
  </TimelineItem>
</Timeline>
);

export default EventTimeline;