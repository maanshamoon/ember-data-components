import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';

export default class FindAllComponent extends Component {
	@service store;
	@tracked hasError = false;

	@(task(function * () {
		const reload = this.args.reload === undefined ? false : this.args.reload;
		const backgroundReload = this.args.backgroundReload === undefined ? false : this.args.backgroundReload;
		return yield this.store.findAll(this.args.modelName, { reload, backgroundReload })
		.then(response => response)
		.catch(() => this.hasError = true);
	})) data;

	@action
	fetch() {
		this.data.perform();
	}
}
