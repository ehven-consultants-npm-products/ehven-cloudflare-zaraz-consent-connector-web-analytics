# Cloudflare Web Analytics connector

Development candidate for `@ehven/cloudflare-zaraz-consent-connector-web-analytics`.
Supplies the provider-specific external beacon tag and purpose-owned native Zaraz
Custom HTML recipe. It does not inject scripts or enable a property by itself.

Call `webAnalyticsTool({token, purpose, triggers?})` and place the returned entry
in the core configuration's `tools` map. Supply a public 32-character lowercase
hexadecimal RUM property token and an explicit declared purpose. Default firing
trigger is `Pageview`. The core validates references and enforces scope/consent.

The native catalog identifier is `html`, with `execute_unsafe_scripts` permission.
No inline JavaScript loader or second browser bootstrap is included. The standard
tag disables SPA measurement. Actual provider requests, property ingestion and
accepted-state performance require native acceptance; a generated tag is not proof
of ingestion. No runtime npm dependencies. Node 24+ for recipe generation.

Support continued development through [Ehven Consultants](https://ehven.com/contact/).

After publication, install into the host project:

```sh
npm install @ehven/cloudflare-zaraz-consent-connector-web-analytics
```

Requires Node.js 24+ for server-side recipe generation.
Report reproducible issues through the repository issue tracker. Keep cookie values,
credentials, identities and private form contents out of reports. Support is best effort.
