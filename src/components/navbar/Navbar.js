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
        <Container
          css={{
            p: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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

          {/* <Text
              size={15}
              weight='bold'
              css={{
                textGradient: '45deg, $blue500 -20%, $pink500 50%',
              }}
            > */}
          <em>Críticas de cine en un solo lugar</em>
          {/* </Text> */}
        </Container>
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
  );
};

export default Navbar;
