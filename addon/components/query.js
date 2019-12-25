import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class QueryComponent extends Component {
	@service store;

	get data() {
		return this.store.query(this.args.modelName, this.args.params)
			.then(() => this.isLoading = false)
			.catch(() => this.hasError = true);
	}
}
