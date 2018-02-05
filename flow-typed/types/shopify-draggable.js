declare module '@shopify/draggable' {
  declare type Options = {
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
  declare class Draggable {
    constructor(
      containers: HTMLElement[] | NodeList | HTMLElement,
      options: Options
    ): this;
    /**
     * Detaches all sensors and listeners, and cleans up after itself.
     */
    destroy(): void;
    /**
     *Draggable is an event emitter, so you can register callbacks for events. Draggable also supports method chaining.
     */
    on(eventName: string, listener: () => void): Draggable;
    /**
     * You can unregister listeners by using .off(), make sure to provide the same callback.
     */
    off(eventName: string, listener: () => void): Draggable;
    /**
     * You can trigger events through  This is used to fire events internally or by extensions of
     */
    trigger(event: Event): void;
    /**
     * Adds plugins to this draggable instance.
     */
    addPlugin(...plugins: Plugin): Draggable;
    /**
     * Removes plugins that are already attached to this draggable instance.
     */
    removePlugin(...plugins: Plugin): Draggable;
    /**
     * Adds sensors to this draggable instance.
     */
    addSensor(...sensors: Sensor): Draggable;
    /**
     * Removes sensors that are already attached to this draggable instance.
     */
    removeSensor(...sensors: Sensor): Draggable;
    /**
     * Adds containers to this draggable instance.
     */
    addContainer(...containers: HTMLElement): Draggable;
    /**
     * Removes containers from this draggable instance.
     */
    removeContainer(...containers: HTMLElement): Draggable;
    /**
     * Returns class name for class identifier, check the classes table below for identifiers.
     */
    getClassNameFor(name: String): string;
    /**
     * Returns true or false, depending on this draggables dragging state.
     */
    isDragging(): bool;
    /**
     * Returns draggable elements for given container, excluding potential mirror or original source.
     */
    getDraggableElementsForContainer(container: HTMLElement): HTMLElement[];
  }
}
