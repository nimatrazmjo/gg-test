# Good Game Test
![Getting Started](./screenshot.png)


<p align="center">
This project
</p>

## π Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## π§ Problem Statement <a name = "problem_statement"></a>

Every player in Empire has a castle. To let players attack another playerβs castle, we need you to create armies of randomly
distributed troops (a troop is a formation of soldiers with the same skill, such as Spearmen, Swordsmen, Archers, etc.)
For example, we'll call your code telling it we need a random army that's 167 men strong. Assuming our available unit types to be,
for example, Spearmen, Swordsmen and Archers, what we want from you is that you tell us what such a random army would look
like.

, e.g.
Our Input: 167

Example result:
```
63 Spearmen

57 Swordsmen

47 Archers
```
## π Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## Folder Structure
```
client                          # React project
βββ src                               
β   βββ **/*.js
k8s                             # Kubernetes config
β  βββ client-deployment.yaml
β  βββ ingress-service.yaml
β  βββ server-deployment.yaml
server                           # Expressjs code using typescript
βββ src
β   βββ **/*.ts

βββ docker-compose.dev.yml
βββ docker-compose.prod.yml
βββ docker-compose.test.yml
βββ docker-compose.yml
βββ package.json
βββ package-lock.json 
βββ package-lock.json 
βββ .gitignore
βββ skaffold.yaml
```

### Prerequisites

- lastet version of docker must be installed.

- docker and docker compose must be installed.

- if you want to use kubernets, skaffold need to be installed

# Installing

You can use either `docker-compose` or  `Kubernetes` using `skaffold`

## 1 - docker-compose

- Development

  ```
  npm run docker:dev
  ```
  -  open http://localhost:3000
  - GET `http://localhost:400/api/armies/:totalArmy` to crate an army
- Test

  ```
  npm run docker:test
  ```

## 2 - Kubernetes

  ```
   skaffold dev
  ```
## Deployment <a name = "deployment"></a>

run

```
skaffold run
```

then add following code to `/etc/hosts` file and open `http://gg.empire.com` in browser
```
127.0.0.1 gg.empire.com
```
## βοΈ Built With <a name = "tech_stack"></a>

- [Express](https://expressjs.com/) - Server Framework
- [Reactjs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Docker](https://www.docker.com/) - Server Environment
- [Docker Compose](https://www.docker.com/) - Server Environment
- [Kubernetes](https://kubernetes.io/) - Server Environment
- [Skaffold](https://http://skaffold.dev/) - Server Environment
- [PM2](https://pm2.keymetrics.io/) - production process manager

## βοΈ Author <a name = "authors"></a>

- [@nimatrazmjo](https://github.com/nimatrazmjo) - Initial work