import { RouteObject, IndexRouteObject } from 'react-router-dom';

export interface Dimensions {
  width: number;
  height: number;
}

export type CustomRouteObjectBase = Omit<RouteObject, 'children'> & {
  name?: string;
};

export interface CustomRouteObjectWithDimensions extends CustomRouteObjectBase {
  dimensions: Dimensions;
  children?: CustomRouteObject[];
}

export interface CustomRouteObjectWithoutDimensions extends CustomRouteObjectBase {
  dimensions?: never;
  children?: CustomRouteObject[];
}

export type CustomIndexRouteObject = IndexRouteObject & {
  name?: string;
  dimensions?: Dimensions;
};

export type CustomRouteObject =
  | CustomRouteObjectWithDimensions
  | CustomRouteObjectWithoutDimensions
  | CustomIndexRouteObject;

export type Route = CustomRouteObject;
