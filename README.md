# Docker Host Example

```bash
$ docker compose up -d
$ pnpm start
```

Visit `http://localhost:1234` and you should see the greeting fetched from the
express server.

```
extra_hosts:
    - host.docker.internal:host-gateway
```

The above container option in the `docker-compose.yml` allows
`host.docker.internal` to access the host machine when running Docker on Linux.

When using Docker on Mac and Windows, `host.docker.internal` will work out of
the box. Adding the above option does not affect the behavior either, it is just
extraneous.
