# 19 November 2026 — World News in One Image

Entry for the make.fun bounty
[`news-image-20261119`](https://make.fun/bounty/news-image-20261119):
sum up Thursday 19 November 2026's world news in one image.

## The image

`entry.png` is a 1024×1024 newspaper front page drawn programmatically
(Python + PIL, real text throughout so every headline stays legible):

1. **Trump, Xi and Putin meet in first three-way summit** — Shenzhen, on the
   APEC sidelines; joint declaration on nuclear-risk dialogue, no major deal.
2. **World court: Myanmar committed genocide** — the ICJ ruled 9–6 that
   Myanmar committed genocide against the Rohingya in 2017, the first time
   the court has held a state responsible.
3. **Anthropic's record $81bn stock debut** — the largest IPO in history;
   shares priced at $83, up about 17% on day one.
4. **Ukraine hits Crimean Bridge a third time** — rail section hit, trains
   halted, as Russian strikes killed at least five.
5. **Israeli tanks push into central Gaza** — ground operation despite the
   ceasefire, beyond the Yellow Line near Nuseirat.
6. **US strikes Iran island; Tehran hits back at Gulf states** — Qeshm
   struck; Iran retaliated against Kuwait and Bahrain.

Plus an "Also today" strip: the Dow's 1,090-point fall, Cyclone Akvan
nearing India's east coast, and COP31 talks entering their final stage.
Every story was first reported on 19 November 2026.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. No network, no randomness — two runs
write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
