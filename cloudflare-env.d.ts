declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    BODY_ADMIN_COLLEGE_ID?: string;
    RESEND_API_KEY?: string;
    VERIFICATION_EMAIL_FROM?: string;
  }
}
