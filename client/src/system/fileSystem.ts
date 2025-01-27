import { AppIcon, FileSystemNode, ProgramType } from '../types'

// Current last id: 14
export const FILE_SYSTEM: FileSystemNode[] = [
  {
    id: '0',
    fileName: 'root',
    title: 'Explorer',
    type: ProgramType.Folder,
    iconKey: AppIcon.Folder,
    contentKey: '0',
    children: [
      {
        id: 'e912ef26-ad5a-4612-8bcc-898fc9b4051e',
        fileName: 'console',
        title: 'Cmd line',
        type: ProgramType.App,
        iconKey: AppIcon.Code,
        contentKey: 'Cmd line',
      },
      {
        id: 'dd375b6a-96ab-4e44-ac27-a87021cf82ab',
        fileName: 'settings',
        title: 'Settings',
        type: ProgramType.App,
        iconKey: AppIcon.Settings,
        contentKey: 'Settings',
      },
      {
        id: 'b35f24ca-14db-4979-9e33-f43b1dd17c83',
        fileName: 'README',
        title: 'Portfolio',
        type: ProgramType.App,
        iconKey: AppIcon.File,
        contentKey: 'Portfolio',
      },
      {
        id: 'b70ebf3c-2051-4507-b872-e857de0eb593',
        fileName: 'cv',
        title: 'Cv',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: 'b70ebf3c-2051-4507-b872-e857de0eb593',
        children: [
          {
            id: '5f7ce742-1521-4e10-98d4-989be1d10ca1',
            fileName: 'about-me',
            title: 'About me',
            type: ProgramType.App,
            iconKey: AppIcon.File,
            contentKey: 'About me',
          },
          {
            id: '703eb4c4-a989-475d-9b4f-875fea027506',
            fileName: 'skills',
            title: 'Skills',
            type: ProgramType.App,
            iconKey: AppIcon.File,
            contentKey: 'Skills',
          },
          {
            id: '495d2867-e700-4edd-b1b6-24bc1533c45e',
            fileName: 'education',
            title: 'Education',
            type: ProgramType.App,
            iconKey: AppIcon.File,
            contentKey: 'Education',
          },
          {
            id: '678f74e6-0ce0-45b6-bea6-fc4119d4bc1d',
            fileName: 'experience',
            title: 'Experience',
            type: ProgramType.App,
            iconKey: AppIcon.File,
            contentKey: 'Experience',
          },
          {
            id: 'a55730c2-2dfd-4781-8b0b-2cf337685555',
            fileName: 'contacts',
            title: 'Contacts',
            type: ProgramType.App,
            iconKey: AppIcon.Contacts,
            contentKey: 'Contacts',
          },
        ],
      },
      {
        id: '85fd8050-1b5b-4c19-aac1-e7ccf4f4b71a',
        fileName: 'apps',
        title: 'Apps',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '85fd8050-1b5b-4c19-aac1-e7ccf4f4b71a',
        children: [
          {
            id: 'd7fb00ae-62b1-40bd-9ba5-11ee88398d91',
            fileName: 'calculator',
            title: 'Calculator',
            type: ProgramType.App,
            iconKey: AppIcon.Calculator,
            contentKey: 'Calculator',
          },
          {
            id: '821f180c-547b-41d5-9709-14e254903fd1',
            fileName: 'random-advice',
            title: 'Random advice',
            type: ProgramType.App,
            iconKey: AppIcon.QuoteMark,
            contentKey: 'Random advice',
          },
        ],
      },
      {
        id: '88a1d69a-9389-4411-96fb-cf876b225e0e',
        fileName: 'links',
        title: 'Links',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '88a1d69a-9389-4411-96fb-cf876b225e0e',
        children: [
          {
            id: '9e088d45-4aec-459a-b101-843014647dd9',
            fileName: 'GitHub',
            title: 'GitHub',
            type: ProgramType.Link,
            iconKey: AppIcon.GitHub,
            contentKey: 'https://github.com/jaakkomaenpaa',
          },
          {
            id: '07dcc46d-2902-4a23-ba0a-62c6ece71aea',
            fileName: 'LinkedIn',
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
