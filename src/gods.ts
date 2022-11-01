import AoKuang from './media/images/.jpg';
import Apollo from './media/images/apollo.jpg';
import Athena from './media/images/.jpg';
import Bellona from './media/images/bellona.jpg';
import Change from './media/images/.jpg';
import Fenrir from './media/images/.jpg';
import Geb from './media/images/.jpg';
import Hebo from './media/images/hebo.jpg';
import HouYi from './media/images/.jpg';
import Janus from './media/images/.jpg';
import Khepri from './media/images/.jpg';
import Kukulkan from './media/images/.jpg';
import Kumbhakarna from './media/images/.jpg';
import Loki from './media/images/.jpg';
import Mercury from './media/images/mercury.jpg';
import Neith from './media/images/.jpg';
import Ra from './media/images/.jpg';
import Ravana from './media/images/.jpg';
import Sobek from './media/images/.jpg';
import Sol from './media/images/.jpg';
import Susano from './media/images/.jpg';
import Thor from './media/images/.jpg';
import Tyr from './media/images/.jpg';
import Xbalanque from './media/images/.jpg';
import Ymir from './media/images/.jpg';
import Zeus from './media/images/.jpg';

export class God {
  name: string;
  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}

export const gods = [
  new God('Ao Kuang', AoKuang),
  new God('Apollo', Apollo),
  new God('Athena', Athena),
  new God('Bellona', Bellona),
  new God("Chang'e", Change),
  new God('Fenrir', Fenrir),
  new God('Geb', Geb),
  new God('He Bo', Hebo),
  new God('Hou-Yi', HouYi),
  new God('Janus', Janus),
  new God('Khepri', Khepri),
  new God('Kukulkan', Kukulkan),
  new God('Kumbhakarna', Kumbhakarna),
  new God('Loki', Loki),
  new God('Mercury', Mercury),
  new God('Neith', Neith),
  new God('Ra', Ra),
  new God('Ravana', Ravana),
  new God('Sobek', Sobek),
  new God('Sol', Sol),
  new God('Susano', Susano),
  new God('Thor', Thor),
  new God('Tyr', Tyr),
  new God('Xbalanque', Xbalanque),
  new God('Ymir', Ymir),
  new God('Zeus', Zeus)
];

export default gods;
