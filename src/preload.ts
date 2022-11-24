import { Container, injectable } from "inversify";
import "reflect-metadata";

class RendererContainer extends Container {
  public start() {}

  public stop() {}
}

@injectable()
class RendererService {
  // ...
}

let rendererContainer = new RendererContainer({ defaultScope: "Singleton" });
rendererContainer.bind("RendererService").to(RendererService);
