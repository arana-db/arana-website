import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Xxxx xx Xxx',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Xxxxxx xxxx xxx x x xxxxxx xxxx xxxx xxxx xxxx xx.
      Xxxx x x xxxxx xxxxxxx xxxxx.
      </>
    ),
  },
  {
    title: 'Xxxxxxx xxxx xxxxxx',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Xxxxxx xxxx xxx x x xxxxxx xxxx xxxx xxxx xxxx xx.
      Xxxx x x xxxxx xxxxxxx xxxxx.
      </>
    ),
  },
  {
    title: 'Xxxxxxx xx Xxxxx',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Xxxxxx xxxx xxx x x xxxxxx xxxx xxxx xxxx xxxx xx.
        Xxxx x x xxxxx xxxxxxx xxxxx.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
