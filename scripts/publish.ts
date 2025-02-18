import { execaCommand } from 'execa';

async function publish(): Promise<void> {
  // publish the stable public packages
  await execaCommand(
    `yarn lerna exec --ignore '@algolia/client-composition' --no-bail -- npm_config_registry=https://registry.npmjs.org/ npm publish --access public`,
    {
      shell: 'bash',
    },
  );

  // publish the prereleases private packages
  await execaCommand(
    `yarn lerna exec --scope '@algolia/client-composition' --no-bail -- npm_config_registry=https://registry.npmjs.org/ npm publish --access private --tag alpha --tag latest`,
    {
      shell: 'bash',
    },
  );
}

publish();
