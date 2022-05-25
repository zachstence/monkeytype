export const CLIENT_VERSION = "DEVELOPMENT-CLIENT";

$(document.body).on("click", ".version", async (e) => {
  if (e.shiftKey) {
    alert(
      "version: " +
        CLIENT_VERSION +
        "\n\n" +
        "sw cache: " +
        (await caches.keys())
    );
  }
});
