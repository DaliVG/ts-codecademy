import { getObstacleEvents } from './computer-vision';

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [events: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  respond(events: Events) {
    if (this.isRunning === false) {
      return console.log('The car is off.');
    }

    Object.keys(events).forEach((eventKey) => {
      if (events.eventKey === false) {
        return;
      } else if (eventKey === 'ObstacleLeft') {
        this.steeringControl.turn("right");
      } else if (eventKey === 'ObstacleRight') {
        this.steeringControl.turn("left");
      }
    });
  }

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }

  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}
const steering = new SteeringControl();

// Testing code
let autonomousCar = new Car({ isRunning: false, steeringControl: steering });
//steering.turn('right')

interface AutonomousCar {
  isRunning?: boolean;
  respond(events: Events): void;
}

autonomousCar.respond(getObstacleEvents());
