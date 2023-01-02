interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Social extends SanityBody {
  _type: string;
  title: string;
  url: string;
}

export interface Image extends SanityBody {
  __type: image;
  asset: {
    _ref: string;
    _type: reference;
  };
}
export interface PageInfo extends SanityBody {
  _type: string;
  email: string;
  name: string;
  phoneNumber: string;
  heroImage: Image;
  profilePic: Image;
  role: string;
  backgroundInfo: string;
  socials: Social[];
  typewriter: Array;
}
export interface Skill extends SanityBody {
  _type: string;
  image: Image;
  progress: Number;
  title: string;
}
export interface Project extends SanityBody {
  _type: string;
  title: string;
  technologies: Skill[];
  summary: string;
  image: Image;
  linkToBuild: string;
}
export interface Experience extends SanityBody {
  _type: string;
  titlbackgroundInfoe: string;
  company: string;
  companyImage: Image;
  dateEnded: Date;
  dateStarted: Date;
  isCurrentlyWorkingThere: Boolean;
  jobTitle: string;
  points: Array;
  technologies: Skill[];
  backgroundInfo: string;
}
