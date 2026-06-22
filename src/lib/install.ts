const REPO = 'harmlessharm/spellbook';
const REPO_URL = 'https://github.com/harmlessharm/spellbook';
const RAW_BASE = 'https://raw.githubusercontent.com/harmlessharm/spellbook/main';

function typeFolder(type: string): string {
  if (type === 'tool') return 'tools';
  if (type === 'command') return 'commands';
  return 'skills';
}

export function installCommand({ type, name, entrypoint }: {
  type: string;
  name: string;
  entrypoint?: string;
}): string {
  if (type !== 'tool') return `/plugin install ${name}@spellbook`;

  if (entrypoint) {
    const ext = entrypoint.split('.').pop();
    const path = `${typeFolder(type)}/${name}/${entrypoint}`;
    if (ext === 'sh') return `curl -fsSL ${RAW_BASE}/${path} | bash`;
    if (ext === 'py') return `uvx --from "git+${REPO_URL}#subdirectory=${typeFolder(type)}/${name}" ${name}`;
  }

  return `git clone ${REPO_URL}`;
}

export const marketplaceCommand = `/plugin marketplace add ${REPO}`;
