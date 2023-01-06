<p align="center">
  <a href="https://decent.land">
    <img src="./img/new-logo.png" height="200">
  </a>
  <h3 align="center"><code>@decentdotland/fuel-signer</code></h3>
  <p align="center">fuel.network message signing util repo for molecule.sh</p>
</p>

## Build & Run

```console
git pull https://github.com/decentldotland/fuel-signer.git

npm run build && npm run start
```

## API

- `GET /verify/:signature/:address/:message` 
- example: `/verify/0xa088484b70e50977ccd206193aea3b7ce455c0dcdb81b1cdb9107087576a354b9777a81413024c2b32fc604c69b00f9b3c94e0dc6b0e46241a51a72c0a6d3933/fuel1jnluc5acjf5y4nh6a0y28499jhjj32x0ve8wk0hndugzpvyqn5xsfsfzly/aGVsbG8=`

**Response:**

```json
{
  "address": "fuel1fv6zznxp2mstkm8ma5vuptezypdumslfxpk95lv6fk6gcx5vxs3qpeckhg",
  "message": "hello"
}

```

***N.B: message should be encoded in base64***

## License
This repository is licensed under the [MIT License](./LICENSE)