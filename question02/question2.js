const resolvedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(res({ message: "delayed success!" }), 500);
  });

const rejectPromise = () =>
  new Promise((res, rej) => {
    setTimeout(rej({ error: "delayed error!" }), 500);
  });

resolvedPromise().then((output) => console.log(output));
rejectPromise().catch((output) => console.error(output));