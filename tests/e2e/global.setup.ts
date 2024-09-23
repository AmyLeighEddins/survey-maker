import { DockerComposeEnvironment, Wait } from 'testcontainers';
import path from 'path';
import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('creating new database...');
  // Initialize the database
  const composeFilePath = path.resolve(__dirname, '../../');
  const composeFile = 'docker-compose.yml';

  try {
    global.__ENVIRONMENT__ = await new DockerComposeEnvironment(
      composeFilePath,
      composeFile
    )
      .withProfiles('e2e')
      // .withProfiles('be', 'fe')
      .withWaitStrategy('api-1', Wait.forLogMessage(/^Server started on 3001/))
      .up();
  } catch (e) {
    console.log(e);
  }

  console.log('Database Created');

  await new Promise((x) => setTimeout(x, 500));
}

export default globalSetup;