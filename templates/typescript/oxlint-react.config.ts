import {
  RECOMMENDED_RULES,
  TANSTACK_QUERY_RULES,
  TANSTACK_START_RULES,
} from 'oxlint-plugin-react-doctor';
import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  plugins: ['typescript', 'react', 'jsx-a11y'],
  jsPlugins: [
    {
      name: 'react-doctor',
      specifier: 'oxlint-plugin-react-doctor',
    },
  ],
  rules: {
    ...RECOMMENDED_RULES,
    ...TANSTACK_START_RULES,
    ...TANSTACK_QUERY_RULES,
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
  },
});
