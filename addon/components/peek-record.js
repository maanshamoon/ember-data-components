import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

export default class PeekRecordComponent extends Component {
	@service store;

	get data() {
		return this.store.peekRecord(this.args.modelName, this.args.id);
	}
}
