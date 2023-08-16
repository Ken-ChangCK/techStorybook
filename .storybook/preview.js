/** @type { import('@storybook/react').Preview } */
import { theme, ChakraProvider, Box } from "@chakra-ui/react";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    features: {
      emotionAlias: false,
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chromatic: { viewports: [320, 1200] },
    chakra: {
      theme,
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Box bg="white" w="100%" p={4} color="white">
        {Story()}
      </Box>
    </ChakraProvider>
  ),
];

export default preview;
