import { IImage } from "../interfaces/image.interface";

export class ImageDto implements IImage {
  readonly id: number;
  readonly url: string;
  readonly default: boolean;
}
