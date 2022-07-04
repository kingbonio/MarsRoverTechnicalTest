interface IArea
{
    GetLocation(roverReference: string): string
    SetLocation(newLocation: string, oldLocation: string): void;
    MoveRoverForwards(areaLocation: string, direction: MovementDirection): void;
}