"use strict";
class Area {
    // Singleton?
    constructor(gridSize) {
        const xCount = this._getXCount(gridSize);
        const yCount = this._getYCount(gridSize);
        this._buildMap(xCount, yCount);
    }
    AddItem(rover, location) {
        this._map[location] = rover;
    }
    GetLocation(roverReference) {
        const mapValues = Object.values(this._map);
        const locationKey = mapValues.forEach(x => x === roverReference);
    }
    MoveRoverForwards(areaLocation, direction) {
        // Get new location via direction
        // Check if new location is in bounds and not null
        // Deepclone into new location
        // Nullify previous location
    }
    _buildMap(xCount, yCount) {
        // Foreach loop
        for (let x = 0; x < xCount; x++) {
            for (let y = 0; y < yCount; y++) {
                this._map[x + "," + y] = null;
            }
        }
        console.log(Object.keys(this._map));
    }
    _getYCount(gridSize) {
        const gridDetails = gridSize.split(" ");
        // Errors?
        return parseInt(gridDetails[0]);
    }
    _getXCount(gridSize) {
        const gridDetails = gridSize.split(" ");
        // Errors?
        return parseInt(gridDetails[1]);
    }
}
