import { Anchor, Badge, Box, Title } from '@mantine/core';
import { FC } from 'react';

export const ApiTitle: FC<{ title: string; docsLink: string }> = ({
  title,
  docsLink
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <Title
        order={2}
        mr="sm"
        sx={(theme) => ({
          whiteSpace: 'nowrap',
          [`@media(max-width: ${theme.breakpoints.sm}px)`]: {
            marginBottom: '0.5rem'
          }
        })}
      >
        {title}
      </Title>
      <Badge color="gray" radius="sm" p="md">
        <Anchor color="orange" href={docsLink} target="_blank">
          Docs
        </Anchor>
      </Badge>
    </Box>
  );
};
