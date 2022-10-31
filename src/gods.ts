import Apollo from './media/images/apollo.jpg';
import Mercury from './media/images/mercury.jpg';
import Bellona from './media/images/bellona.jpg';
import Hebo from './media/images/hebo.jpg';

export class God {
  name: string;
  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}

export const gods = [
  new God('Apollo', Apollo),
  new God('Mercury', Mercury),
  new God('Bellona', Bellona),
  new God('He Bo', Hebo)
];

export default gods;
