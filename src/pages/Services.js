import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Features from "components/features/ThreeColWithSideImage.js";
export default () => {

    
        const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
        const HighlightedText = tw.span`text-primary-500`;

    return (
      <AnimationRevealPage>
        <Header />
        <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
        <Footer />
      </AnimationRevealPage>
    );
  };