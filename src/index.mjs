/** Provider-owned token and native recipe; core owns scope, consent and loading. */
export function performanceTag({token}) {
  if (typeof token !== 'string' || !/^[a-f0-9]{32}$/.test(token)) throw new TypeError('A valid public Cloudflare RUM token is required.');
  return `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='${JSON.stringify({token, spa: false})}' referrerpolicy="origin"></script>`;
}
export function webAnalyticsTool({token, purpose, triggers = ['Pageview']}) {
  if (typeof purpose !== 'string' || !/^[A-Za-z0-9]{1,64}$/.test(purpose)) throw new TypeError('An explicit consent purpose is required.');
  if (!Array.isArray(triggers) || !triggers.length || triggers.some(id => typeof id !== 'string' || !/^[A-Za-z0-9]{1,64}$/.test(id))) throw new TypeError('Explicit trigger IDs are required.');
  return {type: 'component', component: 'html', name: 'Cloudflare Web Analytics', enabled: true,
    defaultPurpose: purpose, vendorName: 'Cloudflare', vendorPolicyUrl: 'https://www.cloudflare.com/privacypolicy/',
    blockingTriggers: [], defaultFields: {}, permissions: ['execute_unsafe_scripts'], settings: {},
    actions: {RUMPageview: {actionType: 'event', blockingTriggers: [], firingTriggers: [...triggers], data: {htmlCode: performanceTag({token})}}}};
}
