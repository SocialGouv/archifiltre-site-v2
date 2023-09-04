# Install dependencies only when needed
FROM node:16-alpine AS builder
WORKDIR /app
ARG PRODUCTION

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable

COPY . .

RUN yarn build

RUN yarn workspaces focus --production  && yarn cache clean

FROM node:16-alpine as runner
WORKDIR /app
ENV NODE_ENV production
ARG PRODUCTION

RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Block crawlers for staging deployments
RUN if [ -z "$PRODUCTION" ]; then mv -f public/robots.staging.txt public/robots.txt; \
  else rm -f public/robots.staging.txt; fi

USER 1001

EXPOSE 3000
ENV PORT 3000

CMD ["node_modules/next/dist/bin/next"]
