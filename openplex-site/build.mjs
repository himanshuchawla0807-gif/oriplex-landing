import {cp,mkdir,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
await rm(new URL('dist/',import.meta.url),{recursive:true,force:true});
await mkdir(new URL('dist/',import.meta.url),{recursive:true});
await cp(new URL('src/',import.meta.url),new URL('dist/',import.meta.url),{recursive:true});
console.log(`Static landing page built: ${root}dist`);
