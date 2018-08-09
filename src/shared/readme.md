## Sharing code between routes with `src/shared`

The contents of this folder are automatically copied into every Begin route under `node_modules/@architect/shared` when:

- Working locally - `npm start`
- Running tests - `npm test`
- Deploying to `staging` - `git push origin`
- Deploying to `production` - `git tag -a 1.0.1 -m "This release includes 20% more cowbell" && git push origin 1.0.1`

This enables modules in this folder to be required from any function. For example:

```javascript
var layout = require('@architect/shared/layout')
```

Resolves locally in your project to `src/shared/layout.js`.


## Organizing

Organize shared code however it makes sense for your project.

Here's an example starting structure:

- `src/shared/views`
- `src/shared/middleware`
- `src/shared/helpers`
- `src/shared/components`

Feel free to overwrite the contents of this file to describe the structure you've chosen.


## Use caution!

Everything in `src/shared` – including its `node_modules`, if present – will be copied into all your routes, which could quickly bloat your application. **Remember to keep all Lambda-based cloud functions sub-5MB for optimal coldstart performance.**

> The `src/shared` folder is required to build your app – so please ensure it contains one or more files.
