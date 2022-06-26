class Area
{
    private _map: any;
    // Singleton?
    public constructor(gridSize: string)
    {
        const xCount = this._getXCount(gridSize);
        const yCount = this._getYCount(gridSize);

        this._buildMap(xCount, yCount);
    }

    public GetLocation(roverReference: string): string
    {
        const mapValues = Object.values(this._map);
        const locationKey = mapValues.forEach(x => x === roverReference);
        return locationKey;
    }

    public SetLocation(newLocation: string, oldLocation: string): void
    {
        // Get new location via direction
        // Check if new location is in bounds and not null
        // Deepclone into new location
        // Nullify previous location
        if (this._isLocationEmpty(newLocation))
        {
            // Deep Clone
            this._map[newLocation] = DeepClone(this._map[oldLocation]);
            this._map[oldLocation] = null;
        }
        else
        {
            throw new Error("Location contents not null");
        }
    }

    public MoveRoverForwards(areaLocation: string, direction: MovementDirection): void
    {
        try
        {
            // Get new location via direction
            this.SetLocation(newLocation, areaLocation);
        }
        catch
        {
            // Throw error
        }
    }

    private _buildMap(xCount: Number, yCount: Number): void
    {
        // Foreach loop
        for (let x = 0; x < xCount; x++)
        {
            for (let y = 0; y < yCount; y++)
            {
                this._map[x + "," + y] = null;
            }
        }

        console.log(Object.keys(this._map));
    }

    private _getYCount(gridSize: string): number
    {
        const gridDetails = gridSize.split(" ");
        // Errors?
        return parseInt(gridDetails[0]);
    }

    private _getXCount(gridSize: string): number
    {
        const gridDetails = gridSize.split(" ");
        // Errors?
        return parseInt(gridDetails[1]);
    }

    private _isLocationEmpty(location: string): boolean
    {
        if (this._map[location] === null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}