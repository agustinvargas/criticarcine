import { Container, Grid, Text } from '@nextui-org/react';
import React from 'react';
import Settings from '../assests/Settings';
import SwitcherTheme from '../assests/SwitcherTheme';
import LastArticlesButton from '../lastArticles/LastArticlesButton';

const Navbar = () => {
  return (
    <Grid.Container
      justify='center'
      css={{ alignItems: 'center', margin: '10px 0' }}
    >
      <Grid
        xs={0}
        md={4}
        css={{
          justifyContent: 'start',
        }}
      >
        <LastArticlesButton />
      </Grid>
      <Grid xs={12} md={4}>
        {' '}
        <Text
          h1
          size={60}
          weight='bold'
          css={{
            justifyContent: 'center',
            margin: 'auto',
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
        >
          Criticar
        </Text>
      </Grid>
      <Grid
        xs={0}
        md={4}
        css={{ justifyContent: 'end', gap: '1.5rem', alignItems: 'center' }}
      >
        <Settings />
        <SwitcherTheme />
      </Grid>
      <Grid
        xs={12}
        md={0}
        css={{
          justifyContent: 'center',
          gap: '1.5rem',
          alignItems: 'center',
          marginTop: '25px',
        }}
      >
        <LastArticlesButton />
        <Settings />
        <SwitcherTheme />
      </Grid>
    </Grid.Container>
    // <Container
    //   fluid
    //   css={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'nowrap',
    //     // en celular, column
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // gap: '1.5em',
    //     margin: '10px 0',
    //   }}
    // >
    //   <Text h1 size={60} weight='bold'>
    //     Critic
    //     <span style={{ textGradient: '45deg, $blue500 -20%, $pink500 50%' }}>
    //       ar
    //     </span>
    //   </Text>
    //   <Container
    //     css={{
    //       display: 'flex',
    //       flexDirection: 'row',

    //       justifyContent: 'end',
    //       //   en movil, center
    //       alignItems: 'center',
    //       gap: '1.5em',
    //     }}
    //   >
    //     <LastArticlesButton />
    // <Settings />
    // <SwitcherTheme />
    //   </Container>
    // </Container>
  );
};

export default Navbar;
