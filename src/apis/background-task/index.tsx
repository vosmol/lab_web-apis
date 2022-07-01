import {
  Button,
  DefaultMantineColor,
  Paper,
  Progress,
  SimpleGrid
} from '@mantine/core';
import { useState } from 'react';
import { ApiTitle } from '../../components/api-title';

function getLoaderColorFromProgress(progress: number): DefaultMantineColor {
  if (progress >= 100) return 'green';
  if (progress > 90) return 'lime';
  if (progress > 60) return 'yellow';
  return 'orange';
}

export default function API_BackgroundTask() {
  const [progress, setProgress] = useState(0);

  function processData() {
    setProgress((v) => Math.min(v + 10, 100));
  }

  return (
    <>
      <ApiTitle
        title="Background Tasks API"
        docsLink="https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API"
      />
      <SimpleGrid>
        <Paper radius="md" p="xl" withBorder>
          <Progress
            color={getLoaderColorFromProgress(progress)}
            striped
            animate
            value={progress}
            mb="md"
          />
          <Button variant="outline" onClick={processData} color="teal">
            Run
          </Button>
        </Paper>
      </SimpleGrid>
    </>
  );
}
