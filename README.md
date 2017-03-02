# nocms-validation

Validation of forms fields.


## Installation

Install nocms-validation from NPM and include it in your own build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

```
npm install nocms-validation --save
```

## Usage

```
import validation from 'nocms-validation';

validation.validate(this.state.value, 'email', this.props.required)
```

## validationRule

| `validationRule`  | description                                                       |
|-------------------|-------------------------------------------------------------------|
| `function(value)` | Custom function returning a boolean                               |
| 'email'           | Evaluates email addresses                                         |
| 'phone'           | Norwegian phone numbers, 8 digits with optional country code      |
| 'datetime'        | Matches ISO datetime YYYY-MM-DDTHH:MM, no timezone                |
| 'date'            | Matches ISO datetime YYYY-MM-DD                                   |
| 'int'             | Matches integer values                                            |
| 'orgNumber'       | Matches Norwegian organization numbers, 9 digits with checksum    |
| 'accountNumber'   | Matches Norwegian account numbers, with checksum.                 |
| 'confirm'         | Matches booleans, used for confirmation checkboxes                |
| 'internalUri'     | Matches a URI to a resource on the same domain. `/test`           |
| 'regex'           | A string with a custom regex to match the value                   |
