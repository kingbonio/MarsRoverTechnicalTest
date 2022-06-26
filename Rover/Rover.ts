class Rover
{
    private _area: IArea;
    private _direction: MovementDirection = MovementDirection.East;

    public constructor(area: IArea, startingLocation: string)
    {
        //Map singleton?
        this._area = area;

        const xLocation = startingLocation.split(" ")[0];
        const yLocation = startingLocation.split(" ")[1]
        this._area.SetLocation("Rover1", xLocation + " " + yLocation);
    }

    public MoveForwards(): void
    {
        // Attempt to move the the object on the map in the direction
        try {
            const areaLocation = this._area.GetLocation("Rover1");
            this._area.MoveRoverForwards(areaLocation, this._direction);
        }
        catch
        {
            // Fail
        }
    }

    public Turn(direction: TurnDirection): void
    {
        // Get new direction here
        if (direction === TurnDirection.Left)
        {
            const newDirection: MovementDirection; 
            // const newDirection = next index of Movement enum
            this._direction = newDirection;
        }
        else if (direction === TurnDirection.Right)
        {
            const newDirection: MovementDirection; 
            // const newDirection = next index of Movement enum
            this._direction = newDirection;
        }
        else
        {
            // Error
        }
    }
}