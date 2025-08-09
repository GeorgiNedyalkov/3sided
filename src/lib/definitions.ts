export type NavigationItemComponent = {
  title: string;
  imageSrc: string;
  link: string;
};

export type NavItem = {
  title: string;
  url: string;
  components?: NavigationItemComponent[];
};
