// @flow
declare module '@shopify/draggable' {
  declare class Draggable {
    constructor(
      containers: HTMLElement[] | NodeList<HTMLElement> | HTMLElement,
      options: DraggableOptionsShopify
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
    addPlugin(...plugins: Plugin[]): Draggable;
    /**
     * Removes plugins that are already attached to this draggable instance.
     */
    removePlugin(...plugins: Plugin[]): Draggable;
    /**
     * Adds sensors to this draggable instance.
     */
    addSensor(...sensors: Sensor[]): Draggable;
    /**
     * Removes sensors that are already attached to this draggable instance.
     */
    removeSensor(...sensors: Sensor[]): Draggable;
    /**
     * Adds containers to this draggable instance.
     */
    addContainer(...containers: HTMLElement[]): Draggable;
    /**
     * Removes containers from this draggable instance.
     */
    removeContainer(...containers: HTMLElement[]): Draggable;
    /**
     * Returns class name for class identifier, check the classes table below for identifiers.
     */
    getClassNameFor(name: string): string;
    /**
     * Returns true or false, depending on this draggables dragging state.
     */
    isDragging(): boolean;
    /**
     * Returns draggable elements for given container, excluding potential mirror or original source.
     */
    getDraggableElementsForContainer(container: HTMLElement): HTMLElement[];
  }

  declare class Droppable extends Draggable {
    
  }
  declare type Plugin = {
    collidables: string | HTMLElement[] | NodeList<HTMLElement> | HTMLElement | Function
  }
  declare class Sensor {
    /**
     * To create a sensor, specify the containers it should pay attention to. Sensors will always trigger sensor events on container element.
     */
    constructor(
      containers: HTMLElement[] | NodeList<HTMLElement> | HTMLElement,
      options: SensorOptionsShopify
    ): this;
    /**
     * Attaches sensors to the DOM
     */
    attach(): void;
    /**
     * Detaches sensors to the DOM
     */
    detach(): void;
    /**
     * Triggers sensor event on container element
     */
    trigger(element: HTMLElement, sensorEvent: SensorEvent): void;
  }
}
