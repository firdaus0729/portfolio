/**
 * Build `mailto:` URLs for SPA navigation.
 * Length is capped — some mail clients choke on extremely long queries.
 */
const MAX_MAILTO_BODY = 1800;

export function buildMailtoHref(params: {
  to: string;
  subject?: string;
  body?: string;
}): string {
  let body = params.body;
  if (body && body.length > MAX_MAILTO_BODY) {
    body = `${body.slice(0, MAX_MAILTO_BODY)}\n\n[Message truncated for email client limits]`;
  }

  const q = new URLSearchParams();
  if (params.subject) q.set("subject", params.subject);
  if (body) q.set("body", body);
  const qs = q.toString();
  return qs ? `mailto:${params.to}?${qs}` : `mailto:${params.to}`;
}

/** Best-effort: opens the user's default mail client. */
export function openMailto(href: string) {
  window.location.assign(href);
}
