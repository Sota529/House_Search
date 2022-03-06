import { ChakraProvider } from "@chakra-ui/react";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


const withChakra = (StoryFn: Function) => {
    return (
        <ChakraProvider >
            <div id="story-wrapper">
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const decorators = [withChakra];