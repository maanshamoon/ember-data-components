import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';

export default class QueryComponent extends Component {
	@service store;
	@tracked hasError = false;

	@(task(function * () {
		return yield this.store.query(this.args.modelName, this.args.params)
		.then(response => response)
		.catch(() => this.hasError = true);
	})) data;

	@action
	fetch() {
		this.data.perform();
	}
}
