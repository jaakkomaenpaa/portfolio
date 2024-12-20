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
        title: 'Calculator',
        type: ProgramType.App,
        iconKey: AppIcon.Calculator,
        contentKey: 'Calculator',
      },
      {
        id: 11,
        title: 'cmd-line',
        type: ProgramType.App,
        iconKey: AppIcon.Code,
        contentKey: 'Cmd line',
      },
      {
        id: 1,
        title: 'Info',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '9',
        children: [
          {
            id: 2,
            title: 'About me',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'About me',
          },
          {
            id: 3,
            title: 'Skills',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Skills',
          },
          {
            id: 4,
            title: 'Education',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Education',
          },
          {
            id: 5,
            title: 'Experience',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Experience',
          },
          {
            id: 6,
            title: 'Portfolio',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Portfolio',
          },
        ],
      },
      {
        id: 8,
        title: 'Links',
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
