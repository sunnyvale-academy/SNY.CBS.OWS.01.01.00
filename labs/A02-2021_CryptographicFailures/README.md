# A02:2021 Cryptographic Failure

Access the easter egg file (thanks to null-byte injection issue)

```console
$ curl http://localhost:3000/ftp/eastere.gg%2500.md
"Congratulations, you found the easter egg!"
- The incredibly funny developers

...

...

...

Oh' wait, this isn't an easter egg at all! It's just a boring text file! The real easter egg can be found here:

L2d1ci9xcmlmL25lci9mYi9zaGFhbC9ndXJsL3V2cS9uYS9ybmZncmUvcnR0L2p2Z3V2YS9ndXIvcm5mZ3JlL3J0dA==

Good luck, egg hunter!
```

Base64 decode the string

```console
$  echo L2d1ci9xcmlmL25lci9mYi9zaGFhbC9ndXJsL3V2cS9uYS9ybmZncmUvcnR0L2p2Z3V2YS9ndXIvcm5mZ3JlL3J0dA== | base64 -d
/gur/qrif/ner/fb/shaal/gurl/uvq/na/rnfgre/rtt/jvguva/gur/rnfgre/rtt
```

Decode the chypertext using ROT13 Cesar's algorithm (too weak!?!?)
```console
$ echo "/gur/qrif/ner/fb/shaal/gurl/uvq/na/rnfgre/rtt/jvguva/gur/rnfgre/rtt" | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

Or brute force attack using https://www.dcode.fr/caesar-cipher