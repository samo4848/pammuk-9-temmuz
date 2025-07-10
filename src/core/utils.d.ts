declare namespace BP3D.Core {
    /** Collection of utility functions. */
    class Utils {
        /** Determines the distance of a point from a line.
         * @param x Point's x coordinate.
         * @param y Point's y coordinate.
         * @param x1 Line-Point 1's x coordinate.
         * @param y1 Line-Point 1's y coordinate.
         * @param x2 Line-Point 2's x coordinate.
         * @param y2 Line-Point 2's y coordinate.
         * @returns The distance.
         */
        static pointDistanceFromLine(x: number, y: number, x1: number, y1: number, x2: number, y2: number): number;
        /** Gets the projection of a point onto a line.
         * @param x Point's x coordinate.
         * @param y Point's y coordinate.
         * @param x1 Line-Point 1's x coordinate.
         * @param y1 Line-Point 1's y coordinate.
         * @param x2 Line-Point 2's x coordinate.
         * @param y2 Line-Point 2's y coordinate.
         * @returns The point.
         */
        static closestPointOnLine(x: number, y: number, x1: number, y1: number, x2: number, y2: number): {
            x: number;
            y: number;
        };
        /** Gets the distance of two points.
         * @param x1 X part of first point.
         * @param y1 Y part of first point.
         * @param x2 X part of second point.
         * @param y2 Y part of second point.
         * @returns The distance.
         */
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        /**  Gets the angle between 0,0 -> x1,y1 and 0,0 -> x2,y2 (-pi to pi)
         * @returns The angle.
         */
        static angle(x1: number, y1: number, x2: number, y2: number): number;
        /** shifts angle to be 0 to 2pi */
        static angle2pi(x1: number, y1: number, x2: number, y2: number): number;
        /** Checks if an array of points is clockwise.
         * @param points Is array of points with x,y attributes
         * @returns True if clockwise.
         */
        static isClockwise(points: any): boolean;
        /** Creates a Guid.
         * @returns A new Guid.
         */
        static guid(): string;
        /** both arguments are arrays of corners with x,y attributes */
        static polygonPolygonIntersect(firstCorners: any, secondCorners: any): boolean;
        /** Corners is an array of points with x,y attributes */
        static linePolygonIntersect(x1: number, y1: number, x2: number, y2: number, corners: any): boolean;
        /** */
        static lineLineIntersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean;
        /**
         @param corners Is an array of points with x,y attributes
          @param startX X start coord for raycast
          @param startY Y start coord for raycast
        */
        static pointInPolygon(x: number, y: number, corners: any, startX?: number, startY?: number): boolean;
        /** Checks if all corners of insideCorners are inside the polygon described by outsideCorners */
        static polygonInsidePolygon(insideCorners: any, outsideCorners: any, startX: number, startY: number): boolean;
        /** Checks if any corners of firstCorners is inside the polygon described by secondCorners */
        static polygonOutsidePolygon(insideCorners: any, outsideCorners: any, startX: number, startY: number): boolean;
        static forEach(array: any, action: any): void;
        static forEachIndexed(array: any, action: any): void;
        static map(array: any, func: any): any[];
        /** Remove elements in array if func(element) returns true */
        static removeIf(array: any, func: any): any[];
        /** Shift the items in an array by shift (positive integer) */
        static cycle(arr: any, shift: any): any;
        /** Returns in the unique elemnts in arr */
        static unique(arr: any, hashFunc: any): any[];
        /** Remove value from array, if it is present */
        static removeValue(array: any, value: any): void;
        /** Checks if value is in array */
        static hasValue: (array: any, value: any) => boolean;
        /** Subtracts the elements in subArray from array */
        static subtract(array: any, subArray: any): any[];
    }
}
