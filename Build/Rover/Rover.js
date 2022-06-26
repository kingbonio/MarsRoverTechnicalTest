"use strict";
class Rover {
    constructor(area) {
        this._direction = MovementDirection.East;
        //Map singleton?
        this._area = area;
    }
    MoveForwards() {
        // Attempt to move the the object on the map in the direction
        try {
            const areaLocation = this._area.GetLocation("Rover1");
            this._area.MoveRoverForwards(areaLocation, this._direction);
        }
        catch (_a) {
            // Fail
        }
    }
    Turn(direction) {
        // Get new direction here
        if (direction === TurnDirection.Left) {
            const newDirection;
            // const newDirection = next index of Movement enum
            this._direction = newDirection;
        }
        else if (direction === TurnDirection.Right) {
            const newDirection;
            // const newDirection = next index of Movement enum
            this._direction = newDirection;
        }
        else {
            // Error
        }
    }
}
