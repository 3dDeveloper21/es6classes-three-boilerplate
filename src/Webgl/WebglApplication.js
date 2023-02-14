import { Scene } from "three";
import EventEmitter from "./Utils/EventEmitter";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Resources from "./Utils/Resources.js";
import Sources from "./Sources";
import World from "./World/World";

let instance = null;

export default class WebglApplication {
  constructor(canvas) {
    // Singleton
    if (instance) {
      return instance;
    }

    instance = this;

    // Options
    this.canvas = canvas;

    // Set up
    this.sizes = new Sizes();

    this.time = new Time();

    // Create scene
    this.scene = new Scene();

    // Resources
    this.resources = new Resources(Sources);

    // Camera
    this.camera = new Camera();

    // Renderer
    this.renderer = new Renderer();

    // World
    this.world = new World();
    // this.world.meshTest();

    // Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }
}
