import Component from '@glimmer/component';
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';

export default class PeekRecordComponent extends Component {
	@service store;
	@tracked isLoading = true;
	@tracked hasError = false;

	get data() {
		return this.store.peekRecord(this.args.modelName, this.args.id)
			.then(() => {
				this.isLoading = false;
			})
			.catch(() => {
				this.hasError = true;
			});
	}
}
