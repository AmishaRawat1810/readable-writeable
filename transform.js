const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk);
    controller.enqueue(chunk);
  },
});

await Deno.stdin.readable
  .pipeThrough(transform)
  .pipeTo(Deno.stdout.writable);
