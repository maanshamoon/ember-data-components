import DS from 'ember-data';
const { Model, attr } = DS;

export default class PostModel extends Model {
    @attr('string') title;
}
