import AoKuang from './media/images/aokuang.jpg';
import Apollo from './media/images/apollo.jpg';
import Athena from './media/images/athena.jpg';
import Bellona from './media/images/bellona.jpg';
import Change from './media/images/change.jpg';
import Fenrir from './media/images/fenrir.jpg';
import Geb from './media/images/geb.jpg';
import Hebo from './media/images/hebo.jpg';
import HouYi from './media/images/houyi.jpg';
import Janus from './media/images/janus.jpg';
import Khepri from './media/images/khepri.jpg';
import Kukulkan from './media/images/kukulkan.jpg';
import Kumbhakarna from './media/images/kumbhakarna.jpg';
import Loki from './media/images/loki.jpg';
import Mercury from './media/images/mercury.jpg';
import Neith from './media/images/neith.jpg';
import Ra from './media/images/ra.jpg';
import Ravana from './media/images/ravana.jpg';
import Sobek from './media/images/sobek.jpg';
import Sol from './media/images/sol.jpg';
import Susano from './media/images/susano.jpg';
import Thor from './media/images/thor.jpg';
import Tyr from './media/images/tyr.jpg';
import Xbalanque from './media/images/xbalanque.jpg';
import Ymir from './media/images/ymir.jpg';
import Zeus from './media/images/zeus.jpg';

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
