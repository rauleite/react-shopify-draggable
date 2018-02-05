// @flow
declare type DraggableOptionsShopify = {
  /**
   * A css selector for draggable elements within the containers specified. By default it will look for an element with .draggable-source class. Default: .draggable-source
   */
  draggable: string,
  /**
   * Specify a css selector for a handle element if you don't want to allow drag action on the entire element. Default: null
   */
  handle: string,
  /**
   * If you want to delay a drag start you can specify delay in milliseconds. This can be useful for draggable elements within scrollable containers. Default: 100
   */
  delay: number,
  /**
   * Plugins add behaviour to Draggable by hooking into its life cycle, e.g. one of the default plugins controls the mirror movement. Default: []
   */
  plugins: Plugin[],
  /**
   * Sensors dictate how drag operations get triggered, by listening to native browser events. By default draggable includes the MouseSensor & TouchSensor. Default: []
   */
  sensors: Sensor[],
  /**
   * Draggable allows you to specify where the mirror should be appended to. You can specify a css selector, a HTMLElement or a function that returns a HTMLElement
   */
  appendTo: String | HTMLElement | Function,
  /**
   * Draggable adds classes to elements to indicate state. These classes can be used to add styling on elements in certain states.}
   */
  classes: { style: {} }
}

declare type SensorOptionsShopify = {
  delay: number
}

declare type DroppableOptionsShopify = {
  droppable: HTMLElement,
  draggable: HTMLElement
}
