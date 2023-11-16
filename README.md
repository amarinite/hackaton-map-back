# Barcelona Tranquila

This API allows you to get data about people's geolocation in real time in the city of Barcelona in order to check which monuments and landmarks are emptier, so visitors can be redirected and ease tourism massification.

This project was created for Jump2Digital's 2023 hackaton. Build with NodeJS and Express.

You can check a deployed version of this API on [https://hackaton-map-back.vercel.app/monuments](https://hackaton-map-back.vercel.app/monuments).

## Monuments

List of all monuments and their basic info. Endpoint: `/monuments`.

Request:

```
[GET] https://hackaton-map-back.vercel.app/monuments
```

Response:

```
[
  {
    "id": 12,
    "lat": 41.383333,
    "lon": 2.176389,
    "title": "Plaça del Rei",
    "description": "A historic square in the Gothic Quarter, surrounded by medieval buildings and serving as a window into Barcelona's past",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Barcelona_%284711319980%29.jpg/1280px-Barcelona_%284711319980%29.jpg"
  },
  // ...
]
```

## Users

List of all visitors detected and their position. Endpoint: `/users`.

Request:

```
[GET] https://hackaton-map-back.vercel.app/users
```

Response:

```
[
  { "id": 90, "lat": 41.4163020144264, "lon": 2.16042403718754 },
  { "id": 91, "lat": 41.4101129241535, "lon": 2.10914563729911 },
  { "id": 92, "lat": 41.4121364756427, "lon": 2.16385874687313 },
  // ...
]
```
