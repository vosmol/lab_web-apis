import { Box, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { DEFAULT_PATH, ROUTES } from './routes';

export const App = () => {
  const [opened, setOpened] = useState(false);

  return (
    <BrowserRouter>
      <Layout
        menuOpened={opened}
        setMenuOpened={setOpened}
        navbarContent={
          <Box onClick={() => setOpened(false)}>
            {Object.entries(ROUTES).map(([routeName, V]) => (
              <Link to={V.path} key={V.path} style={{ textDecoration: 'none' }}>
                <UnstyledButton
                  sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    '&:hover': {
                      backgroundColor: theme.colors.gray[0]
                    }
                  })}
                >
                  {routeName}
                </UnstyledButton>
              </Link>
            ))}
          </Box>
        }
      >
        <Routes>
          {Object.entries(ROUTES).map(([, V]) => (
            <Route path={V.path + '/*'} element={V.element} key={V.path} />
          ))}
          <Route path="*" element={<Navigate to={DEFAULT_PATH} />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
