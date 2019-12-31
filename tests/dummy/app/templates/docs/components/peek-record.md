# Peek Record
Retrieves a record by its `modelName` and `id`, without making a network request. This will return the record only if it is already present in the store.

## Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@id`: (required) A number of `string` of the model id.

## Block Parameters 
- `data`: Data returned.

example:
```handlebars 
<PeekRecord
    @modelName = "post"
    @id = 1
    as |post|
>
    {{post.title}}
</PeekRecord>
```