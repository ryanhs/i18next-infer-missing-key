**README.md**

# i18next-infer-missing-key

A powerful utility library for inferring and constructing i18next keys based on context, variants, and pluralization.

> Useful if you want to store translations in a database and need to manage i18next keys effectively.

## Installation

```bash
npm install i18next-infer-missing-key
```

## Usage

### Inferring Context from a Key

You can infer additional context and pluralization forms from a given key using the `i18nextInferKey` function. This function recursively analyzes the key to extract its base key, context, and plural form.

```typescript
import { i18nextInferKey } from 'i18next-infer-missing-key';

const key = 'my_key_male_mobile_short';
const inferredContext = i18nextInferKey(key);

console.log(inferredContext);
// Output: { key: 'my_key', countForm: 'short', context: 'male' }
```

### Inferring a Key from Context

The `i18nextInferContext` function allows you to construct a key from an object that describes its context and pluralization form.

```typescript
import { i18nextInferContext } from 'i18next-infer-missing-key';

const context = {
  key: 'my_key',
  context: 'female',
  countForm: 'one', // Example of pluralization
};

const inferredKey = i18nextInferContext(context);

console.log(inferredKey);
// Output: 'my_key_female_one'
```

### Additional Examples

#### Inferring Multiple Contexts

You can infer keys for different contexts easily. For example:

```typescript
const maleKey = 'my_key_male_one';
const femaleKey = 'my_key_female_many';

const maleContext = i18nextInferKey(maleKey);
const femaleContext = i18nextInferKey(femaleKey);

console.log(maleContext);
// Output: { key: 'my_key', countForm: 'one', context: 'male' }

console.log(femaleContext);
// Output: { key: 'my_key', countForm: 'many', context: 'female' }
```

#### Constructing Keys from Contexts with Multiple Plural Forms

You can specify different pluralization forms when constructing keys from context:

```typescript
const contextWithPlural = {
  key: 'notification',
  context: 'user',
  countForm: 'two', // Indicates two users
};

const constructedKey = i18nextInferContext(contextWithPlural);

console.log(constructedKey);
// Output: 'notification_user_two'
```

### Why Use i18next-infer-missing-key?

- **Simplify i18next Key Management:** Automatically infer context and plural forms from keys or construct keys from context objects.
- **Improve Code Readability:** Use clear context objects instead of complex key strings.
- **Enhance Code Maintainability:** Easily update and manage i18n keys, reducing the risk of errors in key naming conventions.

## Contributing

Feel free to contribute to this library by submitting issues or pull requests. Your contributions are welcome!

## License

This library is released under the MIT License.
