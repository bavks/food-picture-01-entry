# food-picture-01 entry

A tiny Node program whose only job is to deliver one food photograph:
it copies `entry.png` into the output directory when run.

The image's story: a steaming bowl of tonkotsu ramen in moody window
light — glossy broth, seared chashu, a jammy soft egg, and chopsticks
lifting the noodles — shot like an editorial food photograph.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, byte-identical to the `entry.png` in this
repository (JPEG bytes under a .png name, 1024x1024).
