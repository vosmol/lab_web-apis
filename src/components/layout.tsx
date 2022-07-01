import {
  AppShell,
  Box,
  Burger,
  Header,
  Navbar,
  useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { useUiStore } from '../store';

export const Layout: FC<
  PropsWithChildren<{
    navbarContent: ReactNode;
  }>
> = ({ children, navbarContent }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const { opened, toggleMenu } = useUiStore((state) => state.menu);

  return (
    <AppShell
      fixed
      padding="md"
      header={
        matches ? (
          <Header height={60} p="md">
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Burger opened={opened} onClick={toggleMenu} size="sm" mr="xl" />
            </Box>
          </Header>
        ) : undefined
      }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
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
