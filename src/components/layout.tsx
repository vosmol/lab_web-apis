import {
  AppShell,
  Box,
  Burger,
  Header,
  Navbar,
  useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction
} from 'react';

export const Layout: FC<
  PropsWithChildren<{
    menuOpened: boolean;
    setMenuOpened: Dispatch<SetStateAction<boolean>>;
    navbarContent: ReactNode;
  }>
> = ({ children, navbarContent, menuOpened, setMenuOpened }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <AppShell
      fixed
      padding="md"
      header={
        matches ? (
          <Header height={60} p="md">
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Burger
                opened={menuOpened}
                onClick={() => setMenuOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </Box>
          </Header>
        ) : undefined
      }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!menuOpened}
          width={{ sm: 300 }}
        >
          {navbarContent}
        </Navbar>
      }
    >
      <Box sx={{ position: 'relative', minHeight: '100%' }}>{children}</Box>
    </AppShell>
  );
};
