export const nav = [
    {
      text: '標題1',
      items: [
        {
          text: '標題1 子層',
          items: [
            {
              text: '標題1-1-1',
              link: '1-1-1 相對路徑' // 對應page的路徑
            }
          ]
        },
      ]
    },
    {
      text: '標題2',
      link: '標題2 相對路徑'
    },
    {
        text: 'Test',
        items: [
          {
            text: 'Test子層',
            link: '/page/guide/test.md'
          },
        ]  
    }
  ]