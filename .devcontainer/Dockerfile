FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Install additional OS packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git-core

# [Optional] Install global node packages
RUN su node -c "npm install -g npm@latest"

# [Optional] Set working directory
WORKDIR /workspaces/carrot-website 