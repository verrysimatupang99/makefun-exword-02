// Render the contest entry, optionally in uppercase.
function renderLine(shout: boolean): string {
  const line = 'Read';
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    console.error('Usage: node main.ts [--shout] [--help]');
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
