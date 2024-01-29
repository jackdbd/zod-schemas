<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@jackdbd/zod-schemas](./zod-schemas.md) &gt; [gcp](./zod-schemas.gcp.md) &gt; [iam](./zod-schemas.gcp.iam.md) &gt; [client\_credentials](./zod-schemas.gcp.iam.client_credentials.md)

## gcp.iam.client\_credentials variable

**Signature:**

```typescript
client_credentials: z.ZodObject<{
    client_email: z.ZodUnion<[z.ZodString, z.ZodString, z.ZodString]>;
    private_key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    client_email: string;
    private_key: string;
}, {
    client_email: string;
    private_key: string;
}>
```