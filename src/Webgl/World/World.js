import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";
import WebglApplication from "../WebglApplication";
import Environment from "./Environment";

export default class World {
  constructor() {
    this.webglApp = new WebglApplication();
    this.scene = this.webglApp.scene;

    // Test mesh
    const testMesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial()
    );
    this.scene.add(testMesh);

    // Set up
    this.environment = new Environment();
  }
}
