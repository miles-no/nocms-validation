# nocms-validation

Validation of forms fields.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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

## Commit message format and publishing

This repository is published using `semantic-release`, with the default [AngularJS Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit).
