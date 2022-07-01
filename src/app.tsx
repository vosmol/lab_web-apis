import { Box, Stack, UnstyledButton } from '@mantine/core';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { DEFAULT_PATH, ROUTES } from './routes';
import { useUiStore } from './store';

export const App = () => {
  const setMenuOpened = useUiStore((state) => state.menu.setMenuOpened);

  return (
    <BrowserRouter>
      <Layout
        navbarContent={
          <Box onClick={() => setMenuOpened(false)}>
            <Stack spacing="sm">
              {Object.entries(ROUTES).map(([routeName, V]) => (
                <Link
                  to={V.path}
                  key={V.path}
                  style={{ textDecoration: 'none' }}
                >
                  <UnstyledButton
                    sx={({ spacing, colors, radius }) => ({
                      display: 'block',
                      width: '100%',
                      borderRadius: radius.sm,
                      padding: spacing.xs,
                      backgroundColor: colors.gray[0],
                      '&:hover': {
                        backgroundColor: colors.gray[1]
                      }
                    })}
                  >
                    {routeName}
                  </UnstyledButton>
                </Link>
              ))}
            </Stack>
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
