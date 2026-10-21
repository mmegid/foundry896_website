# Foundry 896 website

Static website for https://foundry896.com, served by Nginx through Docker Compose and Traefik.

## Folder layout

- `releases/`: versioned website releases, including HTML, CSS, JavaScript, images, and fonts.
- `current`: symbolic link to the active release (`releases/20260921-1342`). Git preserves this link.
- `nginx.conf`: Nginx configuration for serving the active release.
- `compose.yml`: production container configuration and Traefik routing.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8080 --directory current
```

Open http://localhost:8080. This previews the static files; it does not apply the production Nginx configuration.

## Production

The Compose configuration expects Docker Compose, an existing external Docker network named `proxy`, and Traefik configured with the `websecure` entrypoint and `letsencrypt` certificate resolver.

```sh
docker compose up -d
```

Keep each release's files under `releases/` and point `current` to the intended release. The link must use a relative target inside this repository. Recreate the website container after changing the link so its bind mount uses the selected release:

```sh
docker compose up -d --force-recreate website
```

Local credentials, environment files, and agent settings are excluded from Git.
