import { DirectionalLight } from "three";
import WebglApplication from "../WebglApplication";

export default class Environment {
  constructor() {
    this.webglApp = new WebglApplication();
    this.scene = this.webglApp.scene;

    this.setSunLight();
  }

  setSunLight() {
    this.sunLight = new DirectionalLight("#ffffff", 4);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 15;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(3, 3, -2.25);
    this.scene.add(this.sunLight);
  }
}
