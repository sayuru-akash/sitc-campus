import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Compare recorded DOM geometry, independently of scroll position.
// Recapture the JSON evidence in Edge when the reference or page changes.
for (const viewport of ['desktop', 'tablet', 'mobile']) {
  const read = async (name) =>
    JSON.parse(
      await readFile(
        new URL(
          `../docs/research/${name}-measurements-${viewport}.json`,
          import.meta.url,
        ),
        'utf8',
      ),
    );
  const [reference, local] = await Promise.all([
    read('reference'),
    read('local'),
  ]);
  assert.deepEqual(local.viewport, reference.viewport);
  assert.equal(local.elements.length, reference.elements.length);
  for (const [index, element] of reference.elements.entries()) {
    const actual = local.elements[index];
    assert.equal(actual.selector, element.selector);
    for (const property of ['x', 'y', 'width', 'height']) {
      assert.ok(
        Math.abs(actual.rect[property] - element.rect[property]) <= 0.1,
        `${viewport}: ${element.selector} ${property} differs`,
      );
    }
  }
  console.log(`${viewport}: ${local.elements.length} measured elements match`);
}
