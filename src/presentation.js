import React from 'react';

import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  Layout,
  Link,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./overrides.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: 'black',
    tertiary: 'black',
    quaternary: 'black',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const dayViewCode = (
`<Page>
  <Header /> /*<-- knows if the user is logged in*/
  <SearchControls /> /*<-- knows where to get autosuggest options*/
  <Aside left>
    <Filters /> /*<-- this is a local component*/
  </Aside>
  <FlightResults /> /*<-- knows where to get the results from*/
  <Aside rigth>
    <Ads /> /*<-- knows what ads to display*/
  </Aside>
</Page>
`);

export default () => (
    <Deck
      transition={['slide']}
      transitionDuration={200}
      theme={theme}
      progress="bar"
      showFullscreenControl={false}
    >
      <Slide id="title">
        <Image src="images/microsites-logo.png" alt="Micro frontends" />
        <Text fit bold>
          micro frontend architecture in 15 minutes
        </Text>
        <Text textSize="smaller" textAlign="right">@debelbot</Text>
      </Slide>

      <Slide id="about-me">
        <Image src="images/me.jpg" />
        <Heading size={4} style={{ 'padding-bottom': '0px', 'margin-bottom': '0px' }}>
         Hi, I'm Misho
        </Heading>
        <List style={{ 'padding-top': '0px', 'margin-top': '0px' }}>
          <ListItem>Senior full-stack engineer at Skyscanner</ListItem>
          <ListItem>Rick and Morty fan, Board Game Geek, Juggler</ListItem>
        </List>
      </Slide>

      <Slide id="about-skyscanner">
        <Image alt="skyscanner" src="images/skyscanner.png" />
        <List>
          <ListItem>Global travel engine with 100M users</ListItem>
          <ListItem>500+ engineers in 10 offices</ListItem>
          <ListItem>a strong dev culture</ListItem>
        </List>
      </Slide>

      <Slide id="conway-quote-1">
        <BlockQuote>
          <Quote>Organizations design systems which are copies of their communication structures</Quote>
          <Cite>Melvin Conway</Cite>
        </BlockQuote>
      </Slide>

      <Slide id="monolith">
        <Image src="images/monolith.jpg" />
      </Slide>

      <Slide id="monoliths-2">
        <Image src="images/monolith-frontback.png" />
      </Slide>

      <Slide id="micro-frontends-1">
        <Image src="images/micro-frontends-doggy.jpg" />
      </Slide>

      <Slide id="micro-frontends-2">
        <Image src="images/microservices-fullstack-verticals.png" />
      </Slide>

      <Slide id="micro-sites-1">
        <Image src="images/microsites.png" />
      </Slide>

      <Slide id="scale-quote">
        <BlockQuote>
          <Quote>There is nothing "micro" about a site with a 100M users</Quote>
          <Cite>Codefucius</Cite>
        </BlockQuote>
      </Slide>

      <Slide id="big-change">
        <Heading size={5}>A big shift in technology</Heading>
        <hr />
        <Heading size={2}>A bigger shift in architecture</Heading>
        <hr />
        <Text italic>requires extra tooling and coordination</Text>
      </Slide>

      <Slide id="micro-frontends-architecture">
        <Heading size={4}>Micro frontends architecture</Heading>
        <Image src="images/micro-front-ends.jpeg" />
      </Slide>

      <Slide id="benefits">
        <Heading size={4}>Mirco frontend benefits</Heading>
        <List>
          <ListItem>Independent development</ListItem>
          <ListItem>Independent deployment</ListItem>
          <ListItem>Independent scalability</ListItem>
          <ListItem>Independent failure</ListItem>
        </List>
      </Slide>

      <Slide id="independent-development">
        <Heading size={4}>Independent development</Heading>
        <Text>
          Different teams are solving a diverse and often contradictory set of problems
        </Text>
      </Slide>

      <Slide id="you-build-it-you-run-it">
        <Heading size={4}>You Build it, You Run it</Heading>
        <Text>Teams build, run and own their own pages & components,
              whilst using common tools to minimise overhead,
              achieving better balance of flexibility, control and ownership.
        </Text>
      </Slide>

      <Slide id="independent-deployment">
        <Heading size={4}>Independent deployment</Heading>
        <Text>
          Each team should be able to deliver value to the clients at their own pace
        </Text>
      </Slide>

      <Slide id="independent-deployment-2">
        <Heading size={4}>Independent Deployment</Heading>
        <Image src="images/deployment-2.png" />
      </Slide>

      <Slide id="independent-scalability">
        <Heading size={4}>Independent scalability</Heading>
        <Text>
          If only a few pages get most of the requests do we need to upscale all pages?
        </Text>
      </Slide>

      <Slide id="autoscaling">
        <Heading size={4}>Autoscaling based on metrics</Heading>
        <Image src="images/autoscaling.png" />
      </Slide>

      <Slide id="independent-failure">
        <Heading size={4}>Independent failure</Heading>
        <Text>
          Compartmentalization: a problem in one page should not cause a problem in another
        </Text>
      </Slide>

      <Slide id="titanic-little-bug">
        <Image src="images/titanic.jpg" />
      </Slide>

      <Slide id="great-power-great-responsibility">
        <Heading size={4}>Great Power, Great Responsibility</Heading>
        <Text>
          Teams have complete control of their pages, which comes with a substantial responsibility.
          To be successful, teams need to be smart and sensible with their decisions & actions.
        </Text>
      </Slide>

      <Slide id="tooling">
        <Heading size={4}>Tooling</Heading>
        <List>
          <ListItem>Full-stack components</ListItem>
          <ListItem>Bootstrapping microsites</ListItem>
          <ListItem>Routing</ListItem>
        </List>
      </Slide>

      <Slide id="shared-components">
        <Heading size={4}>Backpack<br/> shared component library</Heading>
        <List>
          <ListItem>Consistent</ListItem>
          <ListItem>Resusable</ListItem>
          <ListItem>Easy to upgrade</ListItem>
          <ListItem>Easy to prototype</ListItem>
        </List>
      </Slide>

      <Slide id="backpack-2">
        <Heading size={4}>Backpack</Heading>
        <Image width="50%" src="images/backpack.png" />
      </Slide>

      <Slide id="oc-1">
        <Image width="25%" src="images/opencomponents-logo.png" />
        <Heading size={6}>Open Components</Heading>
        <Heading size={5}>full-stack components</Heading>
      </Slide>

      <Slide id="atomic-design-full-stack">
        <Heading size={6}>Open Components</Heading>
        <Heading size={4}>Full-stack atomic design</Heading>
        <List>
          <ListItem>Encapsulate data fetching</ListItem>
          <ListItem>Encapsulate server-side rendering</ListItem>
          <ListItem>Encapsulate deployment and scaling</ListItem>
        </List>
      </Slide>

      <Slide id="widgets">
        <Image src="images/widgets.jpg" />
      </Slide>

      <Slide id="oc-3">
        <Heading size={4}>Dynamically loading OCs</Heading>
        <Image width="66%" src="images/oc-dataflow-1.jpg" />
      </Slide>

      <Slide id="day-view-breakdown">
        <Heading size={4}>Composing the results page</Heading>
        <Image width="50%" src="images/day-view.png" />
      </Slide>

      <Slide id="day-view-code">
        <Heading size={4}>Composing the results page</Heading>
        <CodePane lang="js" theme="external" source={dayViewCode} />
      </Slide>

      <Slide id="alternatives">
        <Heading size={4}>Alternatives to Open Components</Heading>
        <List>
          <ListItem>Hypernova</ListItem>
          <ListItem>JAM stack</ListItem>
          <ListItem>GraphQL</ListItem>
        </List>
      </Slide>

      <Slide id="goldberg">
        <Image src="images/goldberg.jpg" />
      </Slide>

      <Slide id="project-bootstrap">
        <Heading size={4}>Bootstrapping</Heading>
        <List>
          <ListItem>create-react-app + backpack</ListItem>
          <ListItem>express + OC + SSR</ListItem>
          <ListItem>CI + CD</ListItem>
        </List>
      </Slide>

      <Slide id="project-bootstrap-2">
        <Heading size={4}>Bootstrapping</Heading>
        <List>
          <ListItem>Fast prototyping</ListItem>
          <ListItem>Production ready out of the box</ListItem>
          <ListItem>Common structure and best practices</ListItem>
        </List>
      </Slide>

      <Slide id="request-handler-1">
        <Heading size={4}>Micro-sites routing</Heading>
        <Image width="66%" src="images/request-handler.png" />
      </Slide>

      <Slide id="request-handler-2">
        <Heading size={4}>Request handler</Heading>
        <List>
          <ListItem>handles every single request</ListItem>
          <ListItem>needs to be super fast and reliable</ListItem>
          <ListItem>top level routing only, no complicated logic</ListItem>
        </List>
      </Slide>

      <Slide id="the-good">
        <Heading size={4}>Micro frontends: the good</Heading>
        <List>
          <ListItem>Independent development</ListItem>
          <ListItem>Independent deployment</ListItem>
          <ListItem>Focused scope</ListItem>
          <ListItem>DRY / code reuse (when done right)</ListItem>
        </List>
      </Slide>

      <Slide id="the-bad">
        <Heading size={4}>Micro frontends: the bad</Heading>
        <List>
          <ListItem>Larger payload size</ListItem>
          <ListItem>Dependency management</ListItem>
          <ListItem>Coordination overhead</ListItem>
          <ListItem>Extra tooling required</ListItem>
          <ListItem>Fragmentation, reinventing the wheel (when done wrong)</ListItem>
        </List>
      </Slide>

      <Slide id="dyatlov">
        <Heading size={4}>Larger payload size</Heading>
        <Image src="images/dyatlov-js.jpg" />
      </Slide>

      <Slide id="charlie">
        <Heading size={4}>Dependency management</Heading>
        <Image src="images/charlie.jpg" />
      </Slide>

      <Slide id="office">
        <Heading size={4}>Coordination overhead</Heading>
        <Image src="images/office.jpg" />
      </Slide>

      <Slide id="developit">
        <Heading size={4}>Fragmentation</Heading>
        <Image width="66%" src="images/tweet-macro-frontends.png" />
      </Slide>

      <Slide id="conway-quote-2">
        <BlockQuote>
          <Quote>Organizations design systems which are copies of their communication structures</Quote>
          <Cite>Melvin Conway</Cite>
        </BlockQuote>
      </Slide>

      <Slide id="no-demo">
        <Image width="40%" src="images/no-demo.jpg" />
      </Slide>

      <Slide id="thank-you">
        <Heading>Thank you!</Heading>
        <Heading fit>Enjoy your beer...js!</Heading>
      </Slide>
    </Deck>
  );

  const extraSlides = (
    <div>
    <Slide id="atomic_design">
      <Heading size={4}>Atomic Design</Heading>
      <List>
       <ListItem>
         Methodology for creating design systems<br/>
         <span style={{ fontSize: 'smaller', fontStyle:'italic'}}> (as opposed to ad-hoc collections of web pages)</span>
       </ListItem><hr/>
       <ListItem>An equal partnership between design and engineering</ListItem>
      </List>
    </Slide>

    <Slide id="atomic-design-concepts">
      <Heading size={4}>Atomic Design: Concepts</Heading>
      <Layout>
        <div className="atomic-design-image">
          <Image src="images/atomic-design-tokens.png" />
          <span>Tokens</span>
        </div>
        <div className="atomic-design-image">
          <Image src="images/atomic-design-atoms.png" />
          <span>Atoms</span>
        </div>
        <div className="atomic-design-image">
          <Image src="images/atomic-design-molecules.png" />
          <span>Molecules</span>
        </div>
      </Layout>
      <Layout>
        <div className="atomic-design-image">
          <Image src="images/atomic-design-organisms.png" />
          <span>Organisms</span>
        </div>
        <div className="atomic-design-image">
          <Image src="images/atomic-design-systems.png" />
          <span>Systems</span>
        </div>
      </Layout>
    </Slide>

    <Slide id="atomic-design-principles">
      <Heading size={4}>Atomic Design: Principles</Heading>
      <List>
        <ListItem>Composability</ListItem>
        <ListItem>Reusability</ListItem>
        <ListItem>Consistency</ListItem>
        <ListItem>Maintainability</ListItem>
      </List>
    </Slide>

    <Slide id="the-goods-quote">
      <Image width="50%" src="images/tweet-best-practices.png" />
    </Slide>

    <Slide id="green-blue-deployment">
      <Heading size={4}>Green Blue Deployment</Heading>
      <Image src="images/bluegreen2.png" />
    </Slide>

    <Slide id="k8s-autoscaling">
      <Heading size={4}>Autoscaling magic</Heading>
      <Image src="images/kubernetes.png" />
    </Slide>
    <Slide id="backend-libraries">
      <Heading size={4}>node-core<br/> shared backend Libraries</Heading>
      <List>
        <ListItem>Shared cache</ListItem>
        <ListItem>Backpressure</ListItem>
        <ListItem>Circuit breaker</ListItem>
      </List>
    </Slide>

    <Slide id="shared-cache-1">
      <Heading size={4}>Shared cache</Heading>
      <List>
        <ListItem>Limit load on server</ListItem>
        <ListItem>Reduce user latency</ListItem>
        <ListItem>Leverage multi-level caching</ListItem>
      </List>
    </Slide>

    <Slide id="shared-cache-2">
      <Heading size={4}>Shared cache</Heading>
      <Image width="75%" src="images/shared-cache.png" />
    </Slide>

    <Slide id="backpressure-1">
      <Heading size={4}>Backpressure</Heading>
      <List>
        <ListItem>Limit amount of peak workload</ListItem>
        <ListItem>Limit degradation of performance</ListItem>
        <ListItem>Limit user impact</ListItem>
      </List>
    </Slide>

    <Slide id="backpressure-2">
      <Heading size={4}>Backpressure</Heading>
      <Image src="images/backpressure.png" />
    </Slide>

    <Slide id="curcuit-breaker-1">
      <Heading size={4}>Circuit Breaker</Heading>
      <List>
        <ListItem>Respond to downstream backpressure</ListItem>
        <ListItem>Automatic downstream fallover</ListItem>
        <ListItem>Limit load on downstream services</ListItem>
      </List>
    </Slide>

    <Slide id="curcuit-breaker-2">
      <Heading size={4}>Circuit Breaker</Heading>
      <Image width="66%" src="images/curcuit-breaker.jpg" />
    </Slide>

    <Slide id="frontend-libraries">
      <Heading size={4}>Frontend Libraries</Heading>
      <List>
        <ListItem>Visual Components</ListItem>
        <ListItem>Internal Services Clients</ListItem>
        <ListItem>Browser API Wrappers</ListItem>
      </List>
    </Slide>

    <Slide id="shared-libraries-1">
      <Heading size={4}>saddlebag<br/> shared frontend libraries</Heading>
      <List>
        <ListItem>Internal Services Clients</ListItem>
        <ListItem>Browser API Wrappers</ListItem>
      </List>
    </Slide>


    <Slide id="state-management">
      <Heading size={4}>State management</Heading>
      <Text>
        With mulitple full-stack components on a page, keeping a clean and sane
        state can become tricky
      </Text>
    </Slide>

    <Slide id="event-buses">
      <Heading size={4}>Event buses</Heading>
      <Image width="75%" src="images/oc-event-bus.png" />
    </Slide>

    <Slide id="event-buses-2">
      <Heading size={4}>Event buses cons</Heading>
      <List>
        <ListItem>Does not support Async events</ListItem>
        <ListItem>Unmanaged interactions between components</ListItem>
        <ListItem>Hard to track and test events</ListItem>
      </List>
    </Slide>

    <Slide id="redux-1">
      <Heading size={4}>Redux</Heading>
      <Image width="75%" src="images/oc-redux.png" />
    </Slide>

    <Slide id="redux-2">
        <Heading size={4}>Redux cons</Heading>
        <List>
          <ListItem>Boilerplate codes and more complex interface</ListItem>
          <ListItem>Store can become too large and slow</ListItem>
          <ListItem>Not every piece of data needs to to be globally available</ListItem>
        </List>
    </Slide>

    <Slide id="one-tree">
      <Heading size={4}>One Application Tree</Heading>
      <Text>
        By rendering all components (local and full-stack)
        in the same tree, we maintain control over props and state
      </Text>
    </Slide>

    <Slide id="one-tree-benefits">
      <Heading size={4}>One Application Tree</Heading>
      <List>
        <ListItem>Top-down control over rendering</ListItem>
        <ListItem>Communication between components handled by micro-site</ListItem>
        <ListItem>Components are both decoupled from and integrated</ListItem>
      </List>
    </Slide>

    <Slide id="ums-1">
      <Heading size={4}>URL management</Heading>
      <List>
        <ListItem>URL construction</ListItem>
        <ListItem>URL validation</ListItem>
        <ListItem>Best page for parameters</ListItem>
        <ListItem>Parameter localization</ListItem>
        <ListItem>Static declaration</ListItem>
        <ListItem>Dynamic configuration</ListItem>
      </List>
    </Slide>

    <Slide id="web-eng-guild">
      <Heading size={4}>Web Engineering Guild</Heading>
      <Text>the consil of elders</Text>
      <List>
        <ListItem>Biweekly lean coffee meetings</ListItem>
        <ListItem>Sharing learnings</ListItem>
        <ListItem>Solving problems</ListItem>
        <ListItem>Building a shared foundation</ListItem>
      </List>
    </Slide>
  </div>
);
