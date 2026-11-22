import test from 'node:test';
import assert from 'node:assert/strict';
import {performanceTag, webAnalyticsTool} from '../src/index.mjs';
test('native Custom HTML owns the standard external RUM tag under an explicit purpose', () => {
  const tool = webAnalyticsTool({token: 'a'.repeat(32), purpose: 'performance'});
  assert.equal(tool.component, 'html'); assert.equal(tool.defaultPurpose, 'performance');
  assert.deepEqual(tool.actions.RUMPageview.firingTriggers, ['Pageview']);
  assert.match(tool.actions.RUMPageview.data.htmlCode, /src="https:\/\/static.cloudflareinsights.com\/beacon.min.js"/);
  assert.match(performanceTag({token: 'a'.repeat(32)}), /"spa":false/);
  assert.throws(() => performanceTag({token: 'private@example.test'}), /token/);
  assert.throws(() => webAnalyticsTool({token: 'a'.repeat(32)}), /purpose/);
});
