import React from 'react';
import { Header } from '../components/header';
import { FirstBanner } from '../components/first-banner';
import { Work } from '../components/work';

export const HomeContainer = () => {
  return (
    <>
      <Header />
      <FirstBanner />
      <section id="works">
        <Work />
      </section>
    </>
  );
};
