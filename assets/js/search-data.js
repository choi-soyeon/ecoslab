// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "HOME",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-research",
          title: "RESEARCH",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-people",
          title: "PEOPLE",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/people/";
          },
        },{id: "nav-opportunities",
          title: "OPPORTUNITIES",
          description: "Get involved in our lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/opportunities/";
          },
        },{id: "news-the-ecology-amp-amp-social-psychology-lab-is-currently-recruiting-graduate-students-and-undergraduate-research-assistants-if-you-are-interested-in-joining-the-lab-please-see-the-opportunities-page-for-details",
          title: 'The Ecology &amp;amp;amp; Social Psychology Lab is currently recruiting graduate students and undergraduate...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6F%79%65%6F%6E.%63%68%6F%69@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
