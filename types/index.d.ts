export function performanceTag(options: {token: string}): string;
export function webAnalyticsTool(options: {token: string; purpose: string; triggers?: string[]}): {
  type: string; component: string; name: string; enabled: boolean; defaultPurpose: string;
  vendorName: string; vendorPolicyUrl: string; blockingTriggers: string[]; defaultFields: Record<string, never>;
  permissions: string[]; settings: Record<string, never>;
  actions: {RUMPageview: {actionType: string; blockingTriggers: string[]; firingTriggers: string[]; data: {htmlCode: string}}};
};
