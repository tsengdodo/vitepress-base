export const sidebar = {
    '/page/guide/': [
      {
        text: 'sideMenu標題 1',
        items: [
          { 
            text: 'sideMenu標題 1-1',
            collapsible: true,    // 初始展開
            collapsed: true,      // 賦予收合屬性
            link: 'sideMenu標題 1-1 路徑',
            items: [
              {
                text: 'sideMenu標題 1-1 錨點1',
                link: 'sideMenu標題 1-1 路徑#錨點1',
              },
              {
                text: 'sideMenu標題 1-1 錨點2',
                link: 'sideMenu標題 1-1 路徑#錨點2',
                items: [
                  {
                    text: 'sideMenu標題 1-1 錨點3',
                    link: 'sideMenu標題 1-1 路徑#錨點3',
                  },
                ]
              },
              {
                text: 'sideMenu標題 1-1 錨點4',
                link: 'sideMenu標題 1-1 路徑#錨點4',
              },
            ]
          },
          {
            text: 'sideMenu標題 1-2',
            link: 'sideMenu標題 1-2 路徑'
          },
        ],
      },
    ],
  }