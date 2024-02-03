# Getting Started

First, run the development server:

```bash
npm run build
npm run dev

with ungit:

npm run designer
```

## Services

### `npm run dev` will make the following services available

* [http://localhost:3000](http://localhost:3000) to see the app.
* [http://localhost:4500](http://localhost:4500) to see alinea cms.

### If you start with `npm run designer`

Open [http://localhost:8448/](http://localhost:8448/) with your browser to see ungit.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Troubleshooting

### Alinea doesn't load

* Use a private window or clean your cache & cookies
* Are there any errors in the logs?
* Delete .next & node_modules folder

or

```bash
npm run build
```

## TODO

* Form Pages beside Static Pages
* Research for a component library (accessible, tested, documented, standardized blocks without content in another repo)
* Research for a workflow (questionnaire flows, gather data from user - one thing per page, process data)
* Research for theming