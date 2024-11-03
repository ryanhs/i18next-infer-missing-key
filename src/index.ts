export type I18nextInfer = {
  key: string;
  countForm?: string;
  context?: string;
};

// Function to infer context and count from key
export function i18nextInferKey(
  key: string,
  prev: I18nextInfer = { key }
): I18nextInfer {
  // Patterns to identify count and context
  const patterns: { prop: keyof I18nextInfer; regex: RegExp }[] = [
    { prop: 'countForm', regex: /_(one|two|few|many|other)$/i },
    { prop: 'context', regex: /_([a-zA-Z0-9]+)$/ }, // Alphanumeric context
  ];

  for (const { prop, regex } of patterns) {
    const match = key.match(regex);
    if (match) {
      const newKey = key.replace(regex, ''); // Strip the matched suffix
      return i18nextInferKey(newKey, {
        ...prev,
        key: newKey,
        [prop]: match[1],
      });
    }
  }

  return prev;
}

// Function to infer key from context
export function i18nextInferContext(ctx: I18nextInfer): string {
  let fullKey = ctx.key;

  // https://www.i18next.com/translation-function/context#combining-with-plurals

  // context first
  if (ctx.context) {
    fullKey += `_${ctx.context}`;
  }

  // plural second
  if (ctx.countForm) {
    fullKey += `_${ctx.countForm}`;
  }

  return fullKey;
}
