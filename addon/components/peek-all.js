import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

export default class PeekAllComponent extends Component {
    @service store;

    get data() {
        return this.store.peekAll(this.args.modelName);
    }
}