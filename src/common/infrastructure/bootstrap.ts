
import { join } from 'node:path';

import api from './api.js';

const portConfig = process.argv.find(arg => arg.startsWith('--port='));
const initConfig = process.argv.find(arg => arg.startsWith('--init='));

const [$0, port] = portConfig?.split('=') ?? [, 3000];
const [$1, init] = initConfig?.split('=') ?? [, undefined];

const rootPath = process.cwd();

if (init !== undefined)
{
    const module = await import(join(rootPath, init), { with: { type: "json" } });

    const filenames = module.default as string[];

    await Promise.all(filenames.map(filename => import(join(rootPath, filename))));
}

api.listen(port, () =>
{
    console.log(`Example app listening on port ${port}`)
});
