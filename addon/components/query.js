import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';

export default class QueryComponent extends Component {
	@service store;
	@tracked isLoading = true;
	@tracked hasError = false;

	get data() {
		return this.store.query(this.args.modelName, this.args.params)
		.then(() => this.isLoading = false)
		.catch(() => this.hasError = true);
	}
}
