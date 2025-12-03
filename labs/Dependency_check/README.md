# OWASP Dependency Check

Run in a Docker Container

```console
$ docker run --rm -it \
    -v "$(pwd):/src" \
    owasp/dependency-check \
    --scan /src --enableExperimental \
    --nodePackageSkipDevDependencies false # This may take a while due to NVD API download is very slow
```

Run as an OS cli tool

```
$ brew install dependency-check
$ dependency-check --scan . --format HTML --out ./ # This may take a while due to NVD API download is very slow
```