import {
  WebGLRenderer,
  sRGBEncoding,
  CineonToneMapping,
  PCFSoftShadowMap,
} from "three";
import WebglApplication from "./WebglApplication";

export default class {
  constructor() {
    this.webglApp = new WebglApplication();
    this.sizes = this.webglApp.sizes;
    this.scene = this.webglApp.scene;
    this.canvas = this.webglApp.canvas;
    this.camera = this.webglApp.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.instance.physicallyCorrectLights = true;
    this.instance.outputEncoding = sRGBEncoding;
    this.instance.toneMapping = CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = PCFSoftShadowMap;
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
