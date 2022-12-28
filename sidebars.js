/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  modsSidebar: [
    // {type: 'autogenerated', dirName: 'mods'}
    {
      type: 'category',
      label: 'My Mods',
      link: {type: 'doc', id: 'mods/index'},
      items: [
        "mods/torcherino",
        "mods/travel-staff",
        "mods/entity-rain",
        "mods/find-my-friends",
        "mods/simple-xp-config",
        "mods/mercenaries",
        "mods/tiered-shulkers",
        "mods/inclusive-enchanting",
        "mods/mountables",
        "mods/tribes",
        "mods/harder-core",
      ],
    },
  ],
  postsSidebar: [
    {type: 'autogenerated', dirName: 'posts'}
  ],
  gistsSidebar: [
    {type: 'autogenerated', dirName: 'mirror'}
  ],
  tutorialSidebar: [
    "intro",
    "java-basics",
    "concepts",
    {
      type: 'category',
      label: '1.16.5',
      items: [{type: 'autogenerated', dirName: '1.16.5'}],
    },
    {
      type: 'category',
      label: '1.18.2',
      items: [{type: 'autogenerated', dirName: '1.18.2'}],
    },
    {
      type: 'category',
      label: '1.19.2',
      items: [{type: 'autogenerated', dirName: '1.19.2'}],
    },
    "mixins",
    "dependencies",
    {
      type: 'category',
      label: 'WrapperLib',
      link: {type: "doc", id: "wrapperlib/index"},
      items: [
        {type: "doc", id: "wrapperlib/installation", label: "Installation"},
        {type: "doc", id: "wrapperlib/serialization", label: "Serialization"},
        {type: "doc", id: "wrapperlib/networking", label: "Networking"},
        {type: "doc", id: "wrapperlib/config", label: "Config"},
        {type: "doc", id: "wrapperlib/keybinds", label: "Key Bindings"},
        {type: "doc", id: "wrapperlib/saved-data", label: "Saved Data"},
        {type: "doc", id: "wrapperlib/resources", label: "Resources"},
      ],
    },
    "publishing",
    "solutions"
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
