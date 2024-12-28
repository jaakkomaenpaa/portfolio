import { AppIcon, FileSystemNode, ProgramType } from '../types'

export const FILE_SYSTEM: FileSystemNode[] = [
  {
    id: 0,
    title: 'root',
    type: ProgramType.Folder,
    iconKey: AppIcon.FolderColored,
    contentKey: '0',
    children: [
      {
        id: 7,
        title: 'apps',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '7',
        children: [
          {
            id: 13,
            title: 'calculator',
            type: ProgramType.App,
            iconKey: AppIcon.Calculator,
            contentKey: 'Calculator',
          },
          {
            id: 14,
            title: 'random-advice',
            type: ProgramType.App,
            iconKey: AppIcon.QuoteMark,
            contentKey: 'Random advice',
          },
        ],
      },
      {
        id: 11,
        title: 'console',
        type: ProgramType.App,
        iconKey: AppIcon.Code,
        contentKey: 'Cmd line',
      },
      {
        id: 12,
        title: 'settings',
        type: ProgramType.App,
        iconKey: AppIcon.Settings,
        contentKey: 'Settings',
      },
      {
        id: 1,
        title: 'info',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '1',
        children: [
          {
            id: 2,
            title: 'about-me',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'About me',
          },
          {
            id: 3,
            title: 'skills',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Skills',
          },
          {
            id: 4,
            title: 'education',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Education',
          },
          {
            id: 5,
            title: 'experience',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Experience',
          },
          {
            id: 6,
            title: 'portfolio',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Portfolio',
          },
        ],
      },
      {
        id: 8,
        title: 'links',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '8',
        children: [
          {
            id: 9,
            title: 'GitHub',
            type: ProgramType.Link,
            iconKey: AppIcon.GitHub,
            contentKey: 'https://github.com/jaakkomaenpaa',
          },
          {
            id: 10,
            title: 'LinkedIn',
            type: ProgramType.Link,
            iconKey: AppIcon.LinkedIn,
            contentKey: 'https://www.linkedin.com/in/jaakko-mäenpää-37a11a262',
          },
        ],
      },
    ],
  },
]
