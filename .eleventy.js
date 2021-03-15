module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/img/*.jpg");
  eleventyConfig.addPassthroughCopy("./src/img/projects/");
  eleventyConfig.addPassthroughCopy("./src/img/photography/");

  eleventyConfig.setBrowserSyncConfig({
    files: ["_site/**/*"],
    open: true,
  });

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
