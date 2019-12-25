import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';

export default class FindRecordComponent extends Component {
  @service store;
  @tracked isLoading = true;
  @tracked hasError = false;

  get data() {
    const reload = this.args.reload === undefined ? false : this.args.reload;
    const backgroundReload = this.args.backgroundReload === undefined ? false : this.args.backgroundReload;

    return this.store.peekRecord(this.args.modelName, this.args.id, { reload, backgroundReload })
      .then(() => {
        this.isLoading = false;
      })
      .catch(() => {
        this.hasError = true;
      });
  }
}