# nocms-forms

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

## Rule options

### email
### phone
### datetime
### date
### int
### orgNumber
### accountNumber
### confirm
### internalUri
### regex
