**README.md**

**i18next-infer-missing-key**

A powerful utility library for inferring and constructing i18next keys based on context and variants.

> Usefull if you want to put translation in database.

**Installation**

```bash
npm install i18next-infer-missing-key
```

**Usage**

**Inferring Context from a Key**

```typescript
import { i18nextInferkey } from 'i18next-infer-missing-key';

const key = 'my_key_male_mobile_short';
const inferredContext = i18nextInferkey(key);

console.log(inferredContext);
// Output: { key: 'my_key', context: 'male', deviceContext: 'mobile', variant: 'short' }
```

**Inferring a Key from Context**

```typescript
import { i18nextInferContext } from 'i18next-infer-missing-key';

const context = {
  key: 'my_key',
  context: 'female',
  deviceContext: 'desktop',
};

const inferredKey = i18nextInferContext(context);

console.log(inferredKey);
// Output: 'my_key_female_desktop'
```

**Why Use i18next-infer-missing-key?**

- **Simplify i18next Key Management:** Automatically infer context and variants from keys or construct keys from context objects.
- **Improve Code Readability:** Use clear context objects instead of complex key strings.
- **Enhance Code Maintainability:** Easily update and manage i18n keys.

**Contributing**

Feel free to contribute to this library by submitting issues or pull requests.

**License**

This library is released under the MIT License.
