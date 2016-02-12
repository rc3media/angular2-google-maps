export var google: any;

export interface GoogleMap {
  constructor(el: HTMLElement, opts?: MapOptions): void;
  panTo(latLng: LatLng | LatLngLiteral): void;
  setZoom(zoom: number): void;
  addListener(eventName: string, fn: Function): void;
  getCenter(): LatLng;
  setCenter(latLng: LatLng | LatLngLiteral): void;
  getZoom(): number;
  setOptions(options: MapOptions): void;
  setMapTypeId(mapTypeId: string): void;
}

export interface LatLng {
  constructor(lat: number, lng: number): void;
  lat(): number;
  lng(): number;
}

export interface Marker {
  icon: Icon;
  constructor(options?: MarkerOptions): void;
  setMap(map: GoogleMap): void;
  setPosition(latLng: LatLng | LatLngLiteral): void;
  setTitle(title: string): void;
  setLabel(label: string | MarkerLabel): void;
  getLabel(): MarkerLabel;
  setIcon(icon: Icon): void;
  addListener(eventType: string, fn: Function): void;
}

export interface MarkerOptions {
  position: LatLng | LatLngLiteral;
  title?: string;
  map?: GoogleMap;
  label?: string | MarkerLabel;
  icon?: Icon;
}

export interface MarkerLabel {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  text: string;
}

export interface LatLngLiteral {
  lat: number;
  lng: number;
}

export interface Point {
  x: number;
  y: number;
}
export interface Size {
  width: number;
  height: number;
}

export interface Icon {
  anchor: Point;
  labelOrigin: Point;
  origin: Point;
  scaledSize: Size;
  size: Size;
  url: string;
}

export interface MapOptions {
  backgroundColor?: string;
  center?: LatLng | LatLngLiteral;
  disableDefaultUI?: boolean;
  disableDoubleClickZoom?: boolean;
  draggable?: boolean;
  draggableCursor?: boolean;
  draggingCursor?: boolean;
  heading?: number;
  keyboardShortcuts?: boolean;
  mapMaker?: boolean;
  mapTypeControl?: boolean;
  mapTypeControlOptions?: boolean;
  // mapTypeId?: MapTypeId;
  maxZoom?: number;
  minZoom?: number;
  noClear?: boolean;
  overviewMapControl?: boolean;
  // overviewMapControlOptions?: OverviewMapControlOptions;
  panControl?: boolean;
  // panControlOptions?: PanControlOptions;
  rotateControl?: boolean;
  rotateControlOptions?: boolean;
  scaleControl?: boolean;
  // scaleControlOptions?: ScaleControlOptions;
  scrollwheel?: boolean;
  // streetView?: StreetViewPanorama;
  streetViewControl?: boolean;
  // streetViewControlOptions?: streetViewControlOptions;
  // styles?: MapTypeStyle[];
  tilt?: number;
  zoom?: number;
  zoomControl?: boolean;
  // zoomControlOptions?:  ZoomControlOptions;
}
