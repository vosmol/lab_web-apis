import { Anchor, Badge, Box, Title } from '@mantine/core';
import { FC } from 'react';

export const ApiTitle: FC<{ title: string; docsLink: string }> = ({
  title,
  docsLink
}) => {
  return (
    <Box
      mb="sm"
      sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Title
        order={2}
        pl="xs"
        mr="sm"
        sx={(theme) => ({
          whiteSpace: 'nowrap',
          [`@media(max-width: ${theme.breakpoints.sm}px)`]: {
            marginBottom: '0.5rem',
            paddingLeft: 0
          }
        })}
      >
        {title}
      </Title>
      <Badge color="gray" radius="sm" p="md">
        <Anchor color="yellow" href={docsLink} target="_blank">
          Docs
        </Anchor>
      </Badge>
    </Box>
  );
};
